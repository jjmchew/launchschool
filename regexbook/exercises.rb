def testsub(string, regex)
  # system('clear')
  puts string
  puts
  puts string.gsub!(regex, '=')
  puts
end

def basic_matching
  # Basic Matching exercises
  # q1
  # testsub('Kx BlacK kelly', /K/)
  #q2
  # testsub("Henry perch golf",/H/i)
  #q3
  # testsub("snapdragon bearded dragon dragoon", /dragon/)
  #q4
  # testsub( "banana orange pineapples strawberry raspberry grappler",/(banana|orange|apple|strawberry)/ )
  #q5
  # testsub('This line has spaces  This,line,has,commas,  No-spaces-or-commas',/(,| )/ )
  #q6
  # testsub('blueberry blackberry black berry strawberry',/(blue|black)berry/ )
end
# Basic_Matching

def character_classes
  # testsub('Kitchen Kaboodle Reds and blues kitchen Servers', /[kKs]/) # q1

  # testsub('My cats, Butterscotch and Pudding, like to
  # sleep on my cot with me, but they cut my sleep
  # short with acrobatics when breakfast time rolls
  # around. I need a robotic cat feeder.', /[cCbB][aouAOU][tT]/) # q2

  # testsub('0xDEADBEEF 1234.5678 Jamaica plow ahead', /[0-9A-Ja-j]/) # q3
  
  #q4
  # NOTE:  I got this WRONG! see my q5 answer for my first attempt
  # testsub('0x1234
  # Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.
  # The quick brown fox jumps over the lazy dog
  # THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',/[a-wy-z]/i)
  
  
  #q5
  # testsub('0x1234
  # Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.
  # The quick brown fox jumps over the lazy dog
  # THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',/[^x]/i) 
  # NOTE:  this is wrong since only supposed to match any LETTER, not special char, etc.
  
  
  # testsub('0x1234abcd
  # 1,000,000,000s and 1,000,000,000s.
  # THE quick BROWN fox JUMPS over THE lazy DOG!', /[^a-z]/i) #q6

  # q7
  # /(ABC|abc)/ is NOT equivalent to /[Aa][Bb][Cc]/
  # aBc would differ
  # testsub('aBc',/(ABC|abc)/) # no match
  # testsub('aBc',/[Aa][Bb][Cc]/) # match

  # q8:  /abc/i matches cab or CaB, but those do not match /[Aa][Bb][Cc]/. (only AbC aBc etc) 
  # WRONG!
  # remember:  /abc/i matches 'abc' as a word - ie., same sequence as [aA][bB][cC]
  # testsub('cab CaB abc ABc ABC aBcd abcD dabc',/abcd/i)
  # testsub('cab CaB abc ABc ABC aBcd abcD dabc',/[Aa][Bb][Cc]d/)

  # q9
  # testsub('The regex /[^a-z]/i matches any character that is
  # not a letter. Similarly, /[^0-9]/ matches any
  # non-digit while /[^A-Z]/ matches any character
  # that is not an uppercase letter. Beware: /[^+-<]/
  # is at best obscure, and may even be wrong.', /\[\^[aA0]\-[zZ9]\]/)
  # WRONG!
  # NOTE:  my solution doesn't capture ALL simple negated classes (i.e., I don't cover a range that might start with something other than a or 0 or end in something other than z or 9)

  # testsub('The regex /[^a-z]/i matches any character that is
  # not a letter. Similarly, /[^0-9]/ matches any
  # non-digit while /[^A-Z]/ matches any character
  # that is not an uppercase letter. Beware: /[^+-<]/
  # is at best obscure, and may even be wrong.', /\[\^[a-zA-Z0-9]-[a-zA-Z0-9]\]/)

end
# character_classes

def character_class_shortcuts
  # q4
  # testsub('The red d0g chases the b1ack cat.   a_b c_d', /[a-zA-Z][a-zA-Z][a-zA-Z]/) # RIGHT
  # testsub('The red d0g chases the b1ack cat.   a_b c_d', /\w\w\w/) # WRONG - matches digits and _
end
# character_class_shortcuts

def anchors
  # q1
  # testsub("The lazy cat sleeps.\nThe number 623 is not a word.\nThen, we went to the movies.\nAh. The bus has arrived.",/^The\b/)

  # q2
  # testsub("The lazy cat sleeps\nThe number 623 is not a cat\nThe Alaskan drives a snowcat",/\bcat$/)

  # q3
  # testsub("reds and blues\nThe lazy cat sleeps.\nThe number 623 is not a word. Or is it?",/\b[a-zA-Z][a-zA-Z][a-zA-Z]\b/)

  # q4
  # testsub("A grey cat\nA blue caterpillar\nThe lazy dog\nThe white cat\nA loud dog\n--A loud dog\nGo away dog\nThe ugly rate\nThe lazy, loud dog", /^(A |The )[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z] (dog|cat)$/)
end
# anchors

def quantifiers
  # q1
  # testsub("To be or not to be\nBe a busy bee\nI brake for animals.",/\bb[a-z]*e/)
  # q2

  # q2
  # testsub("What's up, doc?\nSay what? No way.\n?\nWho? What? Where? When? How?", /.*\?$/)

  # q3
  # testsub("What's up, doc?\nSay what? No way.\n?\nWho? What? Where? When? How?", /.+\?$/)

  # q4 PRACTICE this one again
  # testsub("http://launchschool.com/\n https://mail.google.com/mail/u/0/#inbox\nhtpps://example.com\nGo to http://launchschool.com/\nhttps://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello\n      http://launchschool.com/", /^(http:\/\/|https:\/\/)\S*$/ )

  #q5 PRACTICE this one again
  # testsub("http://launchschool.com/  \n https://mail.google.com/mail/u/0/#inbox  \nhtpps://example.com\nGo to http://launchschool.com/\nhttps://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello\n      http://launchschool.com/", /^ *(http:\/\/|https:\/\/)\S* *$/ )

  # q6 PRACTICE this one again
  # testsub("http://launchschool.com/  \n https://mail.google.com/mail/u/0/#inbox  \nhtpps://example.com\nGo to http://launchschool.com/\nhttps://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello\n      http://launchschool.com/", /\b*(http:\/\/|https:\/\/)\S*/ )

  # q7 PRACTICE this one again
  # testsub("Mississippi\nziti 0minimize7\ninviting illegal iridium",/\b[a-z]*i[a-z]*i[a-z]*i[a-z]*\b/i)
  # testsub("Mississippi\nziti 0minimize7\ninviting illegal iridium",/\b([a-z]*i){3,}[a-z]*\b/i)

  # q8 PRACTICE this one again
  # testsub("What's up, doc?\nI tawt I taw a putty tat!\nThufferin' thuccotath!\nOh my darling, Clementine!\nCamptown ladies sing this song, doo dah.", /\b[a-z]*\w.$/i )
  # testsub("What's up, doc?\nI tawt I taw a putty tat!\nThufferin' thuccotath!\nOh my darling, Clementine!\nCamptown ladies sing this song, doo dah.", /\S+$/)

  # q9
  # testsub(",123,456,789,123,345,\n,123,456,,789,123\n,23,56,7,\n,13,45,78,23,45,34,\n,13,45,78,23,45,34,56,\n", /^,(\d+,){3,6}$/ )

  # q10
  # testsub("123,456,789,123,345\n123,456,,789,123\n23,56,7\n13,45,78,23,45,34\n13,45,78,23,45,34,56\n", /^(\d+,){2,5}\d+$/ )

  # q11
  # testsub("123,456,789,123,345\n123,456,,789,123\n23,56,7\n13,45,78,23,45,34\n13,45,78,23,45,34,56\n", /^(\d+,){2}\d+$|^(\d+,){5,}\d+$/ )

  # q12  NOT BAD - could do practice again, but managed a solution which seemed to work
  # testsub("<h1>Main Heading</h1>\n<h1>Another Main Heading</h1>\n<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>",
  #   /
  #     (<h1>)
  #     [\w ]*
  #     (<\/h1>)
  #   /x
  # )
  # testsub("<h1>Main Heading</h1>\n<h1>Another Main Heading</h1>\n<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>", /<h1>.*?<\/h1>/  )

end
# quantifiers

def exercises_1
  # input : string, possibly with leading / trailing whitespace or other characters
  # output : true or false, if a valid URL only (no leading / trailing whitespace, other char)
  # assumptions / rules :
  #   - other chars / whitespace in string will return false
  #   - URL leads with http:// or https://
  #   - assume does not need to end with .com

  def url?(string)
    string.match?(/^https?:\/\/\S+$/) # + instead of * is probably better, no 'empty' URLs (e.g., http:// is invalid)
  end

  p url?('http://launchschool.com')   # -> true
  p url?('https://example.com')       # -> true
  p url?('https://example.com hello') # -> false
  p url?('   https://example.com')    # -> false

  # not bad - don't forget the end of line anchor '$' to eliminate match for other chars after the URL
