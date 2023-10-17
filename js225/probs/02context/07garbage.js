function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();  
// more code


// No - the array assigned to `array` will need to be available for potential further calls to `pushIt`, the array is mutated, and thus needs to remain available