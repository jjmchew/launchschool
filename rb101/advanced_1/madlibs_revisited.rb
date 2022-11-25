text = File.read('madlibs.txt')

adjectives = %w(big small fat wide thin red blue quick lazy sleepy ugly)
nouns = %w(fox dog head tail leg pizza)
verbs = %w(runs jumps bites licks eats)
adverbs = %w(easily lazily noisily excitedly slowly quickly)

keys = [:adjective1, :noun1, :adverb1, :verb1, :adjective2, :noun2, :adverb2, :verb2, :noun3]

words = {}
keys.each do |key|
  case
  when key.to_s.include?('adjective')
    words[key] = adjectives.sample
  when key.to_s.include?('noun')
    words[key] = nouns.sample
  when key.to_s.include?('adverb')
    words[key] = adverbs.sample
  when key.to_s.include?('verb')
    words[key] = verbs.sample
  end
end

p sprintf(text, words)