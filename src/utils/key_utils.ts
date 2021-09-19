import { FrequencyTable, getAvgFrequencyDifference } from "./frequency_utils.ts";
import { shiftArrayRight } from "./array_utils.ts";
import { ALPHABET_LENGHT, isLetter, letterToAlphabetIndex, extractLetterString, alphabetIndexToLetter } from "./string_utils.ts";

/**
 * Checks if a string key is ok to be handeled.
 * @param str the key as a string.
 * @return the key if ok.
 * @throws an error if the key contains illegal characters.
 */
export function checkKey(str: string): string {
	const ok = str
		.split("")
		.every(c => isLetter(c));

	if(!ok) {
		throw new Error("Key contains illegal characters");
	}

	return str;
}

/**
 * Fixes a key, to be in a valid range.
 * @param key the key to fix.
 * @param maxKey the maximum value accepted.
 * @returns the key fixed.
 */
export function fixKey(key: number, maxKey: number = ALPHABET_LENGHT): number {
	return (((key % maxKey) + maxKey) % maxKey);
}

/**
 * Fixes every element in an array of keys.
 * @param keyArray the array with all the keys to fix.
 * @param maxKey the maximum value accepted.
 * @returns the array with all the keys fixed.
 */
export function fixArrayKey(keyArray: number[], maxKey: number = ALPHABET_LENGHT): number[] {
	return keyArray.map(key => fixKey(key));
}

/**
 * Inverts a key based on the maximum value provided, so that the encode key becomes the decode key.
 * @param key the key to invert.
 * @param maxKey the max key to invert the key based on.
 * @returns the inverted key.
 */
export function invertKey(key: number, maxKey: number = ALPHABET_LENGHT): number {
	return maxKey - fixKey(key);
}

/**
 * Inverts all the keys in an array.
 * @param keyArray the array containing all the keys to invert.
 * @param maxKey the max key to invert the key based on.
 * @returns the array with the inverted keys.
 */
export function invertArrayKey(keyArray: number[], maxKey: number = ALPHABET_LENGHT): number[] {
	return keyArray.map(k => invertKey(k, maxKey));
}

/**
 * Finds the key based on two frequency tables, so that both frequcny tables line up.
 * @param a the first frequency table.
 * @param b the sencond frequency table.
 * @returns the key found.
 */
export function findMinKey(a: FrequencyTable, b: FrequencyTable): number {
	const differences = new Array(ALPHABET_LENGHT)
		.fill(0)
		.map((e, i) => getAvgFrequencyDifference(a, shiftArrayRight(b, i) as FrequencyTable));

	return differences.indexOf(Math.min(...differences));
}

/**
 * Converts a string into a key (array of numbers).
 * @param str the text to use.
 * @returns the key extracted from the string.
 */
export function stringToKey(str: string): number[] {
	return extractLetterString(str)
		.split("")
		.map((c: string) => letterToAlphabetIndex(c));
}

/**
 * Converts a key into a string.
 * @param key the key to use.
 * @returns the string that was the key.
 */
export function keyToString(key: number[]) {
	return key
		.map(e => alphabetIndexToLetter(e, false))
		.join("");
}
