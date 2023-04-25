echo what\'s your name?
read name

echo '========='

if [[ $name = 'James' ]] || [[ $name = 'Alex' ]]
then
  echo Brilliant!
elif [[ $name = 'Pinky' ]]
then
  echo Dangerous!
else
  echo Nice to meet you, $name...
fi
