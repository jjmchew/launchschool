# input:
#   - 3 arguments:  all integers that represent grades

# output:
#   - string: 'letter grade' "A" to "F" based on lookup table;  use average of all 3 grades for lookup

# assumptions / constraints:
#   - grades are from 0 ... 100 - nothing less than 0 or > than 100
#   - note < vs <= :  0 - 59 is 'F', 60 - 69 is 'D' etc
#   - always 3 grades given

# data structure:
#   - could use if/elsif conditionals
#   - could define conditions in a hash for lookup?

# algorithm:
#   1.  calculate average of 3 grades
#   2.  compare average to grade cutoffs to determine letter grade

GRADE_LOOKUP = {
  'F': [0, 59],
  'D': [60, 69],
  'C': [70, 79],
  'B': [80, 89],
  'A': [90, 100]
}

def get_grade(gr1, gr2, gr3)
  avg = (gr1 + gr2 + gr3) / 3
  p avg
  letter_grade = ''
  GRADE_LOOKUP.each do |letter, grades| 
    if avg.between?(grades[0], grades[1])
      letter_grade = letter
    end
  end
  letter_grade.to_s
end

# test cases / examples:
p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"

