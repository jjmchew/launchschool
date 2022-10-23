def q1
  a = "forty two"
  b = "forty two"
  c = a

  puts a.object_id
  puts b.object_id
  puts c.object_id # -- a.object_id
end
# q1

def q2
  a = 42
  b = 42
  c = a
  
  puts a.object_id
  puts b.object_id
  puts c.object_id

  # all point to the same id (integers are immutable ~~primitives~~ )
  #                                                  Be careful with the word 'primitives' : it's the 'smallest' level in a language, but I'm not sure what the smallest level in Ruby might be
end
# q2

def q3

  def tricky_method(a_string_param, an_array_param)
    a_string_param += "rutabaga"
    an_array_param << "rutabaga"
  end
  
  my_string = "pumpkins"
  my_array = ["pumpkins"]
  tricky_method(my_string, my_array)
  
  puts "My string looks like this now: #{my_string}" # pumpkins - unchanged b/c of assignment operator (new memory address)
  puts "My array looks like this now: #{my_array}" # ["pumpkins", "rutabaga"]

end
# q3

def q4
  
  def tricky_method_two(a_string_param, an_array_param)
    a_string_param << 'rutabaga'
    an_array_param = ['pumpkins', 'rutabaga']
  end
  
  my_string = "pumpkins"
  my_array = ["pumpkins"]
  tricky_method_two(my_string, my_array)
  
  puts "My string looks like this now: #{my_string}" # pumpkinsrutabaga  << appends to existing string (didn't use assignment operator)
  puts "My array looks like this now: #{my_array}" # ["pumpkins"]   - my_array doesn't change, an_array_param is unused local method var

end
# q4

def q5

  def tricky_method(a_string_param, an_array_param)
    a_string_param += "rutabaga"
    an_array_param += ["rutabaga"]
    return a_string_param, an_array_param
  end
  
  my_string = "pumpkins"
  my_array = ["pumpkins"]
  my_string, my_array = tricky_method(my_string, my_array)
  
  puts "My string looks like this now: #{my_string}"
  puts "My array looks like this now: #{my_array}"

end
# q5

def q6
  
  # def color_valid(color)
  #   if color == "blue" || color == "green"
  #     true
  #   else
  #     false
  #   end
  # end

  def color_valid(color)
    color == 'blue' || color == 'green' # ? true : false  don't need this last part
                                        # Ruby automatically evaluates statements
  end

  p color_valid('blue');
  p color_valid('red');
  p color_valid('green');
end
# q6

