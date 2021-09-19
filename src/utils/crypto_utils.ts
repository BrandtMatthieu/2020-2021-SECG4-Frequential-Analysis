import { getLetterCount, checkStringIsNotEmpty, extractLetterString } from "./string_utils.ts";
import { getLetterDistribution, FrequencyTable, getLetterFrequency } from "./frequency_utils.ts";
import { getArrayDifference, getArrayQuotient, getArrayMultiplication } from "./array_utils.ts";
import { Caesar } from "../Caesar.ts";

export const CI_TRESHOLD = 0.5;

/**
 * Returns the Chi squared score of a string.
 * @param str the string to analyze.
 * @param frequencyTable the frequency table of the language the encoded string is in.
 * @param candidateKey a key to try.
 * @returns the Chi squared score of the string.
 */
export function getChiSquaredScore(str: string, frequencyTable: FrequencyTable, candidateKey: number): number {
	const letterCount = getLetterCount(str);
	const actual = getLetterDistribution(str);
	const expected = frequencyTable.map((v: number) => v * letterCount);
	const candidate = getLetterDistribution(Caesar.decode(str, candidateKey));
	const error = getArrayDifference(candidate, expected);
	const squaredError = getArrayMultiplication(error, error);
	const normalizedSquaredError = getArrayQuotient(squaredError, expected);
	const normalizedSquaredErrorSum = normalizedSquaredError.reduce((p: number, c: number) => p + c, 0);
	return normalizedSquaredErrorSum;
}

/**
 * Determines if the cipphered text is ciphered using a mono- (Caesar) or poly- (Vigenere) alphabetic cipher.
 * @param str the ciphered text
 * @returns the coincidence index of the string.
 */
export function getCoincidenceIndex(str: string): number {
	str = extractLetterString(str);
	checkStringIsNotEmpty(str);

	const letterDistribution: FrequencyTable = getLetterDistribution(str);
	const letterCount: number = getLetterCount(str);

	return letterDistribution
		.map((e: number) => (e / letterCount) * ((e - 1) / (letterCount - 1))) // TODO coincidence index fix divide by 0
		.reduce((p: number, c: number) => p + c, 0);
}

export function guessCipher(str: string): "caesar" | "vigenere" {
	// mono 0.660 || 0.680 (en)
	// poly 0.038 || 0.040 (en)
	

	const ci = getCoincidenceIndex(str);

	return ci > CI_TRESHOLD ? "caesar" : "vigenere";
}

export function guessLanguage(str: string): "en" | "fr" {
	/**
	 * if not ciphered
	 * 		get letter frequency
	 * 		find closest CI
	 * 		find closest letter fdreq.
	 * 		make avg
	 */
	// TODO guess language
	return "en";
}

export function isCipheredText(str: string): boolean {
	const ci = getCoincidenceIndex(str);
	const letterFrequency = getLetterFrequency(str);

	if(ci > CI_TRESHOLD) {
		return true;
	}
	return true;

	// TODO isCipheredText
	// get letter freq
	// if match existing then false
}
