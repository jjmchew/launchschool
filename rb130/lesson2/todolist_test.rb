require 'simplecov'
require 'minitest/autorun'
require "minitest/reporters"
SimpleCov.start
Minitest::Reporters.use!

require_relative '../lesson1/05-TodoList'

class TodoListTest < MiniTest::Test

  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  # Your tests go here. Remember they must start with "test_"
  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(3, @list.size)
    assert_equal(3, @todos.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_last
    assert_equal(@todo3, @list.last)
  end

  def test_shift
    assert_equal(@todo1, @list.shift)
    assert_equal(2, @list.size)
    assert_nil(@list.find_by_title("Buy milk"))
  end

  def test_pop
    assert_equal(@todo3, @list.pop)
    assert_equal(2, @list.size)
    assert_nil(@list.find_by_title("Go to gym"))
  end

  def test_done?
    assert_equal(false, @list.done?)
    refute(@list.done?)
    @todo1.done!
    refute(@list.done?)
    @todo2.done!
    refute(@list.done?)
    @todo3.done!
    assert(@list.done?)
  end

  def test_bad_type_added
    assert_raises(TypeError) { @list.add("hello") }
  end

  def test_shovel_add
    @list << Todo.new("Have a nap")
    assert_equal(4, @list.size)
    refute_nil(@list.find_by_title("Have a nap"))
  end

  def test_add
    @list.add Todo.new("Have a nap")
    assert_equal(4, @list.size)
    refute_nil(@list.find_by_title("Have a nap"))
  end

  def test_item_at
    assert_raises(IndexError) { @list.item_at(100) }
    assert_equal(@todo2, @list.item_at(1))
  end

  def test_mark_done_at
    assert_raises(IndexError) { @list.mark_done_at(100) }
    @list.mark_done_at(1)
    assert(@todo2.done?)
    refute(@todo1.done?)
    refute(@todo3.done?)
  end

  def test_mark_undone_at
    @todo1.done!
    assert(@todo1.done?)
    refute(@todo2.done?)
    refute(@todo3.done?)
    @list.mark_undone_at(0)
    refute(@todo1.done?)
    refute(@todo2.done?)
    refute(@todo3.done?)
    assert_raises(IndexError) { @list.mark_undone_at(100) }
  end

  def test_done!
    refute(@todo1.done?)
    refute(@todo2.done?)
    refute(@todo3.done?)
    refute(@list.done?)
    @list.done!
    assert(@todo1.done?)
    assert(@todo2.done?)
    assert(@todo3.done?)
    assert(@list.done?)
  end

  def test_remove_at
    assert_raises(IndexError) { @list.remove_at(200) }
    @list.remove_at(1)
    assert_equal(2, @list.size)
    assert_nil(@list.find_by_title("Clean room"))
    assert_equal([@todo1, @todo3], @list.to_a)
  end

  def test_to_s_1
    output = <<-SCREENOUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    SCREENOUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_to_s_2
    @todo1.done!
    output = <<-SCREENOUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [X] Buy milk
    [ ] Clean room
    [ ] Go to gym
    SCREENOUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_to_s_3
    @list.mark_all_done
    output = <<-SCREENOUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to gym
    SCREENOUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_each_1
    result = []
    @list.each { |todo| result << todo }
    assert_equal([@todo1, @todo2, @todo3], result)
  end

  def test_each_2
    check = @list.each { true }
    assert_equal(@list, check)
  end

  def test_select
    check = @list.select { true }
    assert_equal(3, check.size)
    assert_equal(@todo1, check.item_at(0))
    assert_equal(@todo2, check.item_at(1))
    assert_equal(@todo3, check.item_at(2))

    @todo1.done!
    check2 = @list.select { |todo| todo.done? }
    assert_equal([@todo1], check2.to_a)
  end

  def test_todo_equal
    new_todo = Todo.new("Buy milk")
    assert(new_todo == @todo1)
    refute(@todo1 == @todo2)
  end

  def test_all_done
    new_list = @list.all_done
    assert_equal("Today's Todos - Done Only", new_list.title)
  end

  def test_all_not_done
    new_list = @list.all_not_done
    assert_equal("Today's Todos - Unfinished Only", new_list.title)
    new_list.title = "Today's Todos"
    assert_equal(new_list.to_a, @list.to_a)
  end

  def test_mark_done
    @list.mark_done("Clean room")
    assert(@todo2.done?)
    refute(@todo1.done?)
    refute(@todo3.done?)
  end

  def test_mark_all_undone
    @list.done!
    assert(@todo1.done?)
    assert(@todo2.done?)
    assert(@todo3.done?)
    @list.mark_all_undone
    refute(@todo1.done?)
    refute(@todo2.done?)
    refute(@todo3.done?)
  end
end