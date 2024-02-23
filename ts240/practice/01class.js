"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person('james');
const person2 = new Person('jane', 23);
console.log('|', person1.age, '|');
console.log('|', person2.age, '|');
