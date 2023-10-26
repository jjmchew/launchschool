import { bar } from './16bar.mjs';

let xyz = 1;

export function foo () {
  console.log(xyz);
  xyz += 1;
  bar();
}
