console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

function staggeredCase(string) {
  let toUpper = false;
  return [...string].map(char => {
    if (/[^a-z]/i.test(char)) return char;
    toUpper = !toUpper;
    return toUpper ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}