const ChargeStation = require('../src/ChargeStation');
const Scooter = require('../src/Scooter');
const User = require('../src/User');

describe('ChargeStation', () => {
    const scooter = new Scooter(22,true);
    const scooter2 = new Scooter(10, true);
    const scooter3 = new Scooter(30, true);
    const dallas = new ChargeStation('Dallas',4); //location 0 = Dallas;
    const dallas2 = new ChargeStation('Dallas2', 4);
    const dallas3 = new ChargeStation('Dallas3', 1);

    const user = new User('Chris', 'Evans','Cap','captain.america@usa.com', new Date(1918,7,4));
    const user2 = new User('Ricky','Bobby', 'shakeAnBake','gofast@email.com',new Date(1970,2,4));
    const user3 = new User('Froto', 'Baggins', 'hobbit', 'shire2@middleearth.com', new Date(1980,3,4));
    
    
    test('Charge Station Name', () => {
        expect(ChargeStation.location[0].locationName).toBe('Dallas'); 
        expect(ChargeStation.location[1].locationName).toBe('Dallas2');
        expect(ChargeStation.location[2].locationName).toBe('Dallas3');
    });

    test('Scooter added to List', () => {
        ChargeStation.location[0].addScooter(scooter);
        //dallas.addScooter(scooter);
        expect(ChargeStation.location[0].scooterList.length).toBe(1);
        expect(ChargeStation.location[0].scooterList[0] instanceof Scooter).toBeTruthy();
    });

    test('Charge station full', () => {
        expect(() => new ChargeStation('Dallas4',0).addScooter(scooter)).toThrowError('Scooter Station is full');
    });

    test('Rent Scooter', () => {
        expect(User.isOfAgeToRent(user.birthDate)).toBeGreaterThanOrEqual(18);
        ChargeStation.location[0].scooterList[0].setChargedStatus(false); //to test get a charged scooter.
        ChargeStation.location[0].addScooter(new Scooter(21,true));
        expect(user.scooter).toBeNull();
        expect(ChargeStation.location[0].scooterList.length).toBe(2);
        user.addScooter(ChargeStation.location[0].rentScooter(user));
        expect(user.scooter).not.toBeNull();
        expect(ChargeStation.location[0].scooterList.length).toBe(1);
        expect(user.scooter instanceof Scooter).toBeTruthy();
        expect(user.scooter.id).toBe(21);
    });

    test('Can only Rent one', () => {
        const user1 = new User('Chris', 'Evans','Cap','captain.america@usa.com', new Date(1918,7,4));
        expect(user1.scooter).toBeNull();
        user1.scooter = scooter;
        expect(user1.scooter instanceof Scooter).toBeTruthy();
        expect(ChargeStation.location[0].scooterList.length).toBeGreaterThanOrEqual(1);
        expect(ChargeStation.location[0].cantRent(user)).toBeFalsy();
    });

    test('Can Rent Scooter', () => {
        expect(ChargeStation.location[0].cantRent(user3)).toBeTruthy();
    });

    test('Return Scooter', () => {
        ChargeStation.location[0].returnScooter(user.scooter, user);
        expect(ChargeStation.location[0].scooterList.length).toBe(2);
    });

    test('Return Scooter to Dallas 2', () => {
        ChargeStation.location[1].addScooter(scooter2);
        expect(ChargeStation.location[1].locationName).toBe('Dallas2');
        user2.scooter = new Scooter(40,true);
        ChargeStation.location[1].returnScooter(user2.scooter,user);
        expect(ChargeStation.location[1].scooterList[1].id);
    });

    test('Payment on Return', () => {
		console.log = jest.fn();
		ChargeStation.location[0].chargePayment(scooter2.id, user);
		expect(console.log).toHaveBeenCalledWith('Chris Evans $20 Charged for Scooter rental ID: 10');
    });

    test('User Scooter set to null', () => {
        expect(user.scooter).toBeNull();
    });

    test("charge", async () => {
        await ChargeStation.location[0].scooterList[1].charge(); // we need to wait for the charge!
        //console.log("Test complete");
        expect(ChargeStation.location[0].scooterList[1].fullCharge).toBeTruthy();
    });

    test("Scooter can be added to maintenance", async () => {
        const testScooter = new Scooter(55,true);
        ChargeStation.location[0].addScooter(testScooter);
        ChargeStation.location[0].needMaintenance(testScooter);
        console.log("Scooter:"+ChargeStation.location[0].maintenance[0]);
        expect(ChargeStation.location[0].maintenance[0].id).toBe(55);
    });
});