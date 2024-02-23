// generic objects
{
  // #region Problem 1
  const p1 = function() {
    // given
    // type Pair<T, U> = {
    //   first: T;
    //   second: U;
    // };
    
    // const myPair: Pair<number, string> = {
    //   first: 42,
    //   second: "Answer",
    // };
    
    // const yourPair: Pair<number, string> = {
    //   first: "Another answer",
    //   second: 42,
    // };

    // generics are NOT implemented correctly
    // - yourPair reverses types of first and second
  }
  // #endregion

  // #region Problem 2
  const p2 = function() {
    // given
    // type KeyValuePairs<T, U> = {
    //   key: T;
    //   values: U[];
    // };
    
    // const myPairs: KeyValuePairs<string, number> = {
    //   key: "Numbers",
    //   values: [1, 2, 3, 4, 5],
    // };
    
    // const yourPairs: KeyValuePairs<number, string> = {
    //   key: 42,
    //   values: ["One", "Two", 3, "Four"],
    // };


    // error in yourPairs : not all elements of array are 'string'

  }
  // #endregion
}