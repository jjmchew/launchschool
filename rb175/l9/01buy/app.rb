require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'
require 'yaml'
require 'date'

require_relative 'item.rb'
require_relative 'inventory.rb'

MODE = 'DEV'
BASE_URL = MODE == 'DEV' ? '' : '/inventory'

module FileMethods
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

  def write_yaml(inventory)
    filename = inventory.id.to_s + '.yml'
    File.write(get_filepath(filename), Psych.dump(inventory))
  end

  def read_inventories
    pattern = File.join(data_path, "*")
    @files = Dir.glob(pattern).map do |path|
      Psych.load_file(path)
    end
    @files
  end

  def read_yaml(file)
    filename = file.to_s + '.yml'
    Psych.load_file(get_filepath(filename))
  end
end
include FileMethods

module MiscHelpers
  def get_max_id
    lists = read_inventories
    max = 0
    lists.each do |list|
      max = list.id if list.id > max
    end
    max + 1
  end
end
include MiscHelpers

configure do
  enable :sessions
  set :session_secret, 'this/is/secret!'
  set :erb, :escape_html => true
end

helpers do
  def list
    @list ||= read_yaml(params[:list_id]) || halt(404)
  end

  def item
    @item ||= list.item_id(params[:item_id].to_i) || halt(404)
  end
end

get '/' do
  @lists = read_inventories
  erb :index
end

get '/list/add' do
  # "add list"
  erb :new_list
end

post '/list/add' do
  new_list = Inventory.new(params[:name])
  new_list.set_id(get_max_id)
  write_yaml(new_list)
  session[:message] = "New list '#{params[:name]}' added"
  redirect url('/')
end

# display new_item form
get '/list/:list_id/item/add' do
  "add item"
  erb :new_item
end

# add new item to list
post '/list/:list_id/item/add' do
  new_item = Item.new(params[:name], {
    date: Date.new(params[:y].to_i, params[:m].to_i, params[:d].to_i),
    qty: params[:qty].to_i
  })
  list.add(new_item)
  new_item.set_id(list.size - 1)
  write_yaml(@list)
  session[:message] = "#{params[:name]} added"
  redirect url("/list/#{params[:list_id]}")
end

# display add_item form (date, qty)
get '/list/:list_id/item/:item_id/add' do
  @item = item
  erb :add_item
end

# display item detail (list of date x qty)
get '/list/:list_id/item/:item_id' do
  @item = item
  erb :item_detail
end

# add qty to existing item
post '/list/:list_id/item/:item_id/add' do
  date = Date.new(params[:y].to_i, params[:m].to_i, params[:d].to_i)
  item.add({date: date, qty: params[:qty].to_i})
  write_yaml(list)
  session[:message] = "#{params[:qty].to_i} x #{item.name} added"
  redirect url("/list/#{params[:list_id]}")
end

# uses 1 of the item
post '/list/:list_id/item/:item_id/use' do
  item.use(1)
  write_yaml(list)
  session[:message] = "Removed 1 '#{item.name}'"
  redirect url("/list/#{params[:list_id]}")
end

# remove item from list
post '/list/:list_id/item/:item_id/remove' do
  item_name = item.name
  list.remove(item_name)
  write_yaml(list)
  session[:message] = "item '#{item_name}' removed"
  redirect url("/list/#{params[:list_id]}")
end

# display a specific list
get '/list/:list_id' do
  @list = list
  erb :list
end

# display delete_list page
get '/list/:list_id/remove' do
  @list = list
  erb :delete_list
end

# remove a specific list
post '/list/:list_id/remove' do
  list_name = list.name
  filename = params[:list_id] + '.yml'
  File.delete(get_filepath(filename))
  session[:message] = "'#{list_name}' deleted"
  redirect url('/')
end

=begin

Routes:
X - display lists
X - display individual list
X - add qty (existing item)
X - use qty (existing item)
X - display details of item (i.e., expiries, etc.)
X - add new item to list

X - remove item from list
- add new list



=end