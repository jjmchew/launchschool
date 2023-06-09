require 'csv'
require_relative 'mass.rb'

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
    key.split("-")[0]
  end

  # rubocop:disable Metrics/MethodLength
  def parse_mass(raw_objs)
    output = []

    raw_objs.each do |obj|
      new_obj = {}

      obj.keys.each do |key|
        next if obj[key].nil?

        if key.include?("amt")
          new_obj[new_(key)] = Mass.new(obj[key], obj[new_(key) + '-unit'])
        elsif !key.include?("-")
          new_obj[key] = obj[key]
        end
      end

      output << new_obj unless new_obj.empty?
    end
    output
  end
  # rubocop:enable Metrics/MethodLength

  def write_csv(data, filename)
    CSV.open(filename, "wb") do |csv|
      data.each do |row|
        csv << row
      end
    end
  end

  def make_array(data, headers)
    output = []
    output << headers
    data.each do |row|
      output << row.values
    end
    output
  end
end

module CalcHelpers
  def empty_hash(output)
    hash = {}
    output.each { |heading| hash[heading] = nil }
    hash
  end

  # copy hash1 to hash2
  def copy_obj(hash1, hash2)
    hash2['date'] = hash1['date']
    hash2['food'] = hash1['food']

    portion2 = hash2['portion'].nil? ? 0 : hash2['portion'].g
    portion1 = hash1['portion'].nil? ? 0 : hash1['portion'].g

    hash2['portion'] = Mass.new(portion2 + portion1, "g")
    hash2
  end

  def get_food_entry(food, food_facts)
    # returns the object entry from array
    food_facts.select { |entry| entry['food'] == food }[0]
  end

  def summarize_log(log, food_facts, output)
    log_dates = log.map { |row| row['date'] }
                   .uniq
                   .reject(&:nil?)
    foods = food_facts.map { |entry| entry['food'] }

    data = []
    log_dates.each do |date|
      foods.each do |food|
        output_row = empty_hash(output)

        log.select { |row| row['date'] == date && row['food'] == food }
           .each { |row| output_row = copy_obj(row, output_row) }

        data << output_row unless output_row['date'].nil?
      end
    end
    data
  end

  # Calculates nutrition facts based on portion / serving size
  def calculate_data(data, to_calc, food_facts)
    new_data = data.dup
    (0...new_data.length).each do |idx|
      food_data = get_food_entry(data[idx]['food'], food_facts)
      to_calc.each do |calc|
        if food_data[calc].class == Mass
          new_data[idx][calc] = Mass.new(data[idx]['portion'].g / food_data["serving"].g * food_data[calc].g, "g")
        else
          new_data[idx][calc] = (data[idx]['portion'].g / food_data["serving"].g * food_data[calc].to_f).round(1).to_s
        end
      end
    end
    new_data
  end

  # Converts all "Mass" objects to numbers for output
  def prep_output(data)
    data.each do |row|
      row.keys.each do |key|
        if row[key].class == Mass
          row[key] = row[key].g
        end
      end
    end
  end
end
include CSVHelpers
include CalcHelpers

# import nutrition info on individual foods
food_facts = parse_mass(create_objs(CSV.read('nutrition.csv')))
# pp food_facts
# puts " =================================== "

# import eating log
log = parse_mass(create_objs(CSV.read('log.csv')))
# log = parse_mass(create_objs(CSV.read('recipes.csv')))
# pp log

# summarize by day and food, define csv output table
output = %w(date food portion calories protein totalcarb totalfat)
to_calc = %w(calories protein totalcarb totalfat)
data = summarize_log(log, food_facts, output)

# calculate totals for each summary entry
data = calculate_data(data, to_calc, food_facts)
# pp data

# write output csv
write_csv(make_array(prep_output(data), output), 'summary2.csv')
# write_csv(make_array(prep_output(data), output), 'recipe-summary.csv')
