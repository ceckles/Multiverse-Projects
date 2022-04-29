let {isPalendrome, isPermutationPalendrome} = require('./index')

const str1 = 'racecar';
const str2 = 'BBQ Sauce';
const str3 = 'rAcecaR';
const str4 = 'rrcceea';
const str5 = 'racecarQQ'

describe('isPalendrome function', () => {

	it('returns a boolean for if a string is a palendrome (spelled same forward backwards)', () => {
		expect(isPalendrome(str1)).toBe(true);
		expect(isPalendrome(str2)).toBe(false);
	});

	it('is case sensitive', () => {
		expect(isPalendrome(str3)).toBe(false);
	});
});

describe('isPermutationPalendrome function', () => {
	/*
		BONUS!!

		Can you create a function to test if any *permutation* of a string is a palendrome?
		Permutation: any reordering of the characters in a string!

		ex:

		racecar => true
		bba => true (can be rearranged to bab)
		bac => false

		Hint: 
		What are the letter counts in some of the examples above? 
		What does that tell you?
	*/

	it('returns boolean if any permutation of a string is a palendrome!!', () => {
		expect(isPermutationPalendrome(str1)).toBe(true);
		expect(isPermutationPalendrome(str2)).toBe(false);
		expect(isPermutationPalendrome(str4)).toBe(true);
		expect(isPermutationPalendrome(str5)).toBe(true);
	});

});