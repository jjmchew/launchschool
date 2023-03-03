require "minitest/autorun"

require_relative "text.rb"

class TextTest < Minitest::Test
  def setup
    @f = File.open('text.txt', 'r')
    @text = @f.read
  end

  def test_swap
    # p @text
    text = Text.new(@text)
    actual = text.swap('a', 'e')

    expected = "Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.\nSuspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet\nquem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo\nnulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum\ndolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres\net verius meuris, et pheretre mi."

    assert_equal(expected, actual)
  end

  def test_word_count
    text = Text.new(@text)
    assert_equal(72, text.word_count)
  end

  def teardown
    @f.close
    puts "File has been closed: #{@f.closed?}"
  end
end