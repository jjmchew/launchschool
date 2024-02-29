// Practice Problem 4

{
  // implement `makeFurniture` (modify function signature as appropriate) so that all test code returns the appropriate values

  // type Customer = {
  //   name: string,
  //   cost?: number,
  // };

  // type Sofa = {
  //     cover: 'leather' | 'microfiber',
  //     sections: number,
  // };

  // type FurnitureOrder = Customer & {
  //   sofa: Sofa,
  // }

  // function makeFurnitureOrder(customer, options): FurnitureOrder {
  //  // update signature and implement here
  // }


  // test code - don't change:
  // let item1: FurnitureOrder = makeFurnitureOrder({ name: 'john', cost: 200 }, {});
  // console.log(item1); // { name: 'john', cost: 200, sofa: { cover: 'microfiber', sections: 3}};
  
  // let item2: FurnitureOrder = makeFurnitureOrder({}, {cover: 'leather'});
  // console.log(item2); // { name: 'na', cost: 300, sofa: { cover: 'leather', sections: 3}}

  // let item3: FurnitureOrder = makeFurnitureOrder({}, {sections: 5});
  // console.log(item3); // { name: 'na', cost: 500, sofa: { cover: 'microfiber', sections: 5}}
}

{
  // my answer
  type Customer = {
    name: string,
    cost?: number,
  };

  type Sofa = {
      cover: 'leather' | 'microfiber',
      sections: number,
  };

  type FurnitureOrder = Customer & {
    sofa: Sofa,
  }

  function makeFurnitureOrder(
    customer: Partial<Customer> = {},
    options: Partial<Sofa> = {}
  ): FurnitureOrder {
    let cover = options.cover ?? 'microfiber';
    let sections = options.sections ?? 3;
    let name = customer.name ?? 'na';
    let cost = customer.cost ?? sections * 100;
    return {
      name,
      cost,
      sofa: {
        cover,
        sections,
      }
    }
  }


  // test code - don't change:
  let item1: FurnitureOrder = makeFurnitureOrder({ name: 'john', cost: 200 }, {});
  console.log(item1); // { name: 'john', cost: 200, sofa: { cover: 'microfiber', sections: 3}};
  
  let item2: FurnitureOrder = makeFurnitureOrder({}, {cover: 'leather'});
  console.log(item2); // { name: 'na', cost: 300, sofa: { cover: 'leather', sections: 3}}

  let item3: FurnitureOrder = makeFurnitureOrder({}, {sections: 5});
  console.log(item3); // { name: 'na', cost: 500, sofa: { cover: 'microfiber', sections: 5}}
}