def question4

  def snake(str)
    words = str.split
    current_word = 1 # should be set to 0 initially (arrays indexes start from 0) 
  
    loop do
      words[current_word].downcase!
  
      current_word += 1
      break if current_word >= words.size
    end
  
    words.join('_')
  end

  # p snake('The sky was blue')

  def camel(str)
    words = str.split(' ')
    counter = 0
  
    while counter > words.size # this should be while counter < words.size
      words[counter] = words[counter].capitalize
  
      counter = counter + 1
    end
  
    words.join
  end

  # p camel('The sky was blue')

  def upper_snake(str)
    words = str.split
    current_word = 0
  
    loop do
      current_word += 1 # this is in the wrong place - current_word = 0 never gets run so words[0] never gets capitalized.  Move to bottom of loop
      break if current_word == words.size
  
      words[current_word].upcase!

      # current_word += 1  # move line to here
    end
  
    words.join('_')
  end

  # p upper_snake('The sky was blue')

end
# question4