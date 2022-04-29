const Bag = require('./Bag');

describe('Bag',() => {
    const bag = new Bag(2234,20);

	test("throws error if bag doesn't have weight", () => {
		expect(() => new Bag()).toThrowError('bag must have a weight')
	});

    test('Bag ID',() => {
        expect(bag.id).toBe(2234);
    });

    test('Bag Weight',() => {
        expect(bag.weight).toBe(20);
    });
});