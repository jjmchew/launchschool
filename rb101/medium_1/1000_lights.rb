# input:
#   - an integer:
#       - identifies the number of 'switches'
#       - also identifies the number of rounds of toggles
#   - multiple rounds of toggles for a set of 'switches'
#   - each switch:  on OR off
#   - each round of toggles follows a fixed pattern:
#          start, multiple
#       1.    1,    1 (all on)
#       2.    2,    2, 4, 6 ...
#       3.    3,    3, 6, 9 ...
#       4.    4,    4, 8, 12 ...

# output:
#   - an array identifying which lights are still on after the round of toggles

# assumptions / constraints:
#   - lights are numbered / labelled 1 .. n
#     - output array needs to identify lights by this numbering
#   - n could be a very large number

# data structure:
#   - hash with key as label;  value of 1 (on) or 0 (off)
#   - used hash to make mutating values easier when toggling using a method

# algorithm:
#   1.  setup bank of 'n' lights, all set to off
#   2.  loop n times:
#       - execute defined toggle sequence on lights
          # - iterate through each light
          #   - if light label == i or a multiple of i, then toggle
#   3.  define empty output array
#   4.  iterate across lights in final configuration
#       - push label of lights that are on to output array

def toggle_light(label, bank)
  if bank[label] == 0
    bank[label] = 1
  else
    bank[label] = 0
  end
end

def sequence(num)
  # initialize new bank of switches
  bank = Hash.new { |k, v| 0 }
  num.times { |i| bank[i+1] = 0 } 

  # run rounds of toggles
  num.times do |i|
    bank.keys.each do |label|
      # p "i #{i+1}  label #{label}"
      toggle_light(label,bank) if label % (i + 1) == 0
    end
  end

  # produce output array
  on = []
  bank.each { |label, value| value == 1 ? on << label : nil }

  p on
end

# test cases / examples:
p sequence(5) == [1, 4]
p sequence(10) == [1, 4, 9]
p sequence(1000)