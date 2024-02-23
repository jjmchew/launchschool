function testFunction(param: string | undefined): void {
  param && console.log(param, 'Input is defined and not empty');
}

testFunction('');
testFunction(undefined);
testFunction('hello');