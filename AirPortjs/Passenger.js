const Person = require('./Person');

class Passenger extends Person {
    constructor(firstName, lastName, ticketNumber){
        super(firstName, lastName);
        this.ticketNumber = ticketNumber;
        this.maxBaggageWeight = 200;
        this.baggage = [];
    }
    addBaggage(bag){
        this.baggage.push(bag);
    }
    callAttendant() {
		console.log("Excuse me!");
	}
}
module.exports = Passenger;