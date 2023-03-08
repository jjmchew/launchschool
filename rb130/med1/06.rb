# Replace the two `method_name` placeholders with actual method calls
def convert_to_base_8(n)
  n.to_s(8).to_i
end

# Replace `argument` with the correct argument below
# `method` is `Object#method`, not a placeholder
base8_proc = method("convert_to_base_8").to_proc

# We'll need a Proc object to make this code work
# Replace `a_proc` with the correct object
p [8, 10, 12, 14, 16, 33].map(&base8_proc)

# p convert_to_base_8(8)
# p convert_to_base_8(10)
# p convert_to_base_8(12)
# p convert_to_base_8(14)
# p convert_to_base_8(16)
# p convert_to_base_8(33)