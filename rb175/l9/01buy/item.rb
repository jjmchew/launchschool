require 'date'

class Item
  attr_reader :name

  def initialize(name, *objs)
    @name = name
    @inventory = assign(objs)
    # where an obj is { date: Date.new, qty: # } (qty is optional, assign_obj assigns 1 if not given)
  end

  def total
    # iterates through inventory to total remaining qty
    total = 0
    each { |obj| total += obj[:qty] }
    total
  end

  def list
    # returns a string of remaining expiries
    out = []
    each do |obj| 
      if obj[:qty] > 1
        out << "#{obj[:date]} x#{obj[:qty]}"
      else
        out << "#{obj[:date]}"
      end
    end
    out.join(', ')
  end

  def add(obj)
    # add an obj to inventory, then sort
    assign_obj(obj)
    sort_inventory
  end

  def use(qty=1)
    raise ArgumentError, "tried to use more than available" if qty > total
    remaining = qty
    
    loop do
      if @inventory.first[:qty] <= remaining
        remaining -= @inventory.first[:qty]
        @inventory.shift
      else
        @inventory.first[:qty] -= remaining
        remaining = 0
      end

      break if remaining == 0 || @inventory.empty?
    end
  end

  private

  def assign_obj(obj)
    # check obj for proper date class, assign a qty of 1 if not given
    raise ArgumentError, "item format incorrect" if obj.class != Hash
    raise ArgumentError, "item format incorrect" if obj[:date].class != Date
    obj[:qty] = 1 if obj[:qty].nil?
    @inventory << obj
  end

  def assign(objs)
    # assign all obj given on instantiation from initialize (given as array)
    @inventory = []
    objs.each { |obj| assign_obj(obj) }
    sort_inventory
  end

  def sort_inventory
    # sort inventory by expiry date
    @inventory = @inventory.sort_by { |hash| hash[:date] }
  end

  def each(&block)
    # helper method to iterate through inventory array, returns each obj
    @inventory.each do |obj|
      block.call(obj) if block_given?
    end
  end
end
