/**
 * Person
 */
var Person = (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        return "jjj";
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
