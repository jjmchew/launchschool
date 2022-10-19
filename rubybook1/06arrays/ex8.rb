ar1 = [1, 2, 5, 6, 8]

def increment_array(arry)
  arry.map { |e| e+2 }
end

ar2 = increment_array(ar1)

p ar1
p ar2