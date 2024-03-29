// partial
{
  // given
  interface Product {
    [key: string]: number | string,
    id: number;
    name: string;
    price: number;
    description: string;
  }

  type Keys = keyof Product;

  const products: Product[] = [
    {
      id: 1,
      name: "Sample Product",
      price: 49.99,
      description: "A sample product for demonstration",
    },
  ];

  // implement:

  // #region my solution
  function updateProduct(
    productId: number,
    updatedValues: Partial<Product>
  ): void {
    let getIdx = (id: number) : number => {
      return products.findIndex(obj => obj.id === id);
    };
    const productIndex: number = getIdx(productId);
    console.log(productIndex);
    if (productIndex !== -1) {
      // for (const prop in updatedValues) {
      //   if (updatedValues[prop] !== undefined) products[productIndex][prop] = updatedValues[prop];
      // }

      // const keys: Keys[] = Object.keys(updatedValues) as Keys[];
      // keys.forEach(key => {
      //   if (products[idx] && updatedValues[key]) products[idx][key] = updatedValues[key];
      // });
    } else console.log('Product not found');
  }
  // #endregion
  
  // #region LS solution
  // function updateProduct(
  //   productId: number,
  //   updatedValues: Partial<Product>
  // ): void {
  //   const productIndex = products.findIndex(
  //     (product) => product.id === productId
  //   );
  
  //   if (productIndex !== -1) {
  //     products[productIndex] = {
  //       ...products[productIndex],
  //       ...updatedValues,
  //     };
  //   } else {
  //     console.log("Product not found");
  //   }
  // }
  // #endregion

  updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
  });

  console.log(products);

}