let _ = (function makeUtil() {

  let util = function(mainArg) {
    class Utility {
      first() {
        return mainArg[0];
      }
      last() {
        return mainArg[mainArg.length - 1];
      }
      without(...toRemove) {
        let newArr = mainArg.slice();
        toRemove.forEach(value => {
          let index = newArr.indexOf(value);
          if (index !== -1) newArr.splice(index, 1);
        });
        return newArr;
      }
      lastIndexOf(value) {
        return mainArg.lastIndexOf(value);
      }
      sample(num = 1) {
        let getIndex = (array) => {
          return Math.floor(Math.random() * (array.length));
        };
    
        if (num > mainArg.length) {
          console.log(`Check arguments suppplied: cannot return ${num} distinct elements from an array of length ${mainArg.length}.`);
          return false;
        }
    
        let pool = mainArg.slice();
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
        let returnObj = mainArg.find(obj => {
          if (this.#hasAllProps(obj, givenObj)) return true;
          else return false;
        });
        return returnObj;
      }
      where(givenObj) {
        let returnArr = mainArg.filter(obj => {
          if (this.#hasAllProps(obj, givenObj)) return true;
          else return false;
        });
        return returnArr;
      }
      pluck(givenValue) {
        let returnArr = mainArg.map(element => element[givenValue])
                          .filter(element => element !== undefined);
        return(returnArr);
      }
      keys() {
        // could update to not use Object.keys
        return Object.keys(mainArg);
      }
      values() {
        return Object.values(mainArg);
      }
      pick(...givenKeys) {
        let returnObj = {};
        givenKeys.forEach(key => {
          if(Object.keys(mainArg).includes(key)) returnObj[key] = mainArg[key];
        });
        return returnObj;
      }
      omit(...givenKeys) {
        let returnObj = Object.assign({}, mainArg);
        givenKeys.forEach(key => {
          delete returnObj[key];
        });
        return returnObj;
      }
      has(...givenKeys) {
        for (let i = 0; i < givenKeys.length; i += 1) {
          if (!Object.keys(mainArg).includes(givenKeys[i])) return false;
        }
        return true;
      }
      isElement() {
        return mainArg instanceof Element;
      }
      isArray() {
        return mainArg instanceof Array;
      }
      isObject() {
        return mainArg instanceof Object;
      }
      isFunction() {
        return mainArg instanceof Function;
      }
      isString() {
        return typeof mainArg === 'string' || mainArg instanceof String;
      }
      isNumber() {
        return typeof mainArg === 'number' || mainArg instanceof Number;
      }
      isBoolean() {
        return typeof mainArg === 'boolean' || mainArg instanceof Boolean;
      }

      #hasAllProps(obj, givenObj) {
        let givenKeys = Object.keys(givenObj);
        for (let i = 0; i < givenKeys.length; i += 1) {
          if (givenObj[givenKeys[i]] !== obj[givenKeys[i]]) return false;
        };
        return true;
      }
    }

    return new Utility;
  };

  util.range = function(...args) {
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
  util.extend = function(old_obj, ...new_objs) {
    new_objs.forEach(newObj => Object.assign(old_obj, newObj));
    return old_obj;
  };

  (['isElement', 'isArray', 'isObject', 'isFunction', 'isString', 'isNumber', 'isBoolean']).forEach(method => {
    util[method] = function(ob) {
      return _(ob)[method]();
    };
  });
  // util.isElement = function(ob) {
  //   return _(ob).isElement();
  // };
  // util.isArray = function(ob) {
  //   return _(ob).isArray();
  // };
  // util.isObject = function(ob) {
  //   return _(ob).isObject();
  // };
  // util.isFunction = function(ob) {
  //   return _(ob).isFunction();
  // };
  // util.isString = function(ob) {
  //   return _(ob).isString();
  // };
  // util.isNumber = function(ob) {
  //   return _(ob).isNumber();
  // };
  // util.isBoolean = function(ob) {
  //   return _(ob).isBoolean();
  // };

  return util;
})();

