require 'csv'
require_relative 'mass.rb'

ENV['ENV'] = ''

module CSVHelpers
  def create_objs(raw_csv)
    # output for each row:
    #   { row[0][0]: row[x][0], row[0][1]: row[x][1], etc.  }

    headers = raw_csv[0]
    output = []
    raw_csv.each_with_index do |row, ridx|
      next if ridx == 0

      row_hash = {}
      (0...row.length).each { |cidx| row_hash[headers[cidx]] = row[cidx] }

      output << row_hash
    end
    output
  end

  def new_(key)
    # for parse_mass
    key.split('-')[0]
  end

  # rubocop:disable Metrics/MethodLength
  def parse_mass(raw_objs)
    output = []

    raw_objs.each do |obj|
      new_obj = {}

      obj.keys.each do |key|
        next if obj[key].nil?

        if key.include?('amt')
          new_obj[new_(key)] = Mass.new(obj[key], obj[new_(key) + '-unit'])
        elsif key.include?('date')
          new_obj[key] = Date.strptime(obj[key], '%d-%b-%y')
        elsif !key.include?('-')
          new_obj[key] = obj[key]
        end
      end

      output << new_obj unless new_obj.empty?
    end
    output
  end
  # rubocop:enable Metrics/MethodLength

  def output_csv(obj_data, headers, filename)
    array_data = make_array(obj_data, headers)
    write_csv_array(array_data, filename)
  end

  def write_csv_array(array_data, filename)
    CSV.open(filename, "wb") do |csv|
      array_data.each do |row|
        csv << row
      end
    end
  end

  def make_array(obj_data, headers)
    output = []
    output << headers
    obj_data.each do |row_obj|
      output << row_obj.values
    end
    output
  end
end

module CalcHelpers
  def get_food_entry(food, food_facts, date)
    # returns the object entry (or entries) from array that match 'food'
    list = food_facts.select { |entry| entry['food'] == food }

    # if log entries have no nutrition facts
    return nil if list.empty?

    if list[0]['category'] == 'recipe'
      choose_recipe(list, date)
    else
      list[0]
    end
  end

  # Choose appropriate recipe version (based on date) to use
  def choose_recipe(recipe_list, date)
    selected = 0
    recipe_list.each_with_index do |recipe, idx|
      recipe_date = Date.strptime(recipe['type'], '%d-%b-%y')
      selected = idx if date > recipe_date
    end
    recipe_list[selected]
  end

  # Calculates nutrition facts based on portion / serving size
  def calculate_facts(data, to_calc, food_facts)
    new_data = data.dup
    (0...new_data.length).each do |idx|
      food_data = get_food_entry(
        data[idx]['food'],
        food_facts,
        data[idx]['date']
      )

      # if log entries have no nutrition facts
      next if food_data.nil?

      to_calc.each do |calc|
        if food_data[calc].class == Mass
          new_data[idx][calc] = Mass.new(data[idx]['portion'].g / food_data['serving'].g * food_data[calc].g, "g")
        else
          new_data[idx][calc] = (data[idx]['portion'].g / food_data['serving'].g * food_data[calc].to_f).round(1).to_s
        end
      end
    end
    new_data
  end

  # Tally daily totals based on desired breakdown (headers_ary)
  def consolidate(log_ary, headers_ary)
    totals = {}
    log_ary.each do |obj|
      key = make_tally_key(obj, headers_ary)

      if totals[key].nil?
        totals[key] = {}
        headers_ary.each { |header| totals[key][header] = obj[header] }
        totals[key]['portion'] = obj['portion']
      else
        totals[key]['portion'] += obj['portion']
      end
    end
    totals.values
  end

  # helper fct for 'consolidate': generates tally hash key for each obj
  def make_tally_key(obj, headers_ary)
    for_key = []
    headers_ary.each { |header| for_key << obj[header] }
    for_key.join(':')
  end

  # Converts all "Mass" and "Date" objects for output (deep copy)
  def convert_to_s(data)
    new_data = []
    data.each do |row|
      new_row = row.dup
      row.keys.each do |key|
        new_row[key] =
          if row[key].class == Mass then row[key].g
          elsif row[key].class == Date then row[key].strftime("%d-%b-%y")
          else row[key]
          end
      end
      new_data << new_row
    end
    new_data
  end
end

module RecipeHelpers
  def recipe_summary_to_facts_ary(data_array)
    totals = {}
    data_array.each do |obj|
      key = obj['meal'] + ':' + obj['date'].strftime("%d-%b-%y")

      if totals[key].nil?
        totals[key] = {}
        totals[key]['food'] = obj['meal']
        totals[key]['category'] = 'recipe'
        totals[key]['type'] = obj['date'].strftime("%d-%b-%y")
        totals[key]['serving'] = Mass.new(0, 'g') + obj['portion']
        totals[key]['calories'] = obj['calories'].to_f
        totals[key]['totalfat'] = Mass.new(0, 'g') + obj['totalfat']
        totals[key]['totalcarb'] = Mass.new(0, 'g') + obj['totalcarb']
        totals[key]['protein'] = Mass.new(0, 'g') + obj['protein']
      else
        totals[key]['serving'] += obj['portion']
        totals[key]['calories'] += obj['calories'].to_f
        totals[key]['protein'] += obj['protein']
        totals[key]['totalcarb'] += obj['totalcarb']
        totals[key]['totalfat'] += obj['totalfat']
      end
    end
    totals.values
  end
end

module FileHelpers
  def get_filepath(file)
    "./#{ENV['ENV'] == 'test' ? 'test/' : ''}#{file}"
  end
end

include FileHelpers
include CSVHelpers
include CalcHelpers
include RecipeHelpers

# import nutrition info on individual foods
food_facts = parse_mass(create_objs(CSV.read(get_filepath('_nutrition.csv'))))

# define output formats
output = %w(date meal food portion calories protein totalcarb totalfat)
consolidate_by = %w(date meal food)
to_calc = %w(calories protein totalcarb totalfat)

# ======== process recipes ================
# import recipes
recipes_log = parse_mass(create_objs(CSV.read(get_filepath('_recipes.csv'))))

# summarize by day and food
consolidated_recipes = consolidate(recipes_log, consolidate_by)

# calculate nutrition facts
recipe_data = calculate_facts(consolidated_recipes, to_calc, food_facts)

# add recipes (w/ dates) to food_facts
recipe_facts = recipe_summary_to_facts_ary(recipe_data)
food_facts += recipe_facts

# =========== process log ==================

# import eating log
log = parse_mass(create_objs(CSV.read(get_filepath('_log.csv'))))

# summarize by day and food
consolidated_log = consolidate(log, consolidate_by)

# calculate nutrition facts
log_data = calculate_facts(consolidated_log, to_calc, food_facts)

# write output csv
output_csv(
  convert_to_s(recipe_data),
  output,
  get_filepath('recipes-summary.csv')
)
output_csv(
  convert_to_s(recipe_facts),
  %w(food category type serving calories totalfat totalcarb protein),
  get_filepath('recipes-nutrition.csv')
)
output_csv(
  convert_to_s(log_data),
  output,
  get_filepath('log-summary.csv')
)
