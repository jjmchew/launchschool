# https://launchschool.com/exercises/dffe6d4c
#
# Given:
# - an array `appetite` with integers representing the minimum treat size a pet will be happy with
# - and an array `treats` with integers representing the treat size
#
# Determine how many pets can happily be be given treats

import math

def partition(lst, low, high):
    pivot_index = math.floor((low + high) / 2);
    pivot = lst[pivot_index]
    left = low
    right = high

    while (left <= right):
        while (lst[left] < pivot):
            left += 1

        while (lst[right] > pivot):
            right -= 1

        if (left > right):
            break

        lst[left], lst[right] = lst[right], lst[left]

        left += 1
        right -= 1

    return left

def quick_sort(lst, low = 0, high = None):
    if (high is None):
        high = len(lst) - 1

    pivot_index = partition(lst, low, high)

    if (low < pivot_index - 1):
        quick_sort(lst, low, pivot_index - 1)

    if (pivot_index < high):
        quick_sort(lst, pivot_index, high)

    return lst

def assign_treats(appetite, treats):
    a = 0
    t = 0
    happy_pets = 0
    sorted_a = quick_sort(appetite)
    sorted_t = quick_sort(treats)

    while (a < len(sorted_a) and t < len(sorted_t)):
        if (sorted_t[t] >=sorted_a[a]):
            happy_pets += 1
            a += 1
            t += 1
        else:
            t += 1

    return happy_pets

# test cases
print(assign_treats([3, 4, 2], [1, 2, 3]) == 2)
print(assign_treats([1, 5], [5, 5, 6]) == 2)
print(assign_treats([1, 2, 3], [3]) == 1)
print(assign_treats([2], [1, 2, 1, 1]) == 1)
print(assign_treats([4, 3, 1], [2, 1, 3]) == 2)
print(assign_treats([1, 2, 3], [1, 2, 3]) == 3)
print(assign_treats([4, 5, 6], [1, 2, 3]) == 0)

