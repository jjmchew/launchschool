/*
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  function replacer(match) {
    return match.toUpperCase();
  }
  return this.replace(/(^[a-z]| [a-z])/g, replacer);
};

console.log("most Trees Are Blue".toJadenCase());