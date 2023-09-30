let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  let cleanName = function cleanName(name) {
    let newName = name.replaceAll(/[^a-zA-Z|\ ]/ig, '');
    let output = newName.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    return output;
  };

  let newData = [...data];
  newData = newData.map(band => {
    return {
      name: cleanName(band.name),
      country: 'Canada',
      active: band.active,
    };
  });
  console.log(newData);
  return newData;
}

processBands(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]