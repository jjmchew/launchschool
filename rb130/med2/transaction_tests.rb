require 'minitest/autorun'

require_relative 'cash_register.rb'
require_relative 'transaction.rb'

class TransactionTest < Minitest::Test
  def setup
    @register = CashRegister.new(100)
    @trans = Transaction.new(400)
  end

  def test_prompt_for_payment
    inp = StringIO.new("400\n")
    outp = StringIO.new
    @trans.prompt_for_payment(input: inp, output: outp)
    assert_equal(400, @trans.amount_paid)
  end
end
