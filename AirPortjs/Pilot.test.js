const Pilot = require('./Pilot');
const Person = require('./Person');

describe('Pilot', () => {
    const pilot = new Pilot("John", "Smith", 2000);

    test('Pilot is Instance of Person', () => {
        expect(pilot instanceof Person).toBeTruthy();
    });
    test('Pilot First Name', () => {
        expect(pilot.name.firstName).toBe("John");
    });

    test('Pilot Last Name', () => {
        expect(pilot.name.lastName).toBe("Smith");
    });

    test('Pilot Name', () => {
        expect(pilot.getFullName()).toBe('John Smith');
    });

    test('Get Flight Hours', () => {
        expect(pilot.getFlightHours()).toBe(2000);
    });

    test('Add Pilot Hours', () => {
        pilot.addFlightHours(100);
        expect(pilot.getFlightHours()).toBe(2100);
    });

    test('Remove Pilot Hours', () => {
        pilot.removeFlightHours(200);
        expect(pilot.getFlightHours()).toBe(1900);
    });
});