require 'csv'
require 'time'

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

def data_path
  File.expand_path('~/launchschool/', __dir__)
end

def get_filepath(file)
  File.join(data_path, file)
end

def calc_duration(obj)
  start_time =
    DateTime.strptime("#{obj['date']} #{obj['start']}", '%d-%b-%Y %H:%M')
  end_time = DateTime.strptime("#{obj['date']} #{obj['end']}", '%d-%b-%Y %H:%M')

  # result is in days - convert to hours
  ((end_time - start_time).to_f * 24).round(2)
end

def display_output(tally)
  tally.each { |key, value| puts "#{key} : #{value.round(2)} hrs" }
end

def calc_tally(contents)
  tally = Hash.new { 0 }
  contents.each do |obj|
    date = obj["date"]
    tally[date] += calc_duration(obj)
  end
  tally
end

contents = create_objs(CSV.read('ts.csv'))

display_output(calc_tally(contents))
