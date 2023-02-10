=begin
input
  - a string ('encrypted')
output
  - a string ('decrypted')
rules
  - just apply substitution (rotation by 13 characters)
algorithm
  - iterate across each letter in given string
  - convert the index and then return the new letter
  - if uppercase, then return uppercase
notes
  - can use constant ALPHABET - array of char in alphabet (ties num to char)
  - need to keep track of upper vs lower case
  - use helper method "get_index" to convert indices
  - use helper method to check for uppercase
=end

ALPHABET = [""] + ('a'..'z').to_a

def get_index(int)
  return (int + 13) - 26 if int + 13 > 26
  int + 13
end

def upcase?(char)
  char.upcase == char
end

def rot13(string)
  
  string.chars.map do |char|
    if ALPHABET.include?(char.downcase)
      letter = ALPHABET[ get_index( ALPHABET.find_index(char.downcase) ) ] 
      upcase?(char) ? letter.upcase : letter
    else
      char
    end
  end.join("")
end

p rot13("Nqn Ybirynpr")
p rot13("Tenpr Ubccre")
p rot13("Nqryr Tbyqfgvar")
p rot13("Nyna Ghevat")
p rot13("Puneyrf Onoontr")
p rot13("Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv")
p rot13("Wbua Ngnanfbss")
p rot13("Ybvf Unvog")
p rot13("Pynhqr Funaaba")
p rot13("Fgrir Wbof")
p rot13("Ovyy Tngrf")
p rot13("Gvz Orearef-Yrr")
p rot13("Fgrir Jbmavnx")
p rot13("Xbaenq Mhfr")
p rot13("Fve Nagbal Ubner")
p rot13("Zneiva Zvafxl")
p rot13("Lhxvuveb Zngfhzbgb")
p rot13("Unllvz Fybavzfxv")
p rot13("Tregehqr Oynapu")