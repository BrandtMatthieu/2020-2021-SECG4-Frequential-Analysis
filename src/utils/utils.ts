import { bold } from "https://deno.land/std@0.92.0/fmt/colors.ts";
import { existsSync } from "https://deno.land/std@0.92.0/fs/mod.ts";
import { Parameter } from "../Parameter.ts";
import { isCipheredText, guessCipher, guessLanguage } from "./crypto_utils.ts";
import { stringToKey, keyToString, checkKey } from "./key_utils.ts";
import { FrequencyTable } from "./frequency_utils.ts";
import { Caesar } from "../Caesar.ts";
import { Vigenere } from "../Vigenere.ts";

/**
 * Runs the main program.
 */
export function run(): void {
	Parameter.initialize();

	let result = "";
	let h: boolean;
	let k: string;
	let key: number[];
	let i: string;
	let m: string;
	let o: string;
	let outputStream: Deno.WriterSync;
	let a: string;
	let l: string;
	let ff; // TODO disabled no time
	let frequency: FrequencyTable;
	let sf; // TODO disabled no time

	// check if requesting help
	h = Parameter.getParameter("h").getValue() === "true";
	if(h) {
		printHelp();
		return Deno.exit();
	}

	// read key
	k = Parameter.getParameter("key").getValue();
	if(existsSync(k)) {
		if(Deno.lstatSync(k).isFile) {
			k = new TextDecoder("utf-8").decode(Deno.readFileSync(k));
		} else {
			console.warn(`Path "${k}" exists but is not a file. Using its name as a string.`);
		}
	}
	if(!Number.isNaN(parseInt(k, 10))) {
		key = [parseInt(k, 10)];
	} else {
		checkKey(k);
		key = stringToKey(k);
	}

	// read input
	i = Parameter.getParameter("i").getValue();
	if(existsSync(i)) {
		if(Deno.lstatSync(i).isFile) {
			i = new TextDecoder("utf-8").decode(Deno.readFileSync(i));
		} else {
			console.warn(`Path "${i}" exists but is not a file. Using its name as a string.`);
		}
	}

	// read mode
	m = Parameter.getParameter("m").getValue();
	if(m === "auto") {
		m = isCipheredText(i) ? "decode" : "encode";
	}

	// read output
	o = Parameter.getParameter("o").getValue();
	if(["console", "terminal", "cmd", "shell"].includes(o)) {
		outputStream = Deno.stdout;
	} else {
		outputStream = Deno.openSync(o);
	}

	// read algorithm
	a = Parameter.getParameter("a").getValue();
	if(a === "auto") {
		a = guessCipher(i);
	}

	// read lang
	l = Parameter.getParameter("lang").getValue();

	// handle mode
	if(["encode", "e"].includes(m)) {
		if(k === "auto") { throw new Error("cannot encode with 'auto' as key"); }
		if(a === "auto") { throw new Error("cannot encode with 'auto' alogorithm"); }
		if(ff !== "auto") { console.warn("no 'frequency-file' allowed when encoding, ignoring"); }
		if(sf !== "false") { console.warn("no 'save-frequency' allowed when encoding, ignoring"); }
		if(l !== "auto") { console.warn("no 'lang' allowed when encoding, ignoring"); }

		if(["caesar", "c"].includes(a)) {
			result = Caesar.encode(i, key[0]);
		} else if(["vigenere", "v"].includes(a)) {
			result =Vigenere.encode(i, key);
		}
	} else if(["decode", "d"].includes(m)) {
		if(l === "auto") {
			l = guessLanguage(i);
		}
		frequency = JSON.parse(
			new TextDecoder("utf-8")
				.decode(
					Deno.readFileSync(`./frequency tables/${l}.json`)
				)
		)
			.frequencies as FrequencyTable;

		if(["caesar", "c"].includes(a)) {
			result = k === "auto"
				? Caesar.decode(i, undefined, frequency)
				: Caesar.decode(i, key[0]);
		} else if(["vigenere", "v"].includes(a)) {
			result = k === "auto"
				? Vigenere.decode(i, undefined, frequency)
				: Vigenere.decode(i, key);
		}
	} else if(["print-k", "pk"].includes(m)) {
		if(l === "auto") {
			l = guessLanguage(i);
		}
		frequency = JSON.parse(
			new TextDecoder("utf-8")
				.decode(
					Deno.readFileSync(`./frequency tables/${l}.json`)
				)
		)
			.frequencies as FrequencyTable;
		if(k !== "auto") { console.warn("no key allowed when printing-key, ignoring"); }

		if(["caesar", "c"].includes(a)) {
			result = keyToString([Caesar.findKey(i, frequency)]);
		} else if(["vigenere", "v"].includes(a)) {
			result = keyToString(Vigenere.findKey(i, frequency));
		}
	}

	outputStream.writeSync(new TextEncoder().encode(result));

	// cleanup
	if(outputStream instanceof Deno.File) {
		outputStream.close();
	}

	/**
	
	// TODO frequency file stuff
	get freq file
	get sf
	if sf
		save frequency	
	*/

}

/**
 * Prints the help message.
 */
export function printHelp(): void {
	console.log([
		bold("Frequential Analysis"),
		"",
		bold("NAME"),
		"",
		bold("DESCRIPTION"),
		"",
		...Parameter.parameters
			.map(parameter => parameter.toString(4))
			.map(parameter => parameter + "\n"),
	]
		.join("\n"));
}
