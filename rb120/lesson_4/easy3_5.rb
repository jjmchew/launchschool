class Television
  def self.manufacturer
    # method logic
  end

  def model
    # method logic
  end
end

tv = Television.new
tv.manufacturer # error:  `manufacturer` is a class method, not an instance method; it's being called on an instance here
tv.model # would execute code in `model` method

Television.manufacturer # would execute code in `self.manufacturer` method (class method)
Television.model # error : cannot execute an instance method on a class (`Television` in this case)

