// 

{
  // given:
  // type Pair<T> = [T, T];
  // const pair1: string[] = ['a', 'a'];

  // implement:
  // function assignPairs(array: string[]): Pair<string> {
  //   // implementation here
  // }

  // so that this code works:
  // const strPair1: Pair<string> = assignPairs(pair1);
}


{
    // given:
    type Pair<T> = [T, T];
    const pair1: string[] = ['a', 'a'];
  
    // implement:
    function assignPairs(array: string[]): Pair<string> {
      const el = array[0];
      if (array.length < 1 || !el) throw new Error('Bad input');

      const pair: Pair<string> = [el, el];
      return pair;
    }
  
    // so that this code works:
    const strPair1: Pair<string> = assignPairs(pair1);
    console.log(strPair1);
}