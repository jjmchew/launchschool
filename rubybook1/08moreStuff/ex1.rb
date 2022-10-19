def check_lab(string)
  if /lab/.match(string) 
    puts string
  end
end

check_lab('laboratory')
check_lab('experiment')
check_lab('Pans Labyrinth')
check_lab('elaborate')
check_lab('polar bear')
