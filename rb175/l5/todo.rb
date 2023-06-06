require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/content_for'
require 'tilt/erubis'

# added to use sessions within Sinatra
configure do
  enable :sessions
  set :session_secret, 'secret' # used to be able to access data after Sinatra restarts
end

helpers do
  
  def get_todo_status(todos)
    num_completed = todos.count { |todo| todo[:completed] == true }
    is_completed = num_completed == todos.size && todos.size >= 1
    { detail: "#{num_completed} / #{todos.size}", completed: is_completed }
  end

  def list_class(list)
    "complete" if get_todo_status(list)[:completed]
  end

end

before do
  session[:lists] ||= []
end

get '/' do
  redirect '/lists'
end

# View all lists
get '/lists' do
  @lists = session[:lists]
  erb :lists, layout: :layout
end

# Render the new list form
get '/lists/new' do
  erb :new_list, layout: :layout
end

# View a single list
get '/lists/:id' do
  @list_id = params['id'].to_i
  @list = session[:lists][@list_id]
  erb :list, layout: :layout
end

# Return an error message if the name is invalid. Return nil if name is valid
def error_for_list_name(list_name)
  if !(1..100).cover? list_name.size
    'List name must be between 1 and 100 characters.'
  elsif session[:lists].any? { |list| list[:name] == list_name }
    'List name must be unique.'
  end
end

# Create a new list
post '/lists' do
  list_name = params[:list_name].strip

  error = error_for_list_name(list_name)
  if error
    session[:error] = error
    erb :new_list, layout: :layout
  else
    session[:lists] << { name: list_name, todos: [] }
    session[:success] = 'The list has been created.'
    redirect '/lists'
  end
end

# Edit list (name) page
get '/lists/:id/edit' do
  @list_id = params['id'].to_i
  @list = session[:lists][@list_id]
  erb :edit_list, layout: :layout
end

# Update list_name
post '/lists/:id' do
  list_name = params[:list_name].strip
  @list_id = params['id'].to_i
  @list = session[:lists][@list_id]
  
  error = error_for_list_name(list_name)
  if error
    session[:error] = error
    erb :list, layout: :layout
    # redirect "/lists/#{@id}"
  else
    session[:lists][@list_id][:name] = list_name
    session[:success] = "List name updated to '#{list_name}'."
    redirect "/lists/#{@list_id}"
  end
end

# Delete list
post '/lists/:id/delete' do
  id = params['id'].to_i
  list_name = session[:lists][id][:name]
  session[:lists] = session[:lists].select { |list| list[:name] != list_name }
  session[:success] = "'#{list_name}' deleted."
  redirect "/lists"
end

# Return an error message if the name is invalid. Return nil if name is valid
def error_for_todo_name(todo_name, list_id)
  if !(1..100).cover? todo_name.size
    'Todo name must be between 1 and 100 characters.'
  elsif session[:lists][list_id][:todos].any? { |todo| todo[:name] == todo_name }
    'Todo name must be unique.'
  end
end

# Add a todo to list
post '/lists/:list_id/todos' do
  @list_id = params['list_id'].to_i
  @list = session[:lists][@list_id]
  todo_name = params['todo_name'].strip

  error = error_for_todo_name(todo_name, @list_id)
  if error
    session[:error] = error
    erb :list, layout: :layout
  else
    @list[:todos] << { name: todo_name, completed: false }
    session[:success] = "'#{todo_name}' added to list '#{@list[:name]}'"
    redirect "/lists/#{params['list_id']}"
  end
end

# Delete a todo from list
post '/lists/:list_id/todos/:todo_id/delete' do
  @list_id = params['list_id'].to_i
  @todo_id = params['todo_id'].to_i
  todo_name = session[:lists][@list_id][:todos][@todo_id][:name]
  session[:lists][@list_id][:todos].delete_at(@todo_id)
  session[:success] = "Todo '#{todo_name}'deleted"
  redirect "/lists/#{@list_id}"
end

# Change todo status (completed or not)
post '/lists/:list_id/todos/:todo_id/toggle' do
  @list_id = params['list_id'].to_i
  @todo_id = params['todo_id'].to_i
  todo = session[:lists][@list_id][:todos][@todo_id]

  is_completed = params['completed'] == 'true'
  todo[:completed] = is_completed

  session[:success] = "Todo '#{todo[:name]}' updated"
  redirect "/lists/#{@list_id}"
end

# Complete All todos
post '/lists/:list_id/todos/completeall' do
  @list_id = params['list_id'].to_i
  list = session[:lists][@list_id]

  list[:todos].map! { |todo| { name: todo[:name], completed: true} }
  session[:success] = "All todos in list '#{list[:name]}' marked as completed."
  redirect "/lists/#{@list_id}"
end