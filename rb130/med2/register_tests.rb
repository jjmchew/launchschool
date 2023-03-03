require 'minitest/autorun'

require_relative 'cash_register.rb'
require_relative 'transaction.rb'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(100)
    @trans = Transaction.new(400)
  end

  def test_accept_money
    
    @trans.amount_paid = 400

    assert_equal(100, @register.total_money)

    @register.accept_money(@trans)

    assert_equal(500, @register.total_money)
  end

  def test_change
    @trans.amount_paid = 500

    assert_equal(100, @register.change(@trans))
  end

  def test_give_receipt
    assert_output("You've paid $400.\n") { @register.give_receipt(@trans) }
  end
end