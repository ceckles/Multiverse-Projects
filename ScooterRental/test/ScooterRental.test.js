const ScooterRental = require('../src/ScooterRental');
describe('Scooter Rental', () => {
    const scooterRental = new ScooterRental('dallas');

    test('Rental location', () => {
        expect(scooterRental.location).toBe('dallas');
    });
});