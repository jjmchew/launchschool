class Robot
  ALPHABET = %w(_ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)
  @@robot_names = []

  attr_reader :name

  def initialize
   set_name
  end

  def reset
    @@robot_names.delete(@name)
    set_name
  end

  private

  def set_name
    new_name = ""
    loop do
      new_name = generate_name
      break unless @@robot_names.include?(new_name)
    end
    @name = new_name
    log_name(new_name)
  end

  def generate_name
    ALPHABET[rand(1..26)] + ALPHABET[rand(1..26)] + rand(0..9).to_s + rand(0..9).to_s + rand(0..9).to_s
  end

  def log_name(new_name)
    @@robot_names << new_name
  end
end

# r1 = Robot.new
# p r1.name

# r2 = Robot.new
# p r2.name

# r1.reset
# p r1.name