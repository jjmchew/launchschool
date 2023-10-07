/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

*/

/*
input
- string of words: each word contains a number from 1 - 9 in it

output
- the same words rearranged by number (ascending)

rules
- numbers can appear anywhere in the word
- if the string is empty, return an empty string
- only valid consecutive numbers will be in the words

approach
- split 'words' into an array of words
- sort the array using a custom function
  - sort function
    - can use regex to find first match and return it, convert it to a number
- join the array back into an output string

notes
- split into array, sort the array using a custom callback function (to return the number within the word)

*/
console.log(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est");
console.log(order("4of Fo1r pe6ople g3ood th5e the2") === "Fo1r the2 g3ood 4of th5e pe6ople");

function order(words) {
  let getNum = word => word.match(/[1-9]/)[0];
  let sortByNumber = (a, b) => {
    if (getNum(a) < getNum(b)) return -1;
    else if (getNum(a) > getNum(b)) return 1;
    else return 0;
  };

  return words.split(' ').sort(sortByNumber).join(' ');
}