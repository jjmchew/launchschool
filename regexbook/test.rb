string = "s. sand: cats :. cas:::t ... Mississippi S KANSAS ? whT did? you ?say "
string1 = "The lazy cat.
The dog barks.  a tab!
Down the rabbit hole.
The lazy cat, chased by the barking dog,
dives down the rabbit hole.
catalog
The Yellow Dog
My bearded dragon's name is Darwin"
string2 = "Launch launch LAUNCH other words laUnCh whatever else"

# p string
# p string.gsub(/s/, '=')
# p string.match(/s/)
# p string.gsub(/s/i, '=')
# p string2
# p string2.gsub(/launch/i, '=')

# puts string1
# puts string1.gsub(/(\r)/,'=')


def testsub(string, regex)
  puts string
  puts
  puts string.gsub!(regex, '=')
  puts
end

# testsub('FFFour score + seven', /[FX]/)
# testsub('Four score + seven', /[e+]/)
# testsub('Four score + seven', /[abAB]/)
# testsub('Four score + seven', /[*+]/)
# testsub('James james jAmes', /[Jj]ames/)
# testsub('a2 Model 640c1 a1 a2 a3 b1 b2 b3 c1 c2 c3 d1 d2 d3', /[abc][12]/)
# testsub('yes a by +/- ABCXYZ y yyyyy yyayy', /[^y]/)
# testsub('Four Score and Seven abcdefghijklmnopqrstuvwyxz 123 hello +/* bye',/[^aeiou]/)

# testsub("cat
# catastrophe
# wildcat
# I love my cat
# <cat>",/^cat/)

# testsub("cat
# catastrophe
# wildcat
# I love my cat
# <cat>",/cat$/)

# testsub("red fish
# blue fish",/\Ared/)
# testsub("red fish
# blue fish",/^blue/)


# testsub("red fish
# red shirt",/fish$/)
# testsub("red fish
# red shirt",/shirt\z/)

# testsub("John Silver", /\Bjohn/i)
# testsub("Randy Johnson", /\Bjohn/i)
# testsub("Duke Pettijohn", /\Bjohn/i)
# testsub("Joe_Johnson", /\Bjohn/i)

# testsub("Four and 20 black birds\n365 days in a year,\n100 years in a century.\nMy phone number is 222-555-1212.\nMy serial number is 345678912.",/\b\d\d\d+\b/)

# testsub("xabcbcbacy",/a[abc]*?c/)

# p "xabcbcbacy".match(/a[abc]*?c/)

