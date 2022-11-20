
def letter_case_count(string)
  { lowercase: string.scan(/[a-z]/).length, uppercase: string.scan(/[A-Z]/).length, neither: string.scan(/[^a-zA-Z]/).length }
end

# test cases
p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }
