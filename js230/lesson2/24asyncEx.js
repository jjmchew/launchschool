async function fetchData() {
  return "data from server";
}

fetchData().then((data) => console.log(data));
// outputs: data from server