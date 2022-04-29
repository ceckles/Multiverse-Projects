const Plane = require('./Plane');
const Person = require('./Person');
const Pilot = require('./Pilot');
const Crew = require('./Crew');
const Passenger = require('./Passenger');
const Bag = require('./Bag');


describe('Plane', () => {
    const plane = new Plane(2231);
    const crew = new Crew("Jane", "Doe", true);
    const pilot = new Pilot('John', 'Smith', 2000);
    const passenger = new Passenger('Kyle', 'Reese', 1176);
    const bag = new Bag(1176, 20);

    test('Plane Number', () => {
        expect(plane.flightNumber).toBe(2231);
    });

    test('Add Pilot', () => {
        plane.addFlightCrew(pilot);
        expect(plane.flightCrew.length).toBe(1);
    });

    test('Plane Pilot Name', () => {
        expect(plane.flightCrew[0].getFullName()).toBe('John Smith');
    });

    test('Add Crew', () => {
        plane.addCabinCrew(crew);
        expect(plane.cabinCrew.length).toBe(1);
    });

    test('Flight Crew Name', () =>{
        expect(plane.cabinCrew[0].getFullName()).toBe('Jane Doe');
    });

    test('Passenger Name', () => {
        plane.addPassenger(passenger);
        expect(plane.passengers[0].getFullName()).toEqual('Kyle Reese');
    });

    test('Passenger Ticket', () => {
        expect(plane.passengers[0].ticketNumber).toBe(1176);
    });

    test('Add Passenger Bag', () => {
        plane.passengers[0].addBaggage(bag);
        expect(plane.passengers[0].baggage.length).toBe(1);
    });

    test('Passenger Bag ID', () =>{
        expect(plane.passengers[0].baggage[0].id).toBe(1176);
    });

    test('Passenger Add Bag Weight', () =>{
        expect(plane.passengers[0].baggage[0].weight).toBe(20);
    });
});