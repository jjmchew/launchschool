// https://launchschool.com/lessons/f1e59145/assignments/03ca7a6c

{
  // given
  // interface Product {
  //   id: number;
  //   name: string;
  //   price: number;
  //   description: string;
  // }

  // const products: Product[] = [
  //   {
  //     id: 1,
  //     name: "Sample Product",
  //     price: 49.99,
  //     description: "A sample product for demonstration",
  //   },
  // ];


  // // implement
  // function updateProduct(
  //   productId: number,
  //   updatedValues: Partial<Product>
  // ): void {
  //   // Your implementation here:
  //   // Find product to update by productId
  //   // If found, apply partial update with using object spreading
  //   // Else log out "Product not found"
  // }
  
  // updateProduct(1, {
  //   name: "Updated Product Name",
  //   price: 99.99,
  // });
}

{
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Sample Product",
      price: 49.99,
      description: "A sample product for demonstration",
    },
  ];

  function updateProduct(
    productId: number,
    updatedValues: Partial<Product>
  ): void {
    let idx = products.findIndex(obj => obj.id === productId);
    let product = products[idx];

    if (product) products[idx] = { ...product, ...updatedValues };
    else console.log('Product not found');
  }
  
  updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
  });

  console.log(products);
}