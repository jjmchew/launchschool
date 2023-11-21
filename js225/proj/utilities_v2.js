let _ = function (arg1){
  class Utility {
    first() {
      return arg1[0];
    }
    last() {
      return arg1[arg1.length - 1];
    }
    without(...toRemove) {
      let newArr = arg1.slice();
      toRemove.forEach(value => {
        let index = newArr.indexOf(value);
        if (index !== -1) newArr.splice(index, 1);
      });
      return newArr;
    }
    lastIndexOf(value) {
      return arg1.lastIndexOf(value);
    }
    sample(num = 1) {
      let getIndex = (array) => {
        return Math.floor(Math.random() * (array.length));
      };
  
      if (num > arg1.length) {
        console.log(`Check arguments suppplied: cannot return ${num} distinct elements from an array of length ${arg1.length}.`);
        return false;
      }
  
      let pool = arg1.slice();
      let returnArr = [];
      [...Array(num).keys()].forEach(_ => {
        let index = getIndex(pool);
        returnArr.push(pool[index]);
        pool.splice(index, 1);
      });
  
      if (num === 1) return returnArr[0];
      else return returnArr;
    }
    findWhere(givenObj) {
      let returnObj = arg1.find(obj => {
        if (this.#hasAllProps(obj, givenObj)) return true;
        else return false;
      });
      return returnObj;
    }
    where(givenObj) {
      let returnArr = arg1.filter(obj => {
        if (this.#hasAllProps(obj, givenObj)) return true;
        else return false;
      });
      return returnArr;
    }
    pluck(givenValue) {
      let returnArr = arg1.map(element => element[givenValue])
                         .filter(element => element !== undefined);
      return(returnArr);
    }
    keys() {
      // could update to not use Object.keys
      return Object.keys(arg1);
    }
    values() {
      return Object.values(arg1);
    }
    pick(...givenKeys) {
      let returnObj = {};
      givenKeys.forEach(key => {
        if(Object.keys(arg1).includes(key)) returnObj[key] = arg1[key];
      });
      return returnObj;
    }
    omit(...givenKeys) {
      let returnObj = Object.assign({}, arg1);
      givenKeys.forEach(key => {
        delete returnObj[key];
      });
      return returnObj;
    }
    has(...givenKeys) {
      for (let i = 0; i < givenKeys.length; i += 1) {
        if (!Object.keys(arg1).includes(givenKeys[i])) return false;
      }
      return true;
    }

    #hasAllProps(obj, givenObj) {
      let givenKeys = Object.keys(givenObj);
      for (let i = 0; i < givenKeys.length; i += 1) {
        if (givenObj[givenKeys[i]] !== obj[givenKeys[i]]) return false;
      };
      return true;
    }
  }
  return new Utility();
};
_.range = function(...args) {
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
_.extend = function(old_obj, ...new_objs) {
  new_objs.forEach(newObj => Object.assign(old_obj, newObj));
  return old_obj;
}