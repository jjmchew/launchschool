require 'minitest/autorun'
require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTransactionTest < Minitest::Test
  def setup
    @register = CashRegister.new(300)
    @transaction = Transaction.new(30)
    
  end

  def test_accept_money
    @transaction.amount_paid = 30

    assert_equal(300, @register.total_money)
    @register.accept_money(@transaction)
    assert_equal(330, @register.total_money)
  end

  def test_change
    @transaction.amount_paid = 50
    assert_equal(20, @register.change(@transaction))
  end

  def test_give_receipt
    @transaction.amount_paid = 30
    assert_output("You've paid $30.\n", nil) do
      @register.give_receipt(@transaction)
    end
  end

  def test_prompt_for_payment
    amount_paid = 50.5
    input1 = StringIO.new("#{amount_paid}\n")
    output1 = StringIO.new
    # assert_output("You owe $30.\nHow much are you paying?\n", nil) do
    #   @transaction.prompt_for_payment(input: input1)
    # end
    @transaction.prompt_for_payment(input: input1, output: output1)
    assert_equal(amount_paid, @transaction.amount_paid)
  end

  def test_prompt_for_payment_insufficient
    input2 = StringIO.new("20\n30\n")
    output2 = StringIO.new
    expected_out = <<-OUTPUT.chomp.gsub /^\s+/, ""
    You owe $30.
    How much are you paying?
    That is not the correct amount. Please make sure to pay the full cost.
    You owe $30.
    How much are you paying?

    OUTPUT
    # assert_output(expected_out, nil) do
    #   @transaction.prompt_for_payment(input: input2)
    # end
    @transaction.prompt_for_payment(input: input2, output: output2)
    assert_equal(30, @transaction.amount_paid)
  end
end