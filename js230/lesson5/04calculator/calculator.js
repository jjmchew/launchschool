console.log('calculator');

document.addEventListener('DOMContentLoaded', () => {

  let firstNumEl = document.querySelector('#first-number');
  let secondNumEl = document.querySelector('#second-number');
  let operatorEl = document.querySelector('#operator');
  let resultEl = document.querySelector('#result');

  let formEl = document.querySelector('form');
  formEl.addEventListener('submit', e => {
    e.preventDefault();

    let num1 = Number(firstNumEl.value);
    let num2 = Number(secondNumEl.value);

    // #region LS solution
    const Calculate = {
      '+': (num1, num2) => num1 + num2,
      '-': (num1, num2) => num1 - num2,
      '*': (num1, num2) => num1 * num2,
      '/': (num1, num2) => num1 / num2,
    };
    let calc = Calculate[operatorEl.value];
    let result = calc(num1, num2);
    // #endregion

    // #region my solution
    // let result;
    // switch(operatorEl.value) {
    //   case '+':
    //     result = num1 + num2;
    //     break;
    //   case '-':
    //     result = num1 - num2;
    //     break;
    //   case '*':
    //     result = num1 * num2;
    //     break;
    //   case '/':
    //     result = num1 / num2;
    //     break;
    // }
    // #endregion

    resultEl.textContent = String(result);
  });
});