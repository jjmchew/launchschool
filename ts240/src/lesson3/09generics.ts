// generic functions
{
  function pair<T>(arg1: T, arg2: T): T[] {
    return [arg1, arg2];
  }

  // test code:
  const pairOfNumbers = pair(1, 2); // returns [1, 2]
  const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
}