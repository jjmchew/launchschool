require 'date'

class Meetup
  DAY = %w(_ Monday Tuesday Wednesday Thursday Friday Saturday Sunday)
  DESC = {
    'first' => 0,
    'second' => 1,
    'third' => 2,
    'fourth' => 3,
    'fifth' => 4,
    'last' => -1,
    'teenth' => [13, 14, 15, 16, 17, 18, 19]
  }

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(day, desc)
    day = day.capitalize
    desc = desc.downcase

    possible_days = get_possible_days(day)

    case desc
    when 'teenth'
      possible_days.each { |date| return date if DESC[desc].include?(date.day) }
    else
      possible_days[DESC[desc]]
    end
  end

  private

  def get_possible_days(day)
    days_in_month = Date.new(@year, @month, -1).day

    possible_days = []
    1.upto(days_in_month).each do |num_day|
      if Date.new(@year, @month, num_day).cwday == DAY.find_index(day)
        possible_days << Date.new(@year, @month, num_day)
      end
    end
    possible_days
  end
end

# p Meetup.new(2023, 6).day('SuNday','lAst')
=begin

notes
  - teenth
      - thirteenth
      - fourteenth
      - fifteenth
      - sixteenth
      - seventeenth
      - eighteenth
      - nineteenth
=end
