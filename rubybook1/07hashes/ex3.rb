movies = {
  "the two towers": 2002,
  "the return of the king": 2003,
  "the fellowship of the ring": 2001,
  "the crow": 1994,
}

movies.keys.each { |k| puts k }

puts ""

movies.values.each { |v| puts v }

puts ""

movies.each { |k,v| puts "#{k} : #{v}" }