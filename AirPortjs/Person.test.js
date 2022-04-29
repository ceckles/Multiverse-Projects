const Person = require('./Person');

describe('Person', () => {
    const person = new Person("John", "Smith");

    test('Person First Name', () => {
        expect(person.name.firstName).toBe('John');
    });
    test('Person Last Name', () => {
        expect(person.name.lastName).toBe('Smith');
    });
    test('Person Full Name', () => {
        expect(person.getFullName()).toBe('John Smith');
    });
});