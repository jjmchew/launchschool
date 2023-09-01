function twice(num) {
  let isDoubleNum = function isDoubleNum(num) {
    let str = String(num);
    if (str.length % 2 !== 0) return false;

    let str1 = str.substring(0, (str.length / 2) );
    let str2 = str.substring(str.length / 2);

    if (str1 === str2) return true;
    return false;
  };

  if (isDoubleNum(num)) console.log(num);
  else console.log(num * 2);
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
