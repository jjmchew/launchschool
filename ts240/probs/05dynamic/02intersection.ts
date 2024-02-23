// intersection
{
  interface Dog {
    bark: ()=>void,
  }

  interface Cat {
    meow: ()=>void,
  }

  type Pet = Dog & Cat;

  const pet1: Pet = {
    bark() {
      console.log('Woof');
    },
    meow() {
      console.log('Meow');
    }
  }
}