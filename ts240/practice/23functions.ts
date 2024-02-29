{
  interface Fct1 {
    bark(msg: string): void;
  }

  interface Fct2 {
    bark: (msg: string) => void;
  }

  const fct1: Fct2 = {
    bark(msg: string): void {
      console.log('bark: ', msg);
    }
  };

  fct1.bark('woof');
}