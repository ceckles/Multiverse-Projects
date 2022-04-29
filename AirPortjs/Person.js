class Person {
    constructor(firstName, lastName){
        this.name = {firstName, lastName};
    }

    getFullName(){
        return this.name.firstName + " " + this.name.lastName;
    }
}
module.exports = Person;