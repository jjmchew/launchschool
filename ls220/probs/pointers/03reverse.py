# https://launchschool.com/exercises/cbbd946c
#
# Given a string, reverse all characters in each word of the sentence while ensuring case remains unchanged
# - spaces between words should be preserved, overall order of words must not be altered
# - do not use any built-in `reverse` methods

def reverse_words(input_str):
    lst = list(input_str)

    def reverse(start, end):
        if (end - start > 0):
            while (start < end):
                lst[start],lst[end] =lst[end],lst[start]
                start += 1
                end -= 1

    start = 0
    end = 0
    while (start < len(lst) and end < len(lst)):
        while (start < len(lst) and lst[start] == ' '):
            start += 1

        while (end < len(lst) and lst[end] != ' '):
            end += 1
        end -= 1

        reverse(start, end)
        start = end + 2
        end += 2

    print(''.join(lst))
    return ''.join(lst)

# test cases
print(reverse_words('Hello World') == "olleH dlroW")
print(reverse_words('JavaScript is fun') == "tpircSavaJ si nuf")
print(reverse_words('Coding in the sun') == "gnidoC ni eht nus")
print(reverse_words('Launch School') == "hcnuaL loohcS")
