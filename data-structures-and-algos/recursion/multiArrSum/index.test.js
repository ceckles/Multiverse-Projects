let multiDimSum = require('./index');

describe("Multi-dimensional Array Sum algorithm", () => {

	let arr1 = [-9, 2, 3, -5, 20];
	let arr2 = [1,2,3,4,5,6,7,8,9,10];
	let arr3 = [1,2,[3,4]];
	let arr4 = [1,2,[3,4,[5]],6];

	it("sums up all items in an array of integers", () => {

		expect(multiDimSum(arr1)).toBe(11);
		expect(multiDimSum(arr2)).toBe(55);
		

	});

	it("returns 0 if array is empty", () => {
		expect(multiDimSum([])).toBe(0);
	});

	it("sums up all items in a nested array of integers", () => {
		expect(multiDimSum(arr3)).toBe(10);
	});

	it("sums up all items in a nested array of integers", () => {
		expect(multiDimSum(arr4)).toBe(21);
	});
})