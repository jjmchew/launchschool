// promises: async/await
{
  // given
  // function getData(url) {
  //   return fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }


  // convert to TS and async/await
  async function getData(url: string): Promise<void> {
    const response: Response = await fetch(url);
    const data: string = await response.json();
    console.log(data);
  }
}