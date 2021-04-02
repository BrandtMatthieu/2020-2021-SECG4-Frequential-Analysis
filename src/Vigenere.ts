import { isLetter, letterToAlphabetIndex, alphabetIndexToLetter, isUpperCase, splitStringAlternate, normalize } from "./utils/string_utils.ts";
import { invertArrayKey } from "./utils/key_utils.ts";
import { getArrayAt, getIndexArrayRepeatingStandingoutValue } from "./utils/array_utils.ts";
import { getCoincidenceIndex } from "./utils/crypto_utils.ts";
import { FrequencyTable } from "./utils/frequency_utils.ts";
import { Caesar } from "./Caesar.ts";

/**
 * A class used to deal with the vigenere cipher.
 */
export class Vigenere {

	/**
	 * Encodes a string with the vigenere cipher.
	 * @param str the string to encode.
	 * @param key the key to encode the string with.
	 * @returns the encoded string.
	 */
	public static encode(str: string, key: number[]): string {
		str = normalize(str);

		let index = 0;
		return str
			.split("")
			.map(c => {
				if(!isLetter(c)) {
					return c;
				}
				return alphabetIndexToLetter(letterToAlphabetIndex(c) + getArrayAt(key, index++), isUpperCase(c));
			})
			.join("");
	}

	/**
	 * Decodes a string with the vigenere cipher.
	 * @param str the string to decode.
	 * @param ft the frequency table of the letter the message is ciphered in.
	 * @param key the key to decode the encoded string with.
	 * @returns the decoded message.
	 */
	public static decode(str: string, key: number[]): string;
	public static decode(str: string, key: undefined, ft: FrequencyTable): string;
	public static decode(str: string, key: number[] | undefined, ft?: FrequencyTable) {
		if(key === undefined) {
			key = invertArrayKey(Vigenere.findKey(str, ft!));
		}

		return Vigenere.encode(str, key);
	}

	/**
	 * Finds the best key of a string encoded with the vigenere cipher.
	 * @param str the string to get the key from.
	 * @param ft the frequency table of the letter the message is ciphered in.
	 * @returns the best key found.
	 */
	public static findKey(str: string, ft: FrequencyTable): number[] {
		return splitStringAlternate(str, Vigenere.findKeyLength(str))
			.map(e => Caesar.findKey(e, ft));
	}

	public static findKeyLength(str: string): number {
		const MIN_KEY_LENGHT = 2;
		const MAX_KEY_LENGHT = 20;

		const possibleKeys = new Array(MAX_KEY_LENGHT + 1)
			.fill([]) // [[], [], [], []]
			.map((e, index) => index > MIN_KEY_LENGHT ? splitStringAlternate(str, index) : []) // [[], [], ["ace", "bdf"], ["ad", "be", "cf"]]
			.map((e, index) => index > MIN_KEY_LENGHT ? e.map(f => getCoincidenceIndex(f)) : []) // [[], [], [float, float], [float, float, float]]
			.map((e, index) => index > MIN_KEY_LENGHT ? e.reduce((p, c) => p + c, 0) / e.length : null); // [null, null, float, float]

		const indexStandingoutNumber = getIndexArrayRepeatingStandingoutValue(possibleKeys);
		// TODO findKeyLength
		// can be improved
		// check if likely to be IC of language
		// use the Kasiaki method
		return indexStandingoutNumber;
	}
}
