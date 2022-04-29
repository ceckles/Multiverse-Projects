const Person = require('./Person');

class Pilot extends Person {
    constructor(firstName, lastName, flightHours){
        super(firstName, lastName);
        this.flightHours = flightHours;
    }

    getFlightHours(){
        return this.flightHours;
    }
    addFlightHours(newFlightHours){
        this.flightHours += newFlightHours;
    }
    removeFlightHours(newFlightHours){
        this.flightHours -= newFlightHours;
    }
}
module.exports = Pilot;