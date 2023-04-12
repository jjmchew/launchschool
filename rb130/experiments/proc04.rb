

first_name = "Jim"
last_name = "Bob"

proc1 = proc { |word| "#{first_name} #{last_name} is saying #{word}"}

last_name = "Smith"

p proc1.call