=begin

9:33 am - 9:53 am  :  20 minutes


https://www.codewars.com/kata/53bb1201392478fefc000746/train/ruby

Sherlock has to find suspects on his latest case. He will use your method, dear Watson. Suspect in this case is a person which has something not allowed in his/her pockets.

Allowed items are defined by array of numbers.

Pockets contents are defined by map entries where key is a person and value is one or few things represented by an array of numbers (can be nil or empty array if empty), example:

pockets = { 
  bob: [1],
  tom: [2, 5],
  jane: [7]
} 

Write method which helps Sherlock to find suspects. If no suspect is found or there are no pockets (pockets == nil), the method should return nil.

find_suspects(pockets, [1, 2]) # => [:tom, :jane]
find_suspects(pockets, [1, 7, 5, 2]) # => nil
find_suspects(pockets, []) # => [:bob, :tom, :jane]
find_suspects(pockets, [7]) # => [:bob, :tom]

input
  - hash `pockets` : defines names(as symbols) as key, value as array of numbers
  - array of integers `allowed` :  defines objects that are 'allowed' in `pockets`
output
  - array of symbols : keys from hash which have non-allowed numbers in array values
rules
  - hash values may be nil or [] (nothing in pockets)
  - if hash is empty, then no people, no pockets => return nil
  - if all numbers in people are 'allowed' then return nil

notes
  - can use `Hash#empty?` to check for empty hash
  - if allowed.empty? return all keys from hash (nothing allowed)
  - need to manage 'nil' for hash value - 

algorithm
  - return nil to address empty `pockets` hash case 
  - return hash keys to address empty `allowed` case

  - initialize a `suspects` collection array
  - iterate through `pockets` hash
      - check if value contains any numbers that are NOT in `allowed`
          - helper method `all_allowed?` : 
              - iterate through elements of array1 (pockets)
                  - if there is an element that is NOT in array2 (allowed) then return false
              - return true by default
      - if SO:  add key to `suspects`
      - if NOT:  do nothing

  - return `suspects`

=end

def all_allowed?(pockets, allowed)
  return true if pockets == nil
  pockets.each {|num| return false unless allowed.include?(num) }
  true
end

def find_suspects(pockets, allowed)
  return nil if pockets.empty?
  return pockets.keys if allowed.empty?

  suspects = []
  
  pockets.each do |suspect,pockets|
    suspects << suspect unless all_allowed?(pockets, allowed)
  end

  return nil if suspects.empty?
  suspects
end

  
p find_suspects({}, [1, 3]) == nil
p find_suspects({ meg: [3], tom: [5] }, []) == [:meg, :tom]
p find_suspects({ tom: [2], bob: [2], julia: [3], meg: [3] }, [2, 3]) == nil
p find_suspects({ julia: nil, meg: [] }, [1, 6]) == nil
p find_suspects({ meg: [1, 3], tom: [5, 3] }, [1, 3]) == [:tom]