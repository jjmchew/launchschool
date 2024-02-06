// https://launchschool.com/lessons/519eda67/assignments/64fcc560
// working on breaking out of callback pyramid

// #region ver1
const ver1 = function () {
  
  function step1(){
    return '1';
  }

  function step2(){
    return step1() + '2';
  }

  function combine1and2(inputs) {
    console.log(inputs);
  }

  combine1and2(step2());
};
// ver1();
// #endregion


// #region ver2
const ver2 = function () {
  function step1() {
    return '1';
  }

  function step2(input) {
    return input + '2';
  }

  function step3(input) {
    console.log(input + '3');
  }
  
  step3(step2(step1()));
};
// ver2();
// #endregion


// #region ver3
const ver3 = function() {
  function step1(step2){
    step2('1', step3);
  }

  function step2(input, callback) {
    callback(input + '2');
  }

  function step3(input) {
    console.log(input + '3');
  }

  step1(step2);
}
// ver3();
// #endregion

