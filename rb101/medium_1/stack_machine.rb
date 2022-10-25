# input:
#   - string of commands

# output:
#   - depends on the commands provided in the minilang

# assumptions / constraints:
#   - there is a register, independent of the stack
#     - stores output of operations (e.g., MULT)
#   - stack :  use push (add) / pop (remove) from the stack
#     - stores values to be used by operations
#   - operations :
#     - impact register or stack values (i.e., push or pop), may do calcs

# data structure:
#   - use array for stack
#   - register - can be a var
#   - create 'commands' array

# algorithm / aproach:
#   - setup register (initialized at 0)
#   - setup stack (array)
#   - parse command_string into independent commands (array of 'words')
#   - iterate across commands to execute commands
#       - call appropriate code to execute desired commands


def minilang(command_string)
  register = 0
  stack = []
  commands = command_string.split
  # p commands
  commands.each do |command|
    # puts command
    if command.to_i.to_s == command
      # puts "n called"
      register = command.to_i
    elsif command == 'PUSH'
      stack << register
    elsif command == 'ADD'
      register = stack.pop + register
    elsif command == 'SUB'
      register = register - stack.pop
    elsif command == 'MULT'
      register = stack.pop * register
    elsif command == 'DIV'
      register = register / stack.pop
    elsif command == 'MOD'
      register = register.divmod(stack.pop)[1]
    elsif command == 'POP'
      register = stack.pop
    elsif command == 'PRINT'
      puts register
    end
  end
end

# minilang('4 PRINT')

# test cases / examples:
# minilang('PRINT')
# 0

minilang('5 PUSH 3 MULT PRINT')
# 15
puts " =========================================== "
minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8
puts " =========================================== "
minilang('5 PUSH POP PRINT')
# 5
puts " =========================================== "
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7
puts " =========================================== "
minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# 6
puts " =========================================== "
minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# 12
puts " =========================================== "
minilang('-3 PUSH 5 SUB PRINT')
# 8
puts " =========================================== "
minilang('6 PUSH')
# (nothing printed; no PRINT commands)