end
# exercises_1

def exercises_2 # NEED TO PRACTICE!  
  # rules:
  # - don't allow newline "\n" as delimiter
  # - only ' ' (1 or more), ',',  '\t'

  def fields(string)
    words = string.split(/[, \t]+/)  # uses character class - any one of ' ' ',' '\t' and + (one or more times)
  end

  p fields("Pete,201,Student")
  # -> ["Pete", "201", "Student"]

  p fields("Pete \t 201    ,  TA")
  # -> ["Pete", "201", "TA"]

  p fields("Pete \t 201")
  # -> ["Pete", "201"]

  p fields("Pete \n 201")
  # -> ["Pete", "\n", "201"]

end
# exercises_2

def exercises_3
  # input : string with math equation (including operators +, -, *, /)
  # output : new string - replaces first operator with ?

  def mystery_math(string)
    string.sub(/[+\-*\/]/,'?')
  end

  p mystery_math('4 + 3 - 5 = 2')
  # -> '4 ? 3 - 5 = 2'

  p mystery_math('(4 * 3 + 2) / 7 - 1 = 1')
  # -> '(4 ? 3 + 2) / 7 - 1 = 1'

end
# exercises_3

def exercises_4

  def mysterious_math(string)
    string.gsub!(/[+\-*\/]/, '?')
  end

  p mysterious_math('4 + 3 - 5 = 2')           # -> '4 ? 3 ? 5 = 2'
  p mysterious_math('(4 * 3 + 2) / 7 - 1 = 1') # -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
end
# exercises_4

def exercises_5

  def danish(string)
    # string.sub(/(\bapple\b|\bblueberry\b|\bcherry\b)/,'danish') # this works, but could shorten
    string.sub(/\b(apple|blueberry|cherry)\b/,'danish')
  end

  p danish('An apple a day keeps the doctor away')
  # -> 'An danish a day keeps the doctor away'

  p danish('My favorite is blueberry pie')
  # -> 'My favorite is danish pie'

  p danish('The cherry of my eye')
  # -> 'The danish of my eye'

  p danish('apple. cherry. blueberry.')
  # -> 'danish. cherry. blueberry.'

  p danish('I love pineapple')
  # -> 'I love pineapple'
end
# exercises_5

def exercises_6 # NEED TO WORK ON UNDERSTANDING (OR LIMITING) QUESTION
  # input : date string - could be YYYY-MM-DD OR YYYY/MM/DD
  # output : date string in YYYY/MM/DD (if input was this) OR DD.MM.YYYY
  # assumptions / rules :
  # - input is ONLY 1 of 2 formats indicated
  # - output is ONLY 1 of 2 formats indicated (depending on input)
  # - must use regex; implied use of backreferences to rearrange order
  
  # algorithm:
  # - if string matches to desired format YYYY/MM/DD then return string unchanged
  # - if there is a match for format with '-' then:
  #       - need to match 1st \d\d which becomes \1 (DD)
  #       - need to match 2nd \d\d which becomes \2 (MM)
  #       - need to match \d\d\d\d which becomes \3 (YYYY)
  #       - replace with rearranged output string

  def format_date(string)
    string.sub(/(\d{4})-(\d{2})-(\d{2})/, '\3.\2.\1' )
  end

  p format_date('2016-06-17') # -> '17.06.2016'
  p format_date('2016/06/17') # -> '2016/06/17' (no change)
end
# exercises_6

def exercises_7
  # input : date string - could be YYYY-MM-DD OR YYYY/MM/DD
  # output : date string in DD.MM.YYYY
  # assumptions / rules :
  # - input will use YYYY MM DD format, but may mix delimiters
  # - output is DD.MM.YYYY only if delimiters aren't mixed and are - or / in input
  # - must use regex; implied use of backreferences to rearrange order
  
  # algorithm:
  # - if there is a match for format with '-' or '/' then:
  #       - need to use backreference for first delimiter match (- or /)
  #       - need to match 1st \d\d which becomes \1 (DD)
  #       - need to match 2nd \d\d which becomes \2 (MM)
  #       - need to match \d\d\d\d which becomes \3 (YYYY)
  #       - replace with rearranged output string

  def format_date(string)
    string.sub(/(\d{4})([\-\/])(\d{2})\2(\d{2})/, '\4.\3.\1' )
  end

  p format_date('2016-06-17') # -> '17.06.2016'
  p format_date('2017/05/03') # -> '03.05.2017'
  p format_date('2015/01-31') # -> '2015/01-31' (no change)
end
exercises_7

