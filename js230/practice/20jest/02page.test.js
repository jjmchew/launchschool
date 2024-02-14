// const { readFile } = require('node:fs/promises');
// const { resolve } = require('node:path');
// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

// async function read(path) {
//   try {
//     const filePath = resolve(path);
//     const contents = await readFile(filePath, { encoding: 'utf8' });
//     return contents;
//   } catch (err) {
//     console.error(err.message);
//   }
// }

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:8000/02page.html');
});

afterAll(async () => {
  let html = await page.$('html');
  console.log(html.innerHTML);
  await browser.close();
});

// beforeEach(async ()=> {
//   return read('./02page.html').then(data => document.documentElement.innerHTML = data);
// });

test('adds 1 + 2 to equal 3', () => {
  expect((1 + 2)).toBe(3);
});

// test('interact with DOM', () => {
//   let title = document.querySelector('h1');
//   expect(title.textContent).toMatch(/A title/);
// });

test('use puppeteer to test localhost and find a button', async () => {
  const input = await page.$('form input[type="text"]');
  input.value = 'hello';
  console.log(input.value);
  expect(input).not.toBeNull();
  expect(input.value).toMatch(/hello/);
});

test('use puppeteer, check submit button', async () => {
  const input = await page.$('form input[type="submit"]');
  await input.click();
  const p = await page.$('div.result p');
  console.log('p', p);
  await page.screenshot({ path: 'button.png' }, 1000);
  // expect(input.value).toMatch(/submit/);
  expect(p).not.toBeNull();
})