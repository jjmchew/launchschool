arr = [1,3,5,7,9,11]
number = 13

def check(arr,number)
  arr.include?(number)
end

puts check(arr, number) ? "#{number} is in #{arr}" : "#{number} is NOT in #{arr}"