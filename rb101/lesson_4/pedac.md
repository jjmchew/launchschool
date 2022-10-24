# PROBLEM:

Given a string, write a method `palindrome_substrings` which returns
all the substrings from a given string which are palindromes. Consider
palindrome words case sensitive.

# Test cases:

```ruby
palindrome_substrings("supercalifragilisticexpialidocious") == ["ili"]
palindrome_substrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
palindrome_substrings("palindrome") == []
palindrome_substrings("") == []
```
# Input
string - provided

# Output
array of strings : all palindrome substrings

# Rules
- palindromes are case-sensitive (i.e., Mom is *not* a palindrom, mom *is*)
- palindromes are at least 2 char in length
- empty string returns an empty array
