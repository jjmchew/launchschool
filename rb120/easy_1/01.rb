class Banner
  def initialize(message, width=nil)
    @message = message
    @width = width
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    if @width
      "+-#{'-' * @width}-+"
    else 
      "+-#{"-" * @message.length}-+"
    end
  end

  def empty_line
    if @width
      "| #{' ' * @width} |"
    else 
      "| #{" "*@message.length} |"
    end
  end

  def message_line
    if @width && @width >= @message.length
      "| #{@message.center(@width)} |"
    elsif @width && @width < @message.length
      "| #{@message[0, @width]} |"
    else 
      "| #{@message} |"
    end
  end
end

banner = Banner.new('To boldly go where no one has gone before.')
puts banner
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

banner = Banner.new('To boldly go where no one has gone before.', 80)
puts banner

banner = Banner.new('To boldly go where no one has gone before.', 10)
puts banner

banner = Banner.new('')
puts banner
# +--+
# |  |
# |  |
# |  |
# +--+

