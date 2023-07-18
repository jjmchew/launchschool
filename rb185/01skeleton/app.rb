require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'

configure do
  enable :sessions
  set :session_secret, 'this/is/a/s3cr3t/pw'
end

helpers do
  # view helpers go here
end

before do
  # actions executed before each route
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
