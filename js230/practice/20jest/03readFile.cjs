const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function read(path) {
  try {
    const filePath = resolve(path);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return contents;
  } catch (err) {
    console.error(err.message);
  }
}

let data = read('./02page.html').then(console.log);

// console.log(data);