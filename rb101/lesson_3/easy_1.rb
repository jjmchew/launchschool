def q1
  numbers = [1, 2, 2, 3]
  numbers.uniq

  puts numbers

  # predict numbers will be unchanged (#uniq is non-destructive)
  # NEED to remember puts writes each element on a different line
end
# q1

def q2
  # ! is typically used for destructive methods (mutates the caller)
  # ? typically returns a boolean
  # 1.  != 'not equal to' is used in conditionals (e.g., ifs)
  # 2.  !user_name - returns error : WRONG:  turns object into opposite of boolean equivalent
  # 3.  words.uniq! generally mutates caller (destructive ver of methods)
  # 4.  ? before something : error, unless ternary
  # 5.  ? after something : methods that return boolean
  # 6.  !! before something : error : WRONG:  turns object into boolean equivalent
end

def q3
  advice = "Few things in life are as important as house training your pet dinosaur."
  advice.gsub!(/important/, "urgent")

  p advice
end
# q3

def q4
  numbers = [1, 2, 3, 4, 5]
  p numbers.delete_at(1) # this returns the deleted element
  p numbers # this returns the actual (modified) array
  # [1, 3, 4, 5] 
  # WRONG:  the first p statement returns the element removed! (2)

  numbers = [1, 2, 3, 4, 5]
  p numbers.delete(1)
  p numbers
  # [2, 3, 4, 5]
  # WRONG:  the first p statement returns the element removed! (2)
end
# q4

def q5
  p (10..100).cover?(42)
end
# q5

def q6
  famous_words = "seven years ago..."

  famous_words = "Four score and " + famous_words
  p famous_words

  famous_words = "seven years ago..."
  famous_words = "Four score and " << famous_words
  p famous_words
end
# q6

def q7
  flintstones = ["Fred", "Wilma"]
  flintstones << ["Barney", "Betty"]
  flintstones << ["BamBam", "Pebbles"]
  flintstones.flatten!
  p flintstones
end
# q7

def q8
  flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
  ar = flintstones.to_a[2]
  p ar
end
# q8
