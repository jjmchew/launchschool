let _ = (function makeUtil() {

  let util = function(mainArg = 'default') {

    class Utility {
      isElement() {
        console.log('isElement', mainArg);
      }
    }
    
    return new Utility;
  };
  
  util.isElement = function() {
    return _().isElement();
  };
  util.range = function(start) {
    console.log('range:', start);
    return start;
  }
  return util;

})();




// 
console.log(_);
_().isElement();
_.isElement();
_.range(3);