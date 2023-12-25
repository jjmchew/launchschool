/*
classifications.children:
0 Classifications
1 Vertebrate
2 Warm-blooded
3 Cold-blooded
4 Mammal
5 Bird

animals.children:
0 Animals
1 Bear
2 Turtle
3 Whale
4 Salmon
5 Ostrich
*/
const CLASS_DATA = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
};

const ANIMAL_DATA = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
};

let filtered = false;

function removeAnimals(classification, element) {
  filtered = true;
  let nextElement = element.nextElementSibling;
  if (!(CLASS_DATA[classification].includes(element.value))) {
    animals.removeChild(element);
  }

  if(nextElement) {
    removeAnimals(classification, nextElement);
  }
}

function removeClass(animal, element) {
  filtered = true;
  let nextElement = element.nextElementSibling;
  if (!(ANIMAL_DATA[animal].includes(element.value))) {
    classifications.removeChild(element);
  }
  
  if(nextElement) {
    removeClass(animal, nextElement);
  }
}

console.log('test');

let classifications = document.querySelector('#animal-classifications');
let animals = document.querySelector('#animals');

classifications.addEventListener('change', e => {
  if (!filtered) removeAnimals(e.target.value, animals.children[0]);
  else location.reload();
});
animals.addEventListener('change', e => {
  if (!filtered) removeClass(e.target.value, classifications.children[0]);
  else location.reload();
});

