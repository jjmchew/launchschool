let _ = function (arr){
  return {
    first() {
      return arr[0];
    },
    last() {
      return arr[arr.length - 1];
    },
    without(...toRemove) {
      let newArr = arr.slice();
      toRemove.forEach(value => {
        let index = newArr.indexOf(value);
        if (index !== -1) newArr.splice(index, 1);
      });
      return newArr;
    },
    lastIndexOf(value) {
      return arr.lastIndexOf(value);
    },
    sample(num = 1) {
      let getIndex = (arr) => {
        return Math.floor(Math.random() * (arr.length));
      };

      if (num > arr.length) {
        console.log(`Check arguments suppplied: cannot return ${num} distinct elements from an array of length ${arr.length}.`);
        return false;
      }

      let pool = arr.slice();
      let returnArr = [];
      [...Array(num).keys()].forEach(_ => {
        let index = getIndex(pool);
        returnArr.push(pool[index]);
        pool.splice(index, 1);
      });

      if (num === 1) return returnArr[0];
      else return returnArr;
    },
    findWhere() {

    },
  }
};
_.range = function(...args){
  if (args.length === 1) {
    return [...Array(args[0]).keys()];
  } else if (args.length === 2) {
    let newArr = [];
    for (let num = args[0]; num < args[1]; num += 1) {
      newArr.push(num);
    }
    return newArr;
  }
};