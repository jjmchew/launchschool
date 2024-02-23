// rejected promises
{
  async function getData(url: string): Promise<void> {
    try {
      const response: Response = await fetch(url);
      const data: string = await response.json();
      console.log(data);
    } catch (e: unknown) {
      if (e instanceof Error) console.log('error: ', e.message);
      else if (typeof e === 'string') console.log('string: ', e);
      else throw e;
    }
  }

}