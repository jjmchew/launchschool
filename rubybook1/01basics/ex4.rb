require "pry"

movies = {
  "the two towers": 2002,
  "the return of the king": 2003,
  "the fellowship of the ring": 2001,
  "the crow": 1994,
}

arry = []
movies.each { |movie,yr| arry << yr }

binding.pry

arry.each { |el| puts el }
