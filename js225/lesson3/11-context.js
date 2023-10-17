let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }
    bar = bar.bind(this);
    bar();
  },
};

obj.foo();        // => would be undefined undefined without binding