# https://launchschool.com/exercises/1b055dda
#
# Given an array of integers in ascending order AND a `target` integer
#  - count the number of pairs within the array whose sum is greater than the given target
#

def count_pairs(nums, target):
    if (len(nums) <= 1): return 0

    pairs = 0
    left = 0
    right = 1

    while(left < len(nums) - 2):
        if (nums[left] + nums[right] > target):
            pairs += 1
            left += 1
            right += 1

    return pairs


# test cases
print(count_pairs([1, 2, 3, 4, 5], 6) == 4)
print(count_pairs([1, 2, 3, 4, 5], 8) == 1)
print(count_pairs([1, 3, 5, 7], 6) == 4)
print(count_pairs([1, 2, 3, 4], 5) == 2)
print(count_pairs([1, 2, 3, 4, 5], 10) == 0)
