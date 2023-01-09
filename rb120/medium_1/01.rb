class Machine
  def start
    self.flip_switch(:on)
  end

  def stop
    self.flip_switch(:off)
  end

  private             # added

  attr_writer :switch # moved

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

