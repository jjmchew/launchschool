def problem_1
  flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

  hash = {}
  flintstones.each_with_index { |name, index| hash[name] = index }

  p hash
end
# problem_1

def problem_2
  ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
  sum = 0
  ages.each_value { |age| sum += age }
  p sum
end
# problem_2

def problem_3
  ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

  new_ages = ages.select { |_,v| v < 100 }
  p new_ages

end
# problem_3

def problem_4
  ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
  p ages.values.min
end
# problem_4

def problem_5
  flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

  match_index = nil
  flintstones.each_with_index { |name, index| match_index = index if name.match(/^Be/) }
  p match_index

end
# problem_5

def problem_6
  flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
  
  flintstones.map! { |name| name[0,3] }
  p flintstones
end
# problem_6

def problem_7
  statement = 'The Flintstones Rock'

  count = Hash.new(0)
  statement.chars.each { |char| count[char] += 1 }
  p count
end
# problem_7

def problem_8 # REVIEW THIS PROBLEM !!
  numbers = [1, 2, 3, 4]
  
  # numbers.each_with_index do |number, index|
  #   p "#{index}  #{numbers.inspect}  #{number}"
  #   numbers.shift(1)
  # end

  numbers = [1, 2, 3, 4]
  numbers.each do |number|
    p number
    numbers.pop(1)
  end

  p numbers
  
  # index 0 numbers [1,2,3,4] number 1
  # index 1 numbers [1,2,3] number 2
  # then no more index 2, [1,2]
end
# problem_8

def problem_9
  words = "the flintstones rock"
  
  def titleize(string)
    new_words = string.split.map { |word| word.capitalize }
    new_words.join(' ')
  end
  
  p titleize(words)
end
# problem_9

def problem_10
  munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
  }

  munsters.each do |name,info|
    if info["age"].between?(0,17)
      info["age_group"] = "kid"
    elsif info["age"].between?(18,64)
      info["age_group"] = "adult"
    elsif info["age"] >= 65
      info["age_group"] = "senior"
    end
  end

  p munsters

end
# problem_10
