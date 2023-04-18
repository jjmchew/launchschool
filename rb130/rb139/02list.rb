class Element
  attr_reader :datum, :next

  def initialize(num, next_ele = nil)
    @datum = num
    @next = next_ele
  end

  def tail?
    @next.nil?
  end
end

class SimpleLinkedList
  attr_reader :head

  def initialize
    @head = nil
  end

  def empty?
    size == 0
  end

  def push(datum)
    old_head = @head
    @head = Element.new(datum, old_head)
  end

  def size
    return 0 if @head.nil?

    length = 1
    ele = @head
    while !ele.tail?
      ele = ele.next
      length += 1
    end

    length
  end

  def peek
    return nil if @head.nil?
    @head.datum
  end

  def pop
    old_head = @head
    @head = @head.next
    old_head.datum
  end

  def self.from_a(array)
    new_list = SimpleLinkedList.new
    return new_list if array.nil?
    array.reverse.each { |ele| new_list.push(ele) }
    new_list
  end

  def to_a
    output = []
    return output if @head.nil?
    ele = @head
    loop do
      output << ele.datum
      break if ele.tail?
      ele = ele.next
    end
    output
  end

  def reverse
    SimpleLinkedList.from_a(to_a.reverse)
  end
end
