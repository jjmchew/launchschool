def make_greeting(name, &phrase)
  "#{name}, #{phrase}"
end

p make_greeting("Joe")