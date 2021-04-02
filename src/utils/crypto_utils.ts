import { getLetterCount, checkStringIsNotEmpty, extractLetterString } from "./string_utils.ts";
import { getLetterDistribution, FrequencyTable } from "./frequency_utils.ts";
import { getArrayDifference, getArrayQuotient, getArrayMultiplication } from "./array_utils.ts";
import { Caesar } from "../Caesar.ts";

export function isCipheredText(str: string): boolean {
	throw new Error("not implemented"); // TODO
}

export function guessLanguage(): "en" | "fr" {
	throw new Error("not implemented"); // TODO
}

export function guessCipher(str: string): "caesar" | "vigenere" {
	const ci = getCoincidenceIndex(str);

	// TODO
	// guess cipher based on ci
	// mono == 0.66 || 0.68 (en)
	// poly 0.038 || 0.040 (en)

	if(ci > 0.6) {

	}
	return "caesar";
}

/**
 * Determines if the cipphered text is ciphered using a mono- (Caesar) or poly- (Vigenere) alphabetic cipher.
 * @param str the ciphered text
 * @returns the coincidence index of the string.
 */
export function getCoincidenceIndex(str: string): number {
	str = extractLetterString(str);
	checkStringIsNotEmpty(str);

	const letterDistribution = getLetterDistribution(str);
	const letterCount = getLetterCount(str);

	return letterDistribution
		.map(e => (e / letterCount) * ((e - 1) / (letterCount - 1))) // TODO fix 0
		.reduce((p, c) => p + c, 0);
}

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
	const candidate = getLetterDistribution(Caesar.decode(str, frequencyTable, candidateKey));
	const error = getArrayDifference(candidate, expected);
	const squaredError = getArrayMultiplication(error, error);
	const normalizedSquaredError = getArrayQuotient(squaredError, expected);
	const normalizedSquaredErrorSum = normalizedSquaredError.reduce((p, c) => p + c, 0);
	return normalizedSquaredErrorSum;
}
