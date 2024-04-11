# https://launchschool.com/exercises/0269ceaf
#
# Given an ordered array of integers `num`:
# - determine if there are any 2 distinct elements in the array where 1 element is exactly 3 times the value of the other element
#
# The time complexity should be O(N)
#
# (for JS):
# Do not use built-in methods like `filter`, `map`, `reduce`, `find`
# Do not use `includes`
# Do not use `indexOf` or `lastIndexOf`

def check_triple_match(lst):
    left = 0
    right = 1

    def l():
        nonlocal left
        nonlocal lst
        return lst[left] * 3

    def r():
        nonlocal right
        nonlocal lst
        return lst[right]

    def can_r_plus():
        nonlocal right
        nonlocal lst
        return right < len(lst) - 1

    def can_l_plus():
        nonlocal left
        nonlocal right
        return right > left + 1

    def can_r_minus():
        nonlocal left
        nonlocal right
        nonlocal lst
        return right - 1 > left

    while(True):
        if (l() > r()):
            if (can_r_plus()): right += 1
            else: return False
        elif (l() < r()):
            if (can_l_plus()): left += 1
            elif (can_r_plus()): right += 1
            elif (can_r_minus()): right -= 1
            else: return False
        elif (l() == r()): return True

# test cases
print(check_triple_match([1, 3, 9, 28]) == True)
print(check_triple_match([1, 2, 4, 10, 11, 12]) == True)
print(check_triple_match([0, 5, 7, 55]) == False)
print(check_triple_match([4, 5, 7, 9, 13, 15, 17]) == True)
print(check_triple_match([2, 6, 13, 54]) == True)
print(check_triple_match([1, 5, 17, 51]) == True)
print(check_triple_match([1, 2, 4, 8]) == False)
