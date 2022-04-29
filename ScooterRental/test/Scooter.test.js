const Scooter = require('../src/Scooter');

describe('Scooter', () => {
    const scooter = new Scooter(22,true);

    test("charge", async () => {
        await scooter.charge(); // we need to wait for the charge!
        //console.log("Test complete");
    });

    test('Scooter Has ID', async () => {
        expect(scooter.id).toBe(22);
    });

    test('Add to current miles', () => {
        scooter.setCurrentMiles(5);
        expect(scooter.currentMiles).toEqual(5);
    });

    test('Max Miles', () => {
        scooter.currentMiles = 32;
        scooter.setCurrentMiles(33);
        expect(scooter.currentMiles).toEqual(32);
    });

    test('Test change charge status', () => {
        scooter.setChargedStatus(false);
        expect(scooter.fullCharge).toBeFalsy();
    });

    test('Wrong status value for Charge Status', () => {
        expect(() => scooter.setChargedStatus('true')).toThrowError('Charge Status needs to be T/F');
    });
});