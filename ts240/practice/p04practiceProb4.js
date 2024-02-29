"use strict";
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
    function makeFurnitureOrder(customer = {}, options = {}) {
        var _a, _b, _c, _d;
        let cover = (_a = options.cover) !== null && _a !== void 0 ? _a : 'microfiber';
        let sections = (_b = options.sections) !== null && _b !== void 0 ? _b : 3;
        let name = (_c = customer.name) !== null && _c !== void 0 ? _c : 'na';
        let cost = (_d = customer.cost) !== null && _d !== void 0 ? _d : sections * 100;
        return {
            name,
            cost,
            sofa: {
                cover,
                sections,
            }
        };
    }
    // test code - don't change:
    let item1 = makeFurnitureOrder({ name: 'john', cost: 200 }, {});
    console.log(item1); // { name: 'john', cost: 200, sofa: { cover: 'microfiber', sections: 3}};
    let item2 = makeFurnitureOrder({}, { cover: 'leather' });
    console.log(item2); // { name: 'na', cost: 300, sofa: { cover: 'leather', sections: 3}}
    let item3 = makeFurnitureOrder({}, { sections: 5 });
    console.log(item3); // { name: 'na', cost: 500, sofa: { cover: 'microfiber', sections: 5}}
}
