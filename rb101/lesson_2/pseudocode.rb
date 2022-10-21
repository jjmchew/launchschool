# a method that returns the sum of 2 integers

# CASUAL:
# get 2 numbers:  number 1 and number 2
# add number 2 to number 1
# return the calculated value

# FORMAL:

# START

# SET number1 and SET number2
# SET result = number1 + number2
# PRINT result

# END

########################

# a method that takes an array of strings and returns a string that is all those strings concatenated together

# CASUAL:

# Define an empty string to collect each string of the array (a 'collection string')
# Iterate through each element of the array
#   - take that element and concatenate it the 'collection string'

# After iterating through the array, return the collection string


# FORMAL:

# START

# SET collection_string = empty string

# WHILE iterator <= number of strings in array
#   SET collection_string = collection_string + array string at position 'iterator'
#   iterator = iterator + 1

# RETURN collection_string

# END

########################

# a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:

# everyOther([1,4,7,2,5]) # => [1,7,5]

# CASUAL:
# Iterate through the given array using a counter
#   - always collect the first element of the array (at position 0)
#   - then iterate the counter
#   - if the counter is an odd number then skip the next step
#   - (if the counter is even) then collect that element of the array (at position counter)

# after iterating through the array, return the collected elements

# FORMAL:
# START
# SET array = given collection
# SET new_collection = empty array
# SET counter = 0
# WHILE counter <= number of items in array
#   IF counter == 0 OR counter is even
#     SET new_collection element to array element at position counter
#   counter = counter + 1

# RETURN new_collection
# END

########################

# a method that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the method should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return nil. 

# CASUAL:

# Iterate through each character of the string
#   - keep track of the character number with an index_counter
#   - if the character is the target character then increment a target_counter
#   - if the target_counter reaches 3 then return the index_counter
#   - if the index_counter reaches the length of the string and the target_counter is not yet 3 then return nil

# FORMAL:
# SET string = given string
# SET target_character = given character
# SET index_counter = 0
# SET target_counter = 0

# WHILE index_counter < length of string
#   if string character at position index_counter == target_character
#     target_counter = target_counter + 1
#   if target_counter == 3
#     RETURN index_counter
#   index_counter = index_counter + 1

# At end of loop:
# if target_counter != 3
#   RETURN nil

# END

########################

# a method that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:

# merge([1, 2, 3], [4, 5, 6]) # => [1, 4, 2, 5, 3, 6]

# You may assume that both array arguments have the same number of elements. 

# CASUAL:
# Since array indexes start at 0, when forming the new array, at a given index_counter, always use the element from the first array first, then the equivalent element from the second array
# Add elements to the new array in this order:
#   - take the 0 element from the first array, then 0 element from second array
#   - take the 1 element from the first array, then 1 element from second array
#   - continue in this way until there are no more elements from either array
# Return the new array

# FORMAL:
# SET new_array = blank array
# SET index_counter = 0
# SET array_1 = first given array
# SET array_2 = second given array

# WHILE index_counter < length of array_1 (or 2 - should be the same length)
#   ADD new last element to new_array using element at index_counter of array_1
#   ADD new last element to new_array using element at index_counter of array_2
#   index_counter = index_counter + 1

# RETURN new_array

