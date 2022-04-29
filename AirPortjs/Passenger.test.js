const Passenger = require('./Passenger');
const Person = require('./Person');
const Bag = require('./Bag');

describe('Passenger', () => {
    const passenger = new Passenger('Kyle', 'Reese', 1176);
    const bag = new Bag(1176, 20);

    test('Passenger Extends Person', () => {
        expect(passenger instanceof Person).toBeTruthy();
    });
    test('Passenger Name', () => {
        expect(passenger.getFullName()).toBe('Kyle Reese');
    });

    test('Add Baggage', () => {
        passenger.addBaggage(bag);
        expect(passenger.baggage.length).toBe(1);
    });

    test('Baggage Weight', () => {
        expect(passenger.baggage[0].weight).toBe(20);
    });
	test('Passengers can call attendant', () => {
		console.log = jest.fn()

		passenger.callAttendant()

		expect(console.log).toHaveBeenCalledWith("Excuse me!")
	})
});