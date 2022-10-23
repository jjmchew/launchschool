def q1
  ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
  p ages.key?('Spot')
  p ages.fetch('Spot','no key')
  p ages.keys.include?('Spot')
end
# q1

def q2
  munsters_description = "The Munsters are creepy in a good way."

  p munsters_description.swapcase
  p munsters_description.capitalize
  p munsters_description.downcase
  p munsters_description.upcase
end
# q2

def q3
  ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }
  additional_ages = { "Marilyn" => 22, "Spot" => 237 }
  p ages.merge!(additional_ages)
end
# q3

def q4
  advice = "Few things in life are as important as house training your pet dinosaur."
  p advice.include?("Dino")
  p advice.match?("Dino")
end
# q4

def q5
  flintstones = ["Fred", "Barney", "Wilma", "Betty", "BamBam", "Pebbles"]

  flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
  p flintstones
end
# q5

def q6
  flintstones = ["Fred", "Barney", "Wilma", "Betty", "BamBam", "Pebbles"]
  flintstones << "Dino"
  p flintstones
end
# q6

def q7
  flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
  flintstones.concat(['Dino','Hoppy'])
  p flintstones
end
# q7

def q8
  advice = "Few things in life are as important as house training your pet dinosaur."
  p advice.slice!(0..38)
  p advice
  # using advice[0..38] doesn't change (mutate) advice
end
# q8

def q9
  statement = "The Flintstones Rock!"
  p statement.count('t')
end
# q9

def q10
  title = "Flintstone Family Members"
  
  leading_spaces = ( 40 - title.length ) / 2

  leading_spaces.times { |_| print " " }
  print title
  puts
  40.times { |_| print "-" }
  puts

  p title.center(40)
end
q10



