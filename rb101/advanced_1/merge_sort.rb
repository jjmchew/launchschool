=begin
14:50 - 15:00  :  10 minutes

algorithm
  - take input array and divide in half
  
=end

def divide (arr)
  midpoint = arr.length / 2 - 1
  arr1 = arr[0..midpoint]
  arr2 = arr[midpoint+1..-1]
  [arr1, arr2]
end

def merge(arr1, arr2)
  new_array = []
  idx1 = 0
  idx2 = 0

  if !arr1.empty? && !arr2.empty?
    loop do
      if arr1[idx1] < arr2[idx2]
        new_array << arr1[idx1]
        idx1 += 1
      else
        new_array << arr2[idx2]
        idx2 += 1
      end
      break if idx1 == arr1.length || idx2 == arr2.length
    end
  end

  new_array += arr1[idx1..-1] if idx1 != arr1.length
  new_array += arr2[idx2..-1] if idx2 != arr2.length

  new_array
end


def merge_sort(arr)
  return arr if arr.length == 1
  
  arr1, arr2 = divide(arr)
  return merge(merge_sort(arr1), merge_sort(arr2))
end

# test cases
p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
p merge_sort([5, 3]) == [3, 5]
p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]