# This class represents a todo item and its associated
# data: name and description. There's also a "done"
# flag to show whether this todo item is done.

class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done
  end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end

  def ==(otherTodo)
    title == otherTodo.title &&
      description == otherTodo.description &&
      done == otherTodo.done
  end
end


# This class represents a collection of Todo objects.
# You can perform typical collection-oriented actions
# on a TodoList object, including iteration and selection.

class TodoList
  attr_accessor :title

  def initialize(title)
    @title = title
    @todos = []
  end

  # rest of class needs implementation

  def add(todo)
    raise TypeError, "can only add Todo objects" if todo.class != Todo
    @todos << todo
    @todos
  end

  alias_method :<<, :add

  def size
    @todos.length
  end
  
  def first
    @todos.first.clone
  end

  def last
    @todos.last.clone
  end

  def to_a
    @todos.clone
  end

  def done?
    # @todos.reduce(true){ |acc, todo| todo.done? && acc }
    @todos.all? { |todo| todo.done? }
  end

  def item_at(num)
    @todos.fetch(num)
  end

  def mark_done_at(num)
    item_at(num).done!
    @todos[num]
  end

  def mark_undone_at(num)
    item_at(num).undone!
  end

  def done!
    @todos.each { |todo| todo.done! }
    @todos.dup
  end

  def shift
    @todos.shift
  end

  def pop
    @todos.pop
  end

  def remove_at(num)
    raise IndexError if num > @todos.length - 1
    @todos.delete_at(num)
  end

  def to_s
    text = "---- #{title} ----\n"
    text << @todos.map(&:to_s).join("\n")
    text
  end

  def each
    counter = 0

    while counter < @todos.size
      yield(to_a[counter])
      counter += 1
    end

    self
  end

  def select(desc="Selected")
    new_list = TodoList.new("#{title} - #{desc}")
    each { |todo| new_list.add(todo) if yield(todo) }
    new_list
  end

  def find_by_title(str)
    each { |todo| return todo if todo.title == str }
    nil
  end

  def all_done
    select("Done Only") { |todo| todo.done? }
  end

  def all_not_done
    select("Unfinished Only") { |todo| !todo.done? }
  end

  def mark_done(str)
    each do |todo|
      if todo.title == str
        todo.done!
        break
      end
    end
  end

  def mark_all_done
    each { |todo| todo.done! }
  end

  def mark_all_undone
    each { |todo| todo.undone! }
  end
end

# Test requirements

# given
todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")
list = TodoList.new("Today's Todos")

# ---- Adding to the list -----

# add
puts list.add(todo1)                 # adds todo1 to end of list, returns list
puts list.add(todo2)                 # adds todo2 to end of list, returns list
puts list << todo3                 # adds todo3 to end of list, returns list
# list.add(1)                     # raises TypeError with message "Can only add Todo objects"

todo1.done!

# p list.find_by_title("Clean rooms")
# p list.all_done
# p list.all_not_done
# p list.mark_done("Clean room")
# list.mark_all_done
# list.mark_all_undone
# p list.all_done

# <<
# same behavior as add

# ---- Interrogating the list -----
# p list.size                       # returns 3
# puts list.first                      # returns todo1, which is the first item in the list
# puts list.last                       # returns todo3, which is the last item in the list
# p list.to_a                      # returns an array of all items in the list
# p list.done?                     # returns true if all todos in the list are done, otherwise false

# ---- Retrieving an item in the list ----
# list.item_at                    # raises ArgumentError
# puts list.item_at(1)                 # returns 2nd item in list (zero based index)
# list.item_at(100)               # raises IndexError

# ---- Marking items in the list -----
# list.mark_done_at               # raises ArgumentError
# puts list.mark_done_at(1)            # marks the 2nd item as done
# puts list.mark_done_at(2)            # marks the 2nd item as done
# list.mark_done_at(100)          # raises IndexError

# list.mark_undone_at             # raises ArgumentError
# list.mark_undone_at(1)          # marks the 2nd item as not done,
# list.mark_undone_at(100)        # raises IndexError

# list.done!                      # marks all items as done

# list.to_s
# puts

# var = list.each do |todo|
#   puts todo
# end

# puts
# p var

# ---- Deleting from the list -----
# list.shift                      # removes and returns the first item in list
# list.pop                        # removes and returns the last item in list

# list.remove_at                  # raises ArgumentError
# puts list.remove_at(1)               # removes and returns the 2nd item
# list.remove_at(100)             # raises IndexError

# ---- Outputting the list -----
list.to_s                      # returns string representation of the list

# ---- Today's Todos ----
# [ ] Buy milk
# [X] Clean room
# [ ] Go to gym


# todo1.done!
# results = list.select { |todo| todo.done? }    # you need to implement this method
# puts results.inspect

