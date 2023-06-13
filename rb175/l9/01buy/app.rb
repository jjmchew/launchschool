# require 'sinatra'
# require 'sinatra/reloader'
# require 'tilt/erubis'
require 'yaml'

require_relative 'item.rb'

# configure do
#   enable :sessions
#   set :session_secret, 'this/is/secret!'
#   set :erb, :escape_html => true
# end

sauce = Item.new("pasta sauce", {date: Date.new(2024, 5, 12)}, {date: Date.new(2025, 11, 17)}, {date: Date.new(2023, 3, 12)})
bagels = Item.new('bagels', {date: Date.new(2023, 12, 23), qty: 6}, {date: Date.new(2023, 6, 1), qty: 6})

home = [sauce, bagels]

File.write('data.yml', Psych.dump(home))

