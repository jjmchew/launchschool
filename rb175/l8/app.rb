require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/content_for'
require 'tilt/erubis'

configure do
  enable :sessions
  set :session_secret, 'this/is/secret'
  set :erb, :escape_html => true
end

get "/" do
  "this is working"
end
