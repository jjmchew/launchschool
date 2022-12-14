class BankAccount
  attr_reader :balance

  def initialize(starting_balance)
    @balance = starting_balance
  end

  def positive_balance?
    balance >= 0
  end
end

# Ben is right - he doesn't need to use the `@` since he has defined a getter method for :balance.
# Thus, when accessing the instance variable '@balance', he can refer to it as `balance` within the class BankAccount to access it's value, such as in the `positive_balance?` method.

p BankAccount.new(-300).positive_balance?