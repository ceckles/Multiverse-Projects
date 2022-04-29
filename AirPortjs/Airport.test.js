const Airport = require('./Airport');
const Plane = require('./Plane');
const Person = require('./Person');
const Pilot = require('./Pilot');
const Crew = require('./Crew');
const Passenger = require('./Passenger');
const Bag = require('./Bag');



describe('Airport', () => {
    const dfwAirport = new Airport('DFW');
    const laxAirport = new Airport('LAX');
    //console.log(Airport.airports);
    const plane = new Plane(2231);
    const crew = new Crew("Jane", "Doe", true);
    const pilot = new Pilot('John', 'Smith', 2000);
    const passenger = new Passenger('Kyle', 'Reese', 1176);
    const bag = new Bag(1176, 20);


    passenger.addBaggage(bag);
    plane.addPassenger(passenger);
    plane.addFlightCrew(pilot);
    plane.addCabinCrew(crew);

    //dfwAirport.addPlane(plane);

    test('Airport has name', () => {
        //expect(dfwAirport.name).toBe('DFW');
        expect(Airport.airports[0].name).toBe('DFW');
    });

    test('Plane landed', () => {
        //expect(dfwAirport.planeList.length).toBe(1)
        dfwAirport.land(plane);
        expect(dfwAirport.planeList.length).toBe(1);
    });

    test('Plane Pilot Name`', () => {
        expect(dfwAirport.planeList[0].flightCrew[0].getFullName()).toBe('John Smith');
    });

    test('Plane Cabin Crew', () => {
        expect(dfwAirport.planeList[0].cabinCrew[0].getFullName()).toBe('Jane Doe');
    });

    test('Plane Passenger', () =>{
        expect(dfwAirport.planeList[0].passengers[0].getFullName()).toBe('Kyle Reese');
    });

    test('Plane Takeoff', () =>{
        dfwAirport.takeoff(plane);
        laxAirport.land(plane);
        expect(laxAirport.planeList.length).toBe(1);
        expect(dfwAirport.planeList.length).toBe(0);
    });

    //LAX
    test('LAX', () =>{
        expect(Airport.airports[1].name).toBe('LAX');
        //expect(laxAirport.name).toBe('LAX');
    });
    test('LAX Plane list', () =>{
        expect(laxAirport.planeList[0].flightCrew[0].getFullName()).toBe('John Smith');
    });
    test('Plane LAX Cabin Crew', () => {
        expect(laxAirport.planeList[0].cabinCrew[0].getFullName()).toBe('Jane Doe');
    });

    test('Plane LAX Passenger', () =>{
        expect(laxAirport.planeList[0].passengers[0].getFullName()).toBe('Kyle Reese');
    });

    test('Plane Add Baggage Weight', () =>{
        Airport.airports[1].planeList[0].addToWeight(Airport.airports[1].planeList[0].passengers[0].baggage[0].getWeight());
        expect(Airport.airports[1].planeList[0].getCurrentWeight()).toBe(20);
    });

    test('Plane Sub Baggage Weight', () =>{
        Airport.airports[1].planeList[0].subToWeight(Airport.airports[1].planeList[0].passengers[0].baggage[0].getWeight());
        expect(Airport.airports[1].planeList[0].getCurrentWeight()).toBe(0);
    });
});