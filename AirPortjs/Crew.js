const Person = require('./Person.js');
class Crew extends Person {
    constructor(firstName, lastName, cprCert){
        super(firstName, lastName);
        this.cprCert = cprCert;
    }
}
module.exports = Crew;