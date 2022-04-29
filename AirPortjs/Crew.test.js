const Crew = require('./Crew');
const Person = require('./Person');

describe('Crew', () => {
    const crew = new Crew('Jane', 'Doe', true);

    test('Crew extends Person', () => {
        expect(crew instanceof Person).toBeTruthy();
    });

    test('Crew Name', () => {
        expect(crew.getFullName()).toBe('Jane Doe');
    });

    test("Crew CPR", () => {
        expect(crew.cprCert).toBeTruthy();
    });
});