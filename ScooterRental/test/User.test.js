// Testing with jest
const User = require('../src/User');

describe('User', () =>{
    const user = new User('John','Smith','jsmith12','john@email.com',new Date(1982,11,4));

    test('User First Name', () =>{
        expect(user.firstName).toBe('John');
    });
    test('User Last Name', () =>{
        expect(user.lastName).toBe('Smith');
    });
    test('User full name', () =>{
        expect(user.getFullName()).toBe('John Smith');
    });
    test('User username', () =>{
        expect(user.username).toBe('jsmith12');
    });
    test('User Email', () =>{
        expect(user.email).toBe('john@email.com');
    });
    test('User DOB', () =>{
        const date = new Date(1982,11,4);
        expect(user.birthDate).toStrictEqual(date);
    });
    test('User set App Download status.', () =>{
        user.setAppDownloaded(true);
        expect(user.isAppDownloaded()).toBeTruthy();
    });
    test('User app Downloaded', () =>{
        expect(user.isAppDownloaded()).toBeTruthy();
    });
    test('User of Age', () =>{
        const age = User.isOfAgeToRent(user.birthDate);
        expect(age).toBe(39);
    });
    test('User Email Validation', () =>{
        const valEmail = User.isEmailValid('john@email.com');
        expect(valEmail).toBeTruthy();
    });

    test('Wrong status value for User App Download', () => {
        expect(() => user.setAppDownloaded('true')).toThrowError('Download Status needs to be T/F');
    });

    test('Is App Downloaded', () =>{
        user.setAppDownloaded(true);
        expect(user.isAppDownloaded()).toBeTruthy();
    });
});