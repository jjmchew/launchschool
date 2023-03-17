f_name = "John"
l_name = "Doe"

output = <<~OUTPUT.chomp
My name is #{f_name} #{l_name}
OUTPUT

p output