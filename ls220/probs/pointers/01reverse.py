"""
input
- str

output
- str w/ reversed consonants

rules
- reversed consonant positions remain identical, vowel positions remain identical
- case for all characters remains unchanged

approach
- use 2 pointers:  reader / writer variant
- L pointer to determine write position: 
    - start at 0, move each iteration cycle (corresponds to each character in given string)
    - stop iteration when there are no more char in string (len - 1)

- R pointer to "read" the character to write
    - start at the last char (len - 1)
    - move to L until it finds a consonant

- at each iteration:
    - if char at L pointer is a vowel - add it
    - if L pointer is a consonant
        - set R pointer
        - write char at R pointer
        - decrement R pointer

"""

def reverseConsonants(str):
    result = ''
    VOWELS = 'aeiouAEIOU'
    R_pointer = len(str) - 1

    for L_pointer in range(0, len(str)):
        if str[L_pointer] in VOWELS:
            result += str[L_pointer]
        else:
            while str[R_pointer] in VOWELS and R_pointer > 0:
                R_pointer -= 1

            result += str[R_pointer]
            R_pointer -= 1

    print(result)
    return result



# test code
print(reverseConsonants('') == '')
print(reverseConsonants('s') == 's')
print(reverseConsonants('hello') == 'lelho')
print(reverseConsonants('leetcode') == 'deectole')
print(reverseConsonants('example') == 'elapmxe')
print(reverseConsonants('Consonants') == 'sotnonasnC')


