items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  yield(items.join(', '))
end

gather(items) do |output|
  puts "Let's start gathering food."
  puts "#{output}"
  puts "Nice selection of food we have gathered!"
end
