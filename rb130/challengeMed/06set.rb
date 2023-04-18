class CustomSet
  def initialize(array=[])
    @set = array.uniq
  end

  def empty?
    @set.empty?
  end

  def contains?(element)
    @set.include?(element)
  end

  def subset?(other_set)
    result = true
    @set.each { |ele| result = false unless other_set.set.include?(ele) }
    result
  end

  def disjoint?(other_set)
    result = true
    @set.each { |element| result = false if other_set.set.include?(element) }
    result
  end

  def eql?(other_set)
    return false if other_set.nil? || @set.nil?
    @set.sort == other_set.set.sort
  end

  alias == eql?

  def add(element)
    @set = [] if @set.nil?
    @set.push(element) unless @set.include?(element)
    self
  end

  def intersection(other_set)
    add_from(other_set) { |element, oth_set| oth_set.include?(element) }
  end

  def difference(other_set)
    add_from(other_set) { |element, oth_set| !oth_set.include?(element) }
  end

  def union(other_set)
    new_set = CustomSet.new
    @set.each { |element| new_set.add(element) }
    other_set.set.each { |element| new_set.add(element) }
    new_set.remove_duplicates
  end

  protected

  attr_reader :set

  def remove_duplicates
    @set = @set.uniq
    self
  end

  private

  def add_from(other_set)
    new_set = CustomSet.new
    return new_set if other_set.set.nil? || @set.nil?
    @set.each { |ele| new_set.add(ele) if yield(ele, other_set.set) }
    new_set
  end
end
