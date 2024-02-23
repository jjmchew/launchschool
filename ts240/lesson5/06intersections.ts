// type intersections
{
  const p1 = function() {

    // given:

    type Product = {
      name: string;
      price: number;
    };
    
    type Shipping = {
      weight: number;
      shippingCost: number;
    };

    // implement:

    type ShippableProduct = Product & Shipping;

    const item: ShippableProduct = {
      name: 'table',
      price: 100,
      weight: 10,
      shippingCost: 200,
    };
  }

  const p2 = function() {
    interface Product {
      name: string,
      price: number,
    }

    interface Shipping {
      weight: number,
      shippingCost: number,
    }

    interface ShippableProduct extends Product, Shipping {};

    const item: ShippableProduct = {
      name: 'table',
      price: 100,
      weight: 10,
      shippingCost: 200,
    };

    // Note:  Types can also be extended - don't need to redefine Product and Shipping as interfaces
    //        - can just directly extend the type alias into a new interface
  }
}