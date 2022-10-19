a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']

#new_ar = []
#a.map { |el| el.split(" ").each { |word| new_ar << word } }
new_ar = a.map { |el| el.split(" ") }
new_ar.flatten!

p new_ar