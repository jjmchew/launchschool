class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

class RoadTrip < Oracle
  def choices
    ["visit Vegas", "fly to Fiji", "romp in Rome"]
  end
end

trip = RoadTrip.new
trip.predict_the_future

# Output is one of the following sentences, chosen randomly:
#  You will visit Vegas
#  You will fly to Fiji
#  You will romp in Rome

# Ruby always uses the method lookup path to determine - so will start in current class first, even though the method being invoked may belong to a super class.