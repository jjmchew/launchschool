require 'sinatra'
require 'sinatra/content_for'
require 'tilt/erubis'

require_relative 'db_persistence'

configure do
  enable :sessions
  set :session_secret, SecureRandom.hex(32)
  set :erb, :escape_html => true
end

configure(:development) do
  require 'sinatra/reloader'
  also_reload 'db_persistence.rb'
end

helpers do
  # view helpers go here
end

before do
  # actions executed before each route
  @storage = DatabasePersistence.new(logger)
end

get '/' do
  @title = 'Sinatra App for realz'
  erb :home
end

get '/test' do
  redirect '/'
end

get '/:msg' do
  @title = params[:msg]
  erb :home
end

not_found do
  @title = 'Sorry, page not found'
  erb :home
end
