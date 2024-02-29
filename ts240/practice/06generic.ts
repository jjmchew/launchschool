{
  function identity<T>(arg: T): T {
    return arg;
  }
  
  let identityCopy1: <I>(inp: I) => I = identity;
  let identifyCopy2: { <T>(arg: T): T } = identity;
  
  interface GenericIdentityFn {
    <T>(arg: T): T,
  }
  let identityCopy3: GenericIdentityFn = identity;

  identityCopy3('hello');

  // Note different syntax creates a NON-GENERIC function, although the interface is generic
  interface GenericIdentityFn2<T> {
    (arg: T): T,
  }

  let identity2: GenericIdentityFn2<number> = identity;
  // identity2('hello'); // can no longer pass in a string
}