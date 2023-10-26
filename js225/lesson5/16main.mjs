import { foo } from './16foo.mjs';
import { bar, getCounter, items, counter } from './16bar.mjs';

foo();
console.log(items);
console.log(getCounter);
console.log(counter);

bar();
console.log(items);
console.log(getCounter);
console.log(counter);