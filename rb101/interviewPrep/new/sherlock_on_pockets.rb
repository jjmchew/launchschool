=begin

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


=end


describe 'Sample tests' do 
  def xarray(value)
      value.nil? ? nil : Array(value).sort
  end

  it 'returns nil if empty pockets' do 
    pockets = {}
       Test.assert_equals(find_suspects(pockets, [1, 3]), nil, 'should return nil for pockets: {} and allowed items [1, 3]')
  end
  
  it 'returns nil if all packets allowed' do 
    pockets = { tom: [2], bob: [2], julia: [3], meg: [3] }
    Test.assert_equals(find_suspects(pockets, [2, 3]), nil, "should return nil for pockets: #{pockets} and allowed items [2,3]")
  
  end
  
  it 'returns nil if all with empty pockets' do 
 
    pockets = { julia: nil, meg: [] } 
    Test.assert_equals(find_suspects(pockets, [1, 6]), nil, "should return nil for empty pockets: #{pockets} and allowed items [1,6]")

  end
  
  it 'returns all with something in pockets if no allowed items' do 
    pockets = { meg: [3], tom: [5] }
    suspects = [:meg, :tom].sort
    Test.assert_equals(xarray(find_suspects(pockets, [])), suspects, "should return #{suspects.inspect} for pockets: #{pockets} and allowed empty items []")
  end
  
  it 'returns persons with at least one illegal between allowed items' do 
    pockets = { meg: [1, 3], tom: [5, 3] }
    Test.assert_equals(find_suspects(pockets, [1, 3]), [:tom], "should return [:tom] for pockets: #{pockets} and allowed items [1,3]")
    
  end

end