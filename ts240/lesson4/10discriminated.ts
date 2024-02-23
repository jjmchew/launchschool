// discriminated unions
{
  type Animal =
    | {
      kind: 'dog';
      name: string;
      age: number;
    }
    | {
      kind: 'bird';
      name: string;
      wingspan: number;
    }

  function describeAnimal(animal: Animal): string {
   switch (animal.kind) {
    case 'dog':
      return `${animal.name} is a ${animal.age} year(s) old dog`;
    case 'bird':
      return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan`;
   }
 }
}