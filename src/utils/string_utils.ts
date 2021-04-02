import { fixKey } from "./key_utils.ts";
import { checkIsActualPositiveNumber } from "./number_utils.ts";

export const ALPHABET_LENGHT = 26;

export const UPPERCASE_START = 65;
export const UPPERCASE_END = 90;
export const LOWERCASE_START = 97;
export const LOWERCASE_END = 122;

/**
 * Returns the index of a letter in the alphabet.
 * @param str the letter to get the index from.
 * @returns the index of the letter in the alphabet.
 */
export function letterToAlphabetIndex(str: string): number {
	checkCharIsLetter(str);
	str = str.toLowerCase();

	return str.charCodeAt(0) - LOWERCASE_START;
}

/**
 * Returns the letter of the alphabet at the provided index.
 * @param index the index of the letter wanted.
 * @param upperCase if the letter should be uppercase.
 * @returns the letter at the index in the alphabet.
 */
export function alphabetIndexToLetter(index: number, upperCase = false): string {
	index = fixKey(index, ALPHABET_LENGHT);

	return String.fromCharCode(index + LOWERCASE_START - (upperCase ? (LOWERCASE_START - UPPERCASE_START) : 0));
}

/**
 * Checks if the provided letter is uppercase or not.
 * @param str the letter to check.
 * @returns true if the letter is uppercase.
 */
export function isUpperCase(str: string): boolean {
	checkIsChar(str);

	return str === str.toUpperCase();
}

/**
 * Returns the character at a provided index and loops over.
 * @param str the string to take the character from.
 * @param index the index to take the character at.
 * @returns the character at the index.
 */
export function getCharAt(str: string, index: number): string {
	checkStringIsNotEmpty(str);
	index = fixKey(index, str.length);

	return str.charAt(index);
}

/**
 * Returns a string with only valid letters.
 * @param str the string to extract the letter from.
 * @returns the string made with all the letters in the source string.
 */
export function extractLetterString(str: string): string {
	return normalize(str)
		.split("")
		.filter(letter => isLetter(letter))
		.join("");
}

/**
 * Returns the amount of actual letters in the provided string.
 * @param str the string to count the letters from.
 * @returns the amount of actual letters in the string.
 */
export function getLetterCount(str: string): number {
	return extractLetterString(str).length;
}

/**
 * Returns wether or not a character is a (diacritic-free) letter, no matter its case.
 * @param str the character to analyze.
 * @returns true if the character is a letter.
 * @throws an error if more than 1 character is provided.
 */
export function isLetter(str: string): boolean {
	checkIsChar(str);
	const cc: number = str.charCodeAt(0);

	return (cc >= UPPERCASE_START && cc <= UPPERCASE_END)
		|| (cc >= LOWERCASE_START && cc <= LOWERCASE_END);
}

/**
 * Removes all diacritics from a string, returning a clean ASCII string.
 * @param str the text to clean.
 * @returns the cleaned text, with all diacritics removed.
 * @todo doesn't support "µ" or "´".
 */
export function normalize(str: string): string {
	const combinedCharacters = /[\u0300-\u036f]/g;

	return str
		.normalize("NFKD")
		.replaceAll(combinedCharacters, "");
}

/**
 * Checks the provided string isn't empty.
 * @throws an error if the provided string is empty.
 */
export function checkStringIsNotEmpty(str: string): void {
	if(str.length === 0) {
		throw new Error("Only accepting non-empty strings");
	}
}

/**
 * Checks the provided string is a char (one letter string).
 * @throws an error if the provided string isn't a char.
 */
export function checkIsChar(str: string): void {
	if(str.length !== 1) {
		throw new Error("Only accepting one-letter strings (aka. chars)");
	}
}

/**
 * Checks the provided char is a letter.
 * @throws an error if the provided char isn't a letter.
 */
export function checkCharIsLetter(str: string): void {
	checkIsChar(str);
	if(!isLetter(str)) {
		throw new Error("Only accepting valid letters");
	}
}

/**
 * Checks the provided string is entierly made of letters.
 * @throws an error if the provided string isn't entierly made of letters.
 */
export function checkStringIsLetter(str: string): void {
	checkStringIsNotEmpty(str);
	if(str.split("").some(letter => !isLetter(letter))) {
		throw new Error("Only accepting valid letters");
	}
}

/**
 * Extracts a string into multiple alternating substrings.
 * @param str the string to extract the substrings from.
 * @param i the number of substrings to extract.
 * @returns an array with all the alternating substrings.
 */
export function splitStringAlternate(str: string, i: number): string[] {
	checkIsActualPositiveNumber(i);
	return str
		.split("")
		.reduce((p, c, index) => {
			p[index % i] += c;
			return p;
		}, new Array(i).fill(""));
}
