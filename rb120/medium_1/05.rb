class EmptyStack < StandardError; end
class InvalidToken < StandardError; end

module MiniLangCommands
  def ml_push
    @stack.push(@register)
  end

  def ml_add
    @register = @register + ml_pop
  end

  def ml_sub
    @register = @register - ml_pop
  end

  def ml_mult
    @register = @register * ml_pop
  end

  def ml_div
    @register = @register / ml_pop
  end

  def ml_mod
    @register = @register % ml_pop
  end

  def ml_pop
    raise EmptyStack, "Empty stack!" if @stack.empty?
    @register = @stack.pop
  end

  def ml_print
    puts @register 
  end
end

class Minilang
  include MiniLangCommands

  COMMANDS = %w(PUSH ADD SUB MULT DIV MOD POP PRINT)

  def initialize(string)
    @stack = []
    @register = 0
    @commands = []
    @program = string
    parse_string(string)
  end

  def eval(var="")
    if var == "" then run
    else
      parse_string(format(@program, var))
      run
    end
  end

  private

  def run
    @commands.each do |command|
      case
      when is_number?(command) then @register = command.to_i 
      else
        send("ml_" + command.downcase)
      end
    end
  end

  def parse_string(string)
    @commands = string.split(" ")
    @commands.each do |command|
      unless COMMANDS.include?(command) || is_number?(command) || command[0] == "%"
        raise InvalidToken, "Invalid token: #{command}"
      end
    end
  end

  def is_number?(string)
    return true if string =~ /\A[-+]?\d+\z/
    false
  end
end

Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

# Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

# Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)

Minilang.new('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT').eval
# 5
# 10
# 4
# 7

CENTIGRADE_TO_FAHRENHEIT =
  '5 PUSH %<degrees_c>d PUSH 9 MULT DIV PUSH 32 ADD PRINT'

Minilang.new(format(CENTIGRADE_TO_FAHRENHEIT, degrees_c: 100)).eval
Minilang.new(format(CENTIGRADE_TO_FAHRENHEIT, degrees_c: 0)).eval
Minilang.new(format(CENTIGRADE_TO_FAHRENHEIT, degrees_c: -40)).eval

minilang = Minilang.new(CENTIGRADE_TO_FAHRENHEIT)
minilang.eval(degrees_c: 100)
minilang.eval(degrees_c: 0)
minilang.eval(degrees_c: -40)