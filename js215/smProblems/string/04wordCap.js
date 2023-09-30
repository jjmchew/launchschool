wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

function wordCap(str) {
  let matches = str.match(/\S+( +|$)/g)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  let output = matches.join('')
  console.log(output);
  return output;
}