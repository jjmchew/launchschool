/* 
From Joel:

- define the shape which `makePair` is supposed to return
- note, you may not explicitly use `readonly` when defining the aforementioned shape
- then, implement `makePair` and provide any necessary type annotations
- after that, using the typing information present in your code, define an Pairs interface with one property `list` that is typed in such a way to serve as a container of Pair shaped-objects.  
- Note, you aren't allowed to explicitly reference `Pair` inside the Pairs interface!
- finally, implement `countPairs` to return the length of a `Pairs` container again using existing type information in your code.
- in total, you can only use two interface declarations in your answer
*/

{
  // given

  // function makePair(): Pair {}
  // function countPairs(): number {}
  
  // // we expect to pass makePair two different validly-typed arguments
  // const pair1 = makePair();
  // // if I were to try to modify any properties on the return value of `makePair`, I want to see a compilation phase error from TS

}

{
  // Version 1 - pair must be the same type;  pairs must define the type for ALL pairs
  type Pair<T> = [T, T];

  interface Pairs<T> {
    list: Array<[T, T]>;
  }

  function makePair<T>(input: T): Pair<T> {
    const pair: Pair<T> = [input, input];
    return pair;
  }

  function countPairs<T>({ list }: Pairs<T>): number {
    return list.length;
  }

  const pair1 = makePair("a");
  const pair2 = makePair(2);
  console.log(pair1);
  console.log(pair2);

  const pairs: Pairs<string> = {
    list: [pair1, ['b', 'b'], ['c', 'c']],
  }

  console.log(countPairs(pairs));
}

{
  // Version 2
  type Pair<T> = [T, T];

  function makePair<T>(input: T): Pair<T> {
    return [input, input];
  }

  function makePairs<T>(...inputs: Pair<T>[]) {
    return {
      list: [...inputs],
    };
  }

  const pair1 = makePair('a');
  console.log(pair1);

  const pair2 = makePair('b');
  const pair3 = makePair('c');
  const pair4 = makePair(1); // used to confirm pairs of different types cannot be added to the same 'list'

  const pairs = makePairs(pair1, pair2, pair3);
  console.log(pairs);

  function countPairs({ list }: ReturnType<typeof makePairs>): number {
    return list.length;
  }

  const len: number = countPairs(pairs);
  console.log(len);
}