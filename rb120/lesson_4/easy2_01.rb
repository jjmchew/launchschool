class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

oracle = Oracle.new
oracle.predict_the_future

# Output is 1 of 3 possible sentences (chosen randomly):
# You will eat a nice lunch
# You will take a nap soon
# You will stay at work late
