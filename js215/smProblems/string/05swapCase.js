swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(string) {
  let swap = (char) => {
    if (/[a-z]/.test(char)) return char.toUpperCase();
    else if (/[A-Z]/.test(char)) return char.toLowerCase();
    else return char;
  };
  let output = string.split('').map(char => swap(char)).join('');
  console.log(output);
  return output;
}