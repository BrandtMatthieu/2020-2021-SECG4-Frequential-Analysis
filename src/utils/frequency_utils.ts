import { ALPHABET_LENGHT, LOWERCASE_START, extractLetterString, checkStringIsNotEmpty } from "./string_utils.ts";
import { FixedLengthArray, getAvgArrayDifference } from "./array_utils.ts";

export type FrequencyTable = FixedLengthArray<number, 26>;

/**
 * Returns the average difference between two frequencies arrays.
 * @param a a frequency array.
 * @param b another frequency array.
 * @returns the average difference of frequencies.
 */
export function getAvgFrequencyDifference(a: FrequencyTable, b: FrequencyTable): number {
	return getAvgArrayDifference(a, b);
}

/**
 * Returns an array with the count of evey letter in a string.
 * @param str the string to analyze.
 * @returns the array with the amount of every letter.
 */
export function getLetterDistribution(str: string): FrequencyTable {
	str = extractLetterString(str);

	return str
		.split("")
		.reduce((p, letter) => {
			++p[letter.charCodeAt(0) - LOWERCASE_START];
			return p;
		}, new Array<number>(ALPHABET_LENGHT).fill(0) as FrequencyTable);
}

/**
 * Returns an array of number.
 * Every number is the frequency a letter appears in a text provided.
 * This first number corresponds to the letter A, and so on.
 * @param str the text to get the frequency of.
 * @returns an array with the frequencies of every letter, in alphabetical order.
 */
export function getLetterFrequency(str: string): FrequencyTable {
	str = extractLetterString(str);
	checkStringIsNotEmpty(str);

	const lt = getLetterDistribution(str);

	return lt.map(e => e / str.length) as FrequencyTable;
}
