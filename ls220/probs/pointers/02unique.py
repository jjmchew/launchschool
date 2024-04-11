# https://launchschool.com/exercises/7c180261
#
# Given an array of unique integers sorted in ascending order,
# implement a function reduce_to_unique.
# This function should modify the array-in-place so that:
# it starts with a sequence of unique elements, each following their original order in the array.
# After these modifications, return the count of these unique elements
#
# The elements in the latter part (after the unique ones) are not important.
# The array must remain the same object as the input and should be modified to reflect the changes.


# input
#   - array `nums`, sorted in ascending order
#
# output
#   - array `nums` (same object):   all unique items first, then remaining items
#
# rules
#   - must modify array in-place
#   - all unique elements must come first, in the same order as they appear
#   - order of remaining (non-unique) elements does not matter
#
# approach
#   - anchor/runner approach w/ dictionary to track 'seen' elements
#   - anchor/runner both start at index 0
#   - if the element at runner is non-unique (i.e., no in `seen` dict)
#       - swap elements at anchor and runner, increment both pointers
#   - if unique (i.e., `seen`) then increment runner
#   - stop iterating when runner reaches the end of the array

def reduce_to_unique(ary):
    anchor = 0
    runner = 0
    seen = {}
    swaps = 0

    while (runner < len(ary)):
        if (not(ary[runner] in seen)):
            seen[ary[runner]] = 1
            ary[anchor], ary[runner] = ary[runner], ary[anchor]
            anchor += 1
            swaps += 1
        runner += 1

    return swaps

# test code
def test_reduce_to_unique(ary, expected_length):
    original_reference = ary
    result_length = reduce_to_unique(ary)
    is_same_object = original_reference is ary
    is_length_correct = result_length == expected_length

    # remove non-unique elements from ary
    ary[expected_length:] = []
    ary_set = set(ary)
    is_modified_correctly = len(ary) == len(ary_set)

    return is_same_object and is_length_correct and is_modified_correctly

print(test_reduce_to_unique([3, 3, 5, 7, 7, 8], 4))
print(test_reduce_to_unique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5))
print(test_reduce_to_unique([0], 1))
print(test_reduce_to_unique([-5, -3, -3, -1, 0, 0, 0, 1], 5))
print(test_reduce_to_unique([6, 6, 6, 6, 6, 6, 6], 1))
