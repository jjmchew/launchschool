class Robot
  attr_reader :name
  ALPHABET = %w(_ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)
  
  @@robot_names = []
  
  def initialize
    reset
  end
  
  def reset
    # missed a potential requirement to remove existing name from class variable array of names
    @@robot_names.delete(@name)
    
    @name = get_name
  end

  def self.get_all_names
    @@robot_names
  end

  private

  def get_name
    new_name = generate_name
    @@robot_names << new_name
    new_name
  end

  def generate_name
    new_name = nil
    loop do
      new_name = ALPHABET[rand(1..26)] + ALPHABET[rand(1..26)] + rand(0..9).to_s + rand(0..9).to_s + rand(0..9).to_s
      break unless @@robot_names.include?(new_name)
    end
    new_name
  end

  
end

# Robot.new.name
# Robot.new.name
# a = Robot.new
# p Robot.get_all_names
# a.reset
# Robot.new.name
# p Robot.get_all_names
