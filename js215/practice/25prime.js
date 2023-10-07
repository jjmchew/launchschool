/*

Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

Example
primeNumberPrinter("a4bc2k13d"); // [2, 13]

*/

/*
elapsed:  25 mins



input
- string : mixed characters and numbers

output
- array containing all prime numbers in input

rules
- assume sequential numbers are considered as 1 number (e.g., 13 isn't 1 and 3)
- assume numbers are separated by any non-digit char (e.g., space, alpha, special char, etc.)
- assume if no primes are present, return an empty array
- assume numbers are returned in the order they appear in the string

questions
- strings:
  - empty strings? return empty array
  - ignore all non-digit characters? incl. special characters?
    - alpha, punctuation, newlines, etc.
- assume no mutation of input string
- arguments:
  - wrong #?  ignore extra
  - wrong type: return empty array
  - no argument : return empty array
- numbers:
  - ignore infinity, etc.
  - assume 0 is not prime
  - parse negative numbers?  no - no such thing as negative prime numbers
  - confirm 1 is NOT a prime number
  - assume leading zero is 'dropped' (base 10 numbers)

notes
- can use regex to find numbers and parse them (match?)

approach
- helper function 'isPrime'
  - create an array of numbers from 2 to given number - 1
  - filter on numbers that divide evenly into given number
  - check if length of array is > 0
  - if so, not prime
  - if not, prime

- guard clauses: check for empty strings, bad arguments, etc.

- use regex to find matches for any sequence of digits
- filter matches:
  - convert to a number
  - check if 'isPrime'
- return filtered matches

*/

function primeNumberPrinter(inputString) {
  if (inputString === undefined) return [];
  else if (typeof inputString !== 'string') return [];

  let isPrime = number => {
    let divisors = [];
    for (let i = 2; i < number; i += 1) {
      divisors.push(i);
    }
    return divisors.filter(num => number % num === 0).length === 0;
  };

  let matches = inputString.match(/[0-9]+/g) || [];
  matches = matches.map(str => parseInt(str, 10))
                   .filter(num => isPrime(num));
  return matches;
}

console.log(primeNumberPrinter("a4bc2k13d").toString() === [2, 13].toString());
console.log(primeNumberPrinter("!a4bc6&~kd10").toString() === [].toString());
console.log(primeNumberPrinter("!a4bc6&~kd11").toString() === [11].toString());
console.log(primeNumberPrinter('\n\tab*k3\n11u7').toString() === [3, 11, 7].toString());
console.log(primeNumberPrinter('1a2b3', '5a6c7').toString() === [2, 3].toString());

console.log(primeNumberPrinter('').toString() === [].toString());
console.log(primeNumberPrinter().toString() === [].toString());
console.log(primeNumberPrinter(['hello']).toString() === [].toString());