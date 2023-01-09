class Student
  def initialize(name, year)
    @name = name
    @year = year
  end
end

class Graduate < Student       # modified
  def initialize(name, year, parking)
    super(name, year)          # added
    @parking = parking         # added
  end
end

class Undergraduate < Student  # modified
  def initialize(name, year)
    super                      # added
  end
end