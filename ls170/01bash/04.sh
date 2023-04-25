echo Enter a number
read integer

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10

  if [[ $integer -lt 5 ]]
  then
    echo $integer is also less than 5
  fi
else
  echo you entered $integer, and I have nothing more to say about it.
fi
