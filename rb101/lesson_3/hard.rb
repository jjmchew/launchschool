def q1
  if false
    greeting = "hello world"
  end
  
  greeting 
  
  # predict error - greeting not otherwise initialized since if false never runs
  
  # WRONG - no error!
  # output is nothing

end
# q1

def q2
  greetings = { a: 'hi' }
  informal_greeting = greetings[:a] # .clone prevents mutation of original hash
  informal_greeting << ' there'

  puts informal_greeting  #  => "hi there"
  puts greetings # predict:  "hi there"
end
# q2

def q3_a
  
  def mess_with_vars(one, two, three)
    one = two
    two = three
    three = one
  end
  
  one = "one"
  two = "two"
  three = "three"
  
  mess_with_vars(one, two, three)
  
  puts "one is: #{one}" # one
  puts "two is: #{two}" # two
  puts "three is: #{three}" # three  -  assignment operator reassigns method vars, not changing original local vars

end
# q3_a
def q3_b
  def mess_with_vars(one, two, three)
    one = "two"
    two = "three"
    three = "one"
  end
  
  one = "one"
  two = "two"
  three = "three"
  
  mess_with_vars(one, two, three)
  
  puts "one is: #{one}"
  puts "two is: #{two}"
  puts "three is: #{three}"

  # same output as before - use of assignment operator doesn't affect local var outside of method
  # one
  # two
  # three
end
# q3_b
def q3_c
  def mess_with_vars(one, two, three)
    one.gsub!("one","two")
    two.gsub!("two","three")
    three.gsub!("three","one")
  end
  
  one = "one"
  two = "two"
  three = "three"
  
  mess_with_vars(one, two, three)
  
  puts "one is: #{one}" # two
  puts "two is: #{two}" # three
  puts "three is: #{three}" # one

  # original strings (local vars) are changed by destructive use of gsub!

end
# q3_c

def q4

  def dot_separated_ip_address?(input_string)
    dot_separated_words = input_string.split(".")
    return false unless dot_separated_words.size == 4

    while dot_separated_words.size > 0 do
      word = dot_separated_words.pop
      return false unless is_an_ip_number?(word)
    end
    true
  end

end


