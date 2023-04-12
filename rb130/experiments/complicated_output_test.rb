require 'minitest/autorun'
require_relative 'complicated_output.rb'

class TestOutput < Minitest::Test
  def test_output
    exp = <<~OUTPUT
    Let me introduce:
     0 >> Chris << 
     1 >> Pat << 
     2 >> Tyler << 
    =========
    OUTPUT
    # output1 = StringIO.new
    assert_output(exp,nil) do
      complicated_output("Chris", "Pat", "Tyler")
    end
  end
end
