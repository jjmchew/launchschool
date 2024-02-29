// https://launchschool.com/lessons/f1e59145/assignments/bd54a6e5

{
  // add logic to better handle errors
  async function getData(url: string): Promise<void> {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
}

{
  async function getData(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        throw e;
      } else console.log('An unknown error occurred: ', e);
    }
  }
}