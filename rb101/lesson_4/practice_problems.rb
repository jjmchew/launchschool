def practice_problem_1
  # return value is [1,2,3]
  # 'hi' is truthy - all elements will be selected
end

def practice_problem_2
  # count will apply block to each element and return the number of elements that return true
  # answer is 2
end

def practice_problem_3
  # reject will return items for which the block evaluates to nil or false
  # will return all items (puts returns nil)
end

def practice_problem_4
  # { 'a' => 'ant', 'b' => 'bear', 'c' => 'cat' }
  # CAREFUL - when using a string var as a key and hash["a"], key will be a string, not a symbol
end

def practice_problem_5
  # returns the 'first' hash entry, based on insertion order.  best to just try it
end

def practice_problem_6
  # pop returns the last element, then size is length of string caterpillar (11)
end

def practice_problem_7 # REVIEW THIS QUESTION!
  # block return value is true or false based on .odd?
  # return of .any is [1,3] - the elements for which the block evalutes true # WRONG!!

  # .any? stops evaluating after the first true;  only returns true or false
end

def practice_problem_8
  # take(2) will return the firt 2 elements of the array : [1,2] ; non-destructive (from docs)
end

def practice_problem_9 # REVIEW THIS QUESTION!
  # return of map is a new hash (non-destructive) { :b => 'bear'}
  # WRONG - map returns an array (always);  and will return 'nil' for the first value (if block evaluates to nil)
end

def practice_problem_10 # REVIEW THIS QUESTION!
  # [nil, 2, 3]
  # in if block puts returns nil and then for next 2 num, returns num

  # dumb mistake - make sure to review conditionals!  
  # [1, nil, nil]
end

