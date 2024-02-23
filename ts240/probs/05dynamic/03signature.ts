// index signatures
{
  interface StringMap {
    [key: string]: string,
  }

  const dictionary: StringMap = {
    a: 'aardvark',
    b: 'beetle',
    c: 'cow',
  }

  const dictionary2: { [key: string]: string } = {
    a: 'aardvark',
    b: 'beetle',
    c: 'cow',
    // 1: 34,
  }

  const dictionary3: Record<string, string> = {
    b: 'beetle',
    c: 'cow',
    // 1: 34,
  }
}