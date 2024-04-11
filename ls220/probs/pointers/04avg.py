# https://launchschool.com/exercises/5ec1e512
#
# Given an array of numbers and an integer `k`:
# Compute the average of each contiguous subarray of length `k` within the given array.
# The output should be an array containing these averages.

def find_averages(lst, k):
    start = 0
    end = 0
    sum = lst[start]

    while (end < start + k - 1):
        end += 1
        sum += lst[end]

    avgs = [sum/k]

    while (start < len(lst) - k):
        sum -= lst[start]
        start += 1

        end += 1
        sum += lst[end]

        avgs.append(sum/k)

    return avgs


# test code
print(find_averages([1, 2, 3, 4, 5, 6], 3) == [2, 3, 4, 5])
print(find_averages([1, 2, 3, 4, 5], 2) == [1.5, 2.5, 3.5, 4.5])
print(find_averages([10, 20, 30, 40, 50], 4) == [25, 35])
print(find_averages([5, 5, 5, 5, 5], 1) == [5, 5, 5, 5, 5])
print(find_averages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5) == [2.2, 2.8, 2.4, 3.6, 2.8])
