{
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.makeSound = function () {
            return "Generic animal sound";
        };
        Dog.prototype.fetch = function () {
            return "".concat(this.name, " fetches a stick.");
        };
        return Dog;
    }());
    var myDog = new Dog('Rex');
    console.log(myDog.fetch());
}
