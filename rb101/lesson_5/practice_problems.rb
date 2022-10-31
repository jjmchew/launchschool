def problem_1 # REVIEW THIS PROBLEM
  arr = ['10', '11', '9', '7', '8']

  # MY APPROACH IS NOT IDEAL : returns an integer array, not strings
  # new_arr = arr.map do |str|
  #  str.to_i
  # end
  
  # p new_arr.sort.reverse

  new_arr = arr.sort do |a,b|
    b.to_i <=> a.to_i
  end

  p arr
  p new_arr
end
# problem_1

def problem_2
  books = [
    {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
    {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
    {title: 'Ulysses', author: 'James Joyce', published: '1922'}
  ]

  new_books = books.sort_by do |element|
    element[:published].to_i
  end

  p new_books
end
# problem_2

def problem_3
  arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]

  p arr1[2][1][3] == 'g'

  arr2 = [ {first: ['a', 'b', 'c'], second: ['d', 'e', 'f']} , {third: ['g', 'h', 'i']} ]

  p arr2[1][:third][0] == 'g'
  
  arr3 = [['abc'], ['def'], {third: ['ghi']}]

  p arr3[2][:third][0][0] == 'g'
  
  hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}

  p hsh1['b'][1] == 'g'
  
  hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}

  p hsh2[:third].keys[0] == 'g'

end
# problem_3

def problem_4
  arr1 = [1, [2, 3], 4]

  arr1[1][1] += 1
  p arr1

  arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]

  arr2[2] += 1
  p arr2

  hsh1 = {first: [1, 2, [3]]}

  hsh1[:first][2][0] += 1
  p hsh1

  hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}

  hsh2[['a']][:a][2] += 1
  p hsh2

end
# problem_4

def problem_5
  munsters = {
    "Herman" => { "age" => 32, "gender" => "male" },
    "Lily" => { "age" => 30, "gender" => "female" },
    "Grandpa" => { "age" => 402, "gender" => "male" },
    "Eddie" => { "age" => 10, "gender" => "male" },
    "Marilyn" => { "age" => 23, "gender" => "female"}
  }

  total_age = 0;
  munsters.each do |_,info|
    total_age += info["age"] if info["gender"] == 'male'
  end
  
  p total_age

end
# problem_5

def problem_6
  munsters = {
    "Herman" => { "age" => 32, "gender" => "male" },
    "Lily" => { "age" => 30, "gender" => "female" },
    "Grandpa" => { "age" => 402, "gender" => "male" },
    "Eddie" => { "age" => 10, "gender" => "male" },
    "Marilyn" => { "age" => 23, "gender" => "female"}
  }

  munsters.each do |name,info|
    puts "#{name} is a #{info["age"]}-year-old #{info["gender"]}."
  end

end
# problem_6

def problem_7
  a = 2
  b = [5, 8]
  arr = [a, b]

  arr[0] += 2
  arr[1][0] -= a

  # predict:
  # a = 2  :  reassignment changes the object in arr, leaves a unchanged
  # b = [3, 8]  :  as an array, changing the element modifies b as well, but the unchanged value of a

  p a
  p b

  # RIGHT!  good work
end
# problem_7

def problem_8
  hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

  vowels = []
  hsh.values.flatten.join.chars.each { |char| vowels << char if %w(a e i o u).include?(char) }

  p vowels
end
# problem_8

def problem_9 # PAY ATTENTION TO DETAILS (e.g., SORT ORDER)
  arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

  new_arr = arr.map do |subarr|
    subarr.sort do |a,b|
      b <=> a
    end
  end

  p new_arr

end
# problem_9

def problem_10 # REVIEW THIS PROBLEM
  array = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]
  new_array = array.map do |hsh|
    new_hsh = {} # remember - don't change original hash!!
    hsh.keys.each do |key|
      new_hsh[key] = hsh[key] + 1 
    end
    new_hsh # NEED TO REMEMBER the return value of block in map is critical
  end
  p array
  p new_array
end
# problem_10

def problem_11
  # use select or reject
  # return a NEW array;  only the integers that are multiples of 3

  arr = [[2], [3, 5, 7], [9], [11, 13, 15]]

  new_array = arr.map do |sub|
    sub.select do |num|
      num % 3 == 0
    end
  end

  p arr
  p new_array

end
# problem_11

def problem_12
  # return a hash (without using .to_h):  key is first item, value is second

  arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
  
  hsh = {}
  arr.each do |subarr|
    hsh[subarr[0]] = subarr[1]
  end

  p hsh
  # expected return value: {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}
end
# problem_12

def problem_13
  # return NEW array; same elements ordered by only considering the odd numbers
  # assume:  ordering as if even elements were not there AT ALL (i.e, affects length of array, etc.)

  arr = [[1, 6, 9], [6, 1, 7], [1, 8, 3], [1, 5, 9]]

  new_arr = arr.sort_by do |sub|
    sub.select { |num| num % 2 != 0 }
  end

  p arr
  p new_arr

  # expected output
  # [[1, 8, 3], [1, 5, 9], [6, 1, 7], [1, 6, 9]]
end
# problem_13

def problem_14 # COULD BE WORTH REVIEWING THIS QUESTION AGAIN - focus on being clear about return values and creating a new transformed array within the hash
  # return array with colours of fruits (uppercase)
  #                   sizes of vegetables (capitalized)
  # assume non-destructive

  hsh = {
    'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
    'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
    'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
    'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
    'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
  }
  
  new_hsh = hsh.map do |_,v|
    if v[:type] == 'fruit'
      v[:colors].map { |colour| colour.capitalize }
    elsif v[:type] == 'vegetable'
      v[:size].upcase
    end
  end

  p new_hsh

  # expected output
  # [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
end
# problem_14

def problem_15 # MIS-INTERPRETED THE QUESTION, but my answer seemed solid
  # output:  array - contains only hashes where integers are even
  # assume - within each hash just delete key-value pairs where not ALL integers are even

  arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

  # new_arr = arr.map do |hash|
  #   test = hash.select do |_,values|
  #     values.all? { |num| num.even? }
  #   end
  # end

  # p new_arr

end
# problem_15

def problem_15_alt
  # details to note in the question wording:  contains only *HASHES* - i.e., NOT key-value pairs
  # assume that entire hash is not changed, just removed if ALL integers aren't even

  arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

  new_arr = arr.select do |hash|
    test = hash.all? do |_, array|
      array.all? { |num| num.even? }
    end
  end

  p new_arr
end
# problem_15_alt

def problem_16
  # data structure
  #   - store each section of the uuid (string) in an array
  #   - define how many random_hex_characters to generate for each section in a reference var (array)
  #   - iterate across that array to loop the required number of times. For each iteration:
  #       - concatenate a new random_hex_character onto the string for that section
  #   - once all sections are complete, join the array strings with "-" between them

  def rand_hex_char
    %w(0 1 2 3 4 5 6 7 8 9 a b c d e f).sample
  end

  def get_uuid
    uuid_pattern = [8,4,4,4,12]

    uuid = []

    uuid_pattern.each do |num_digits|
      section = ''
      num_digits.times { section << rand_hex_char }
      uuid << section
    end

    uuid.join('-')
  end

  p get_uuid

end
problem_16
