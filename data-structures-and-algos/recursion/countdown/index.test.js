let countdown = require('./index');

describe("countdown algorithm", () => {


	it("returns a string, counting down form a number n to 'Liftoff!' (0)", () => {

		expect(countdown(9)).toBe("9, 8, 7, 6, 5, 4, 3, 2, 1, Liftoff!");
		expect(countdown(10)).toBe("10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Liftoff!");
		expect(countdown(1)).toBe("1, Liftoff!");

	});

	it('returns "Liftoff!" when input is 0', () => {
		expect(countdown(0)).toBe("Liftoff!");
	});

	it('returns "Liftoff!" when input is negative', () => {
		expect(countdown(-100)).toBe("Liftoff!");
	});
})