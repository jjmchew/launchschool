require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/content_for'
require 'tilt/erubis'
require 'redcarpet'

configure do
  enable :sessions
  set :session_secret, 'this/is/secret'
  set :erb, :escape_html => true
end

before do
  pattern = File.join(data_path, "*")
  @files = Dir.glob(pattern).map do |path|
    File.basename(path)
  end
end

module Helpers
  def data_path
    if ENV['RACK_ENV'] == 'test'
      File.expand_path('../test/data', __FILE__)
    else
      File.expand_path('../data', __FILE__)
    end
  end

  def get_filepath(file)
    File.join(data_path, file)
  end

  def render_markdown(content)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    markdown.render(content)
  end

  def load_content(file)
    content = File.read(get_filepath(file))

    if file.include?('.md')
      render_markdown(content)
    elsif file.include?('.txt')
      headers['Content-Type'] = 'text/plain'
      content
    end
  end

  def filename_valid?(file)
    valid = true
    valid = valid && !file.strip.empty?
    valid = valid && !@files.any? { |existing| existing == file }
    valid = valid && (file.include?('.md') || file.include?('.txt'))
  end
end
include Helpers

# index page (list of files)
get '/' do
  erb :home
end

# New file form [note position of route before display file]
get '/create' do
  erb :create
end

# display file contents
get '/:file' do
  if File.exist?(get_filepath(params[:file]))
    load_content(params[:file])
  else
    session[:message] = "#{params[:file]} does not exist." 
    redirect '/'
  end
end

# edit a file
get '/:file/edit' do
  @value = load_content(params[:file])
  headers['Content-Type'] = 'text/html'
  erb :edit
end

# delete a file
post '/:file/delete' do
  # "delete a file #{params[:file]}"
  File.delete(get_filepath(params[:file]))
  session[:message] = "'#{params[:file]}' was deleted."
  redirect '/'
end

# create a new file [note position of route before update]
post '/create' do
  if filename_valid?(params[:filename])
    session[:message] = "#{params[:filename]} was created."
    @files << params[:filename]
    File.write(get_filepath(params[:filename]), "")
    redirect '/'
  else
    status 422
    session[:message] = "A unique filename with a '.txt' or '.md' extension is required."
    erb :create
  end
end

# update a file
post '/:file' do
  File.write(get_filepath(params[:file]), params[:text_area])
  session[:message] = "#{params[:file]} has been updated."
  redirect '/'
end

# display sign-in page
get '/users/signin' do
  erb :signin
end

post '/users/signin' do
  if params[:username] == 'admin' && params[:pw] == 'secret'
    session[:username] = params[:username]
    session[:message] = 'Welcome!'
    status 200
    redirect '/'
  else
    status 422
    session[:message] = 'Invalid credentials'
    erb :signin
  end
end

post '/users/signout' do
  session.delete(:username)
  session[:message] = 'You have been signed out.'
  redirect '/'
end

=begin

X - add hash to 'session' to track sign_in status
X - create sign-in page (template: signin.erb)
X - create route: get users/signin
X - create route : post users/signin
X - create route : post users/signout
X - update home.erb - display signin or signout link at bottom
- create test scripts

=end