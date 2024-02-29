// practice with Pick

{
  interface Product {
    id: number,
    sName: string,
    lName: string,
    price: number,
    tags: string[],
  }

  type ProdOptions<P extends Product> = {
    [key in keyof P]: boolean;
  };

  const products: Product[] = [
    {
      id: 1,
      sName: 'bball',
      lName: 'basketball',
      price: 30,
      tags: ['sports', 'ball'],
    },
    {
      id: 2,
      sName: 'jrsy',
      lName: 'flames jersey',
      price: 150,
      tags: ['sports', 'jersey', 'flames'],
    },
    {
      id: 3,
      sName: 'bat',
      lName: 'baseball bat',
      price: 80,
      tags: ['sports', 'baseball', 'bat'],
    },
  ];

  // // implement
  // function displayProduct(product: ProductListing): string {
  //   // implement
  // }

  // test code
  // products.forEach(product => console.log(displayProduct(product)));
}

{
  interface Product {
    id: number,
    sName: string,
    lName: string,
    price: number,
    tags: string[],
  }

  type ProdOptions<P extends Product> = {
    [key in keyof P]: boolean;
  };

  const products: Product[] = [
    {
      id: 1,
      sName: 'bball',
      lName: 'basketball',
      price: 30,
      tags: ['sports', 'ball'],
    },
    {
      id: 2,
      sName: 'jrsy',
      lName: 'flames jersey',
      price: 150,
      tags: ['sports', 'jersey', 'flames'],
    },
    {
      id: 3,
      sName: 'bat',
      lName: 'baseball bat',
      price: 80,
      tags: ['sports', 'baseball', 'bat'],
    },
  ];

  // type ProductListing = Pick<Product, 'lName' | 'price' | 'tags'>;
  type ProductListing = Omit<Product, 'id' | 'sName'>;

  // implement
  function displayProduct(product: ProductListing): string {
    let lName = product.lName ?? '';
    if (lName[0] && lName.length > 2) lName = lName[0].toUpperCase() + lName.slice(1);
    let col1 = `${lName} is $${product.price}!`.padEnd(25);
    return `${col1} Tags: ${product.tags.join(' | ')}`
  }

  products.forEach(product => console.log(displayProduct(product)));
}