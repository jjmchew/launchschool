// import test from 'node:test';
import Math from './02class2.js';

test('1 + 2 = 3', () => {
  expect(1+2).toBe(3);
});

test('testing App', () => {
  const math = new Math(1, 2);
  expect(math.add()).toBe(3);
});
