# def q1
#   # 1. How do we create an object in Ruby?
  
#   # Use a class, call the 'new' method on that class (instantiate an object)
#    NOTE:  cannot define classes, modules in a method!
#   class GoodDog
#   end

#   sparky = GoodDog.new
# end

# def q2
#   # 2. What is a module?
#        A set of pre-defined 'behaviours' (i.e., code) that can be added to any class using a mixin

#   #  What is its purpose?
#      To allow code to be easily reused
#      Extend the functionality of a class
#      - namespacing : helps to organize code


#   #  How do we use them with our classes?
#      include the module, then call included methods as desired

#   #  Create a module and include it properly

#   module Drool
#     def drool
#       puts "drip drip"
#     end
#   end

#   class GoodDog
#     include Drool
#   end

#   sparky = GoodDog.new
#   sparky.drool

# end

module Drool
  def drool
    puts "drip drip"
  end
end

module Play
  class Run
  end

  class Jump
  end
end

class GoodDog
  include Drool
end

sparky = GoodDog.new
sparky.drool

fido = Play::Run.new