import { invertKey } from "./utils/key_utils.ts";
import { FrequencyTable } from "./utils/frequency_utils.ts";
import { Vigenere } from "./Vigenere.ts";
import { getChiSquaredScore } from "./utils/crypto_utils.ts";

/**
 * A class used to deal with the caesar cipher.
 */
export class Caesar {

	/**
	 * Encodes a string with the caesar cipher.
	 * @param str the string to encode
	 * @param key the key to encode the string with.
	 * @returns the encoded string.
	 */
	public static encode(str: string, key: number): string {
		return Vigenere.encode(str, [key]);
	}

	/**
	 * Decodes a string with the caesar cipher.
	 * @param str the string to decode.
	 * @param ft the frequency table of the letter the message is ciphered in.
	 * @param key the key to decode the encoded string with.
	 * @returns the decoded message.
	 */
	public static decode(str: string, ft: FrequencyTable, key: number = invertKey(Caesar.findKey(str, ft))): string {
		return Caesar.encode(str, key);
	}

	/**
	 * Finds the best key of a string encoded with the caesar cipher.
	 * @param str the string to get the key from.
	 * @param ft the frequency table of the letter the message is ciphered in.
	 * @returns the best key found.
	 */
	public static findKey(str: string, ft: FrequencyTable): number {
		const chiSqScores = new Array(26)
			.fill(0)
			.map((f, i) => getChiSquaredScore(str, ft, i));
		
		return chiSqScores.indexOf(Math.min(...chiSqScores));
		/*
		return findMinKey(
			getLetterFrequency(str), // source freq table of language
			getLetterFrequency(str), // freq of key tested
		);
		*/
	}

}
