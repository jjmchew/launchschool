"use strict";
// A problem using partials and keyof for object properties
{
    const products = [
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
    // implement
    // function sortProducts(options: Partial<ProdOptions<Product>>): Product[] {
    // }
    // test code
    // let sorted: Product[] = sortProducts();
    // console.log('case 1    ', sorted); // [ {id: 1, ...}, {id, 2, ...}, {id, 3, ...} ]
    // sorted = sortProducts({price: true});
    // console.log('case 2    ', sorted); // [ {id: 1, ...}, {id, 3, ...}, {id, 2, ...} ]
    // sorted = sortProducts({sName: true});
    // console.log('case 3    ', sorted); // [ {id: 3, ...}, {id, 1, ...}, {id, 2, ...} ]
}
{
    const products = [
        {
            id: 1,
            sName: 'bball',
            lName: 'basketball',
            price: 30,
            tags: ['sports', 'ball'],
            inv: {
                md: 4,
            }
        },
        {
            id: 2,
            sName: 'jrsy',
            lName: 'flames jersey',
            price: 150,
            tags: ['sports', 'jersey', 'flames'],
            inv: {
                sm: 3,
                md: 3,
                lg: 2,
                xl: 1,
            }
        },
        {
            id: 3,
            sName: 'bat',
            lName: 'baseball bat',
            price: 80,
            tags: ['sports', 'baseball', 'bat'],
            inv: {
                md: 5,
                lg: 3,
            }
        },
    ];
    // implement
    function sortProducts(options = {}) {
        let sortFct = (options) => {
            const option = options[0];
            if (option) {
                return function (a, b) {
                    console.log(a[option], b[option]);
                    if (a[option] < b[option])
                        return -1;
                    else if (a[option] > b[option])
                        return 1;
                    else
                        return 0;
                };
            }
            return (_, __) => { return 0; };
        };
        if (Object.entries(options).length === 0)
            return products;
        const keys = Object.keys(options);
        return products.slice().sort(sortFct(keys));
    }
    // test code
    let sorted = sortProducts();
    console.log('case 1    ', sorted); // [ {id: 1, ...}, {id, 2, ...}, {id, 3, ...} ]
    sorted = sortProducts({ price: true });
    console.log('case 2    ', sorted); // [ {id: 1, ...}, {id, 3, ...}, {id, 2, ...} ]
    sorted = sortProducts({ sName: true });
    console.log('case 3    ', sorted); // [ {id: 3, ...}, {id, 1, ...}, {id, 2, ...} ]
}
