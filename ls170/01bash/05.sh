echo enter a number
read grade

if [[ $grade -lt 50 ]]
then
  echo F: you failed
elif [[ $grade -lt 60 ]]
then
  echo E: pretty bad
elif [[ $grade -lt 70 ]]
then
  echo D: bad
elif [[ $grade -lt 80 ]]
then
  echo C: not bad
elif [[ $grade -lt 90 ]]
then
  echo B: good
elif [[ $grade -lt 95 ]]
then
  echo A: pretty good
elif [[ $grade -le 100 ]]
then
  echo A+: great!
else
  echo I\'m not sure that\'s possible!
fi
