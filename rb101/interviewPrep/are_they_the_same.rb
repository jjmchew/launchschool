=begin
13:51 - 14:15  :  24 minutes

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarks

    a or b might be [] or {} (all languages except R, Shell).
    a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

input
  - array1 : array of numbers
  - array2 : array of numbers
output
  - true / false

rules
  - to return true:
      - same # of elements in array1 and array2
      - each of the elements in array2 is equivelent to the square of an element in array1
          - every element in array 1 has a corresponding 'square' in array2
  - if array1 or array2 are empty, return false

algorithm
  - create a duplicate of array2
  - iterate across each element of array1
      - check if the square of that element exists in array2 duplicate
          - if so, delete that element from array2 duplicate
          - if not, return false
  - return true by default


  - remove_instance
      - use `find_index` to find the location of an element with that index
      - recombine subarrays from 0...index  and index..-1  to remove that element

notes
  - if array1 and array2 are sorted, elements and their squares should be in the same order => NO - depends on what the incorrect elements are
  - need to keep 'track' of which elements have corresponding squares in array2
      - remove elements that are 'accounted for' in array2
      - cannot use '.delete(element)' - it removes every instance of element, not just 1 instance
=end

def remove_instance(array, element)
  index = array.find_index(element)
  array[0...index] + array[index+1..-1]
end

def comp(array1, array2)
  return false if array1 == nil || array2 == nil
  return false if array1.size != array2.size

  dup2 = array2.dup
  array1.each do |num|
    p "#{num} #{dup2}"
    if dup2.include?(num**2)
      dup2 = remove_instance(dup2, num**2)
    else
      return false
    end
  end
  true
end

p comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]) == true
p comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]) == false
p comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]) == false
p comp([], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]) == false
p comp([121, 144, 19, 161, 19, 144, 19, 11], []) == false
p comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19, 2000]) == false
p comp([], []) == true
p comp(nil, []) == false

