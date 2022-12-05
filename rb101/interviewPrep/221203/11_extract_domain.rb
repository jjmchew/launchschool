# 10:03 - 10:29  :  26 minutes
=begin
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domain_name("http://github.com/carbonfive/raygun") == "github" 
domain_name("http://www.zombie-bites.com") == "zombie-bites"
domain_name("https://www.cnet.com") == "cnet"

input
  - string:  url
output
  - substring of url :  the domain name
rules
  - assume domain name is always after // or after www. and before .
notes
  - could use regex
  - could just scan for 'www.' first, then '//'
      - take char after 'www.' (or '//') until before next '.'
  - find_index(full, search)
        - convert full to array of chars
            - search full for index of first char of search
            - if present:  check if a joined subarray of chars of full from returned index is equal to search
                - if so:  return index
                - if not:  replace chars up to index + length of search with " "
                          - search again
            - if no match is found, return nil
algorithm
  - check string for index of 'www.'
      - if not present, then check for '//'
  
  - if 'www.' exists in string, then use find_index to get index of where domain starts
  - if '//' exists in string, then use find_index to get index of where domain starts (`start`)
  - take a substring from where domain starts until the end
  - do another find_index to get where the next '.' starts, -1 for end of domain (`finish`)
  - return the substring between `start` and `finish`
      
  
=end

def find_index(full, search)
  # p "#{full} #{search}"
  array = full.chars

  loop do
    index = array.find_index(search[0])
    if index
      return index if array[index, search.length].join == search
      (0..index).each { |idx| array[idx] = " " }
    end
    break if !index
  end
end

def domain_name(string)
  if string.include?('www.')
    start = find_index(string, 'www.') + 4
  elsif string.include?('//')
    start = find_index(string, '//') + 2
  end

  finish = find_index(string[start..], '.') - 1
  # p "#{start} #{finish}"
  string[start..start+finish]
end

p domain_name("http://google.com") == "google"
p domain_name("http://google.co.jp") == "google"
p domain_name("www.xakep.ru") == "xakep"
p domain_name("https://youtube.com") == "youtube"
p domain_name("http://github.com/carbonfive/raygun") == "github" 
p domain_name("http://www.zombie-bites.com") == "zombie-bites"
p domain_name("https://www.cnet.com") == "cnet"
