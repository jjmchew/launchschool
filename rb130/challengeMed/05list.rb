class Element
  attr_reader :datum, :next

  def initialize(num, next_element=nil)
    @datum = num
    @next = next_element
  end

  def tail?
    # return boolean
    @next.nil?
  end

  def to_s
    "<Element:  datum #{@datum}; next #{@next}>"
  end
end

class SimpleLinkedList
  attr_reader :head

  def initialize
    @head = nil
    # @size = 0
  end

  def empty?
    # return boolean
    @head.nil?
  end

  def size
    # return integer
    counter = 0
    traverse { |_, element| counter += 1 unless element.nil? }
    counter
  end

  def peek
    # return integer or nil (datum of last element?)
    return nil if @head.nil?
    @head.datum
  end

  def push(datum)
    new_element = Element.new(datum, @head)
    # @head.next = new_element unless @head.nil?
    @head = new_element
    # @size += 1
  end

  def pop
    # returns datum of last element
    datum = @head.datum
    new_head = @head.next
    @head = new_head
    # @size -= 1
    datum
  end

  def to_a
    # returns an array (with elements representative of datum)
    new_arr = []

    # element = @head
    # loop do
    #   new_arr.push(element.datum) unless element.nil?
    #   break if element.nil? || element.next.nil?
    #   element = element.next
    # end

    traverse { |_, ele| new_arr.push(ele.datum) unless ele.nil? }
    new_arr
  end

  def reverse
    # returns a SimpleLinkedList object
    arr = to_a.reverse
    SimpleLinkedList.from_a(arr)
  end

  def self.from_a(array)
    # returns a new SimpleLinkedList object with elements from given array
    new_list = SimpleLinkedList.new
    return new_list if array.nil?

    array.reverse.each { |arr_el| new_list.push(arr_el) }
    new_list
  end

  def traverse
    element = @head
    counter = 1
    loop do
      yield(counter, element) if block_given?
      break if element.nil? || element.next.nil?
      element = element.next
      counter += 1
    end
  end
end