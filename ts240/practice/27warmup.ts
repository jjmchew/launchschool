{
  function toUpperCaseArray(array: string[]): string[] {
    return array.map(el => el.toUpperCase());
  }

  console.log(toUpperCaseArray(['hello', 'world']));
}