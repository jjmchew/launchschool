// exhaustiveness checking
{
  // given:
  type Elephant = {
    kind: "elephant";
    weight: number;
  };
  
  type Tiger = {
    kind: "tiger";
    speed: number;
  };
  
  type Peacock = {
    kind: "peacock";
    featherLength: number;
  };
  
  type Giraffe = {  // added as part 2
    kind: 'giraffe';
    height: number;
  };

  type Animal = Elephant | Tiger | Peacock | Giraffe; // Giraffe added as part 2


  // implement:
  function describeAnimal(a: Animal): string {
    switch(a.kind) {
      case 'elephant':
        return `An elephant weighs ${a.weight} kg`;
      case 'tiger':
        return `A tiger runs ${a.speed} km/hr`;
      case 'peacock':
        return `A peacock's feathers are ${a.featherLength} cm long`;
      default:
        const _check: never = a;
        throw new Error('animal type not included in switch case');
    }
  }
}