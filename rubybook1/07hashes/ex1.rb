family = {  uncles: ["bob", "joe", "steve"],
            sisters: ["jane", "jill", "beth"],
            brothers: ["frank","rob","david"],
            aunts: ["mary","sally","susan"]
          }


tmp_family = family.select { |k,v| k == :sisters || k == :brothers }

# immediate_family = []
# tmp_family.each do |k,v|
#   v.each { |name| immediate_family.push(name) }
# end

immediate_family = tmp_family.values.flatten

puts immediate_family.to_s