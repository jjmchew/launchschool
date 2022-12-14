class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game
  def rules_of_play
    #rules of play
  end
end

# If a `play` method is added to the Bingo class, then it will override the `play` method in the `Game` class.
# i.e., when `play` is invoked on an instance of `Bingo`, then the method `play` defined in `Bingo` will be executed, rather than the `play` method defined in `Game`.

