var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person('james');
var person2 = new Person('jane', 23);
console.log('|', person1.age, '|');
console.log('|', person2.age, '|');
