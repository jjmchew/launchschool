require 'minitest/autorun'

class NoExperienceError < StandardError; end

class Employee
  def hire
    raise NoExperienceError
  end
end

class Tests < Minitest::Test
  def test_experience
    employee = Employee.new
    assert_raises(NoExperienceError) { employee.hire }
  end
end