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
    seen = {}

    def sum():
        nonlocal left
        nonlocal right
        nonlocal nums
 
        if (left == right): return 0
        return nums[left] + nums[right]

    def is_seen(left, right):
        nonlocal seen
        return (left, right) in seen

    def right_max():
        return right == len(nums) - 1

    def left_max():
        return left == len(nums) - 2

    def right_min():
        return right == left + 1

    def can_r_plus():
        nonlocal left
        nonlocal right
        return not(right_max()) and not(is_seen(left, right + 1))

    def can_r_minus():
        nonlocal left
        nonlocal right
        return (not(right_min())) and not(is_seen(left, right - 1)) and right - 1 > left

    def can_l_plus():
        nonlocal left
        nonlocal right
        return not(left_max())

    stop = False

    while(not(stop)):
        # print(f"{left} ({nums[left]}), {right} ({nums[right]})   |    {sum()}, {pairs}")
        if (left_max() and right_max()): stop = True

        seen[(left, right)] = 1

        if (sum() > target): pairs += 1

        if (sum() <= target):
            if (can_r_plus()): right += 1
            elif (can_l_plus()): left += 1
        elif (sum() > target):
            if (can_r_minus()): right -= 1
            elif (can_r_plus()): right += 1
            elif (can_l_plus()): left += 1

    return pairs


# test cases
print(count_pairs([1, 2, 3, 4, 5], 6) == 4)
print(count_pairs([1, 2, 3, 4, 5], 8) == 1)
print(count_pairs([1, 3, 5, 7], 6) == 4)
print(count_pairs([1, 2, 3, 4], 5) == 2)
print(count_pairs([1, 2, 3, 4, 5], 10) == 0)
