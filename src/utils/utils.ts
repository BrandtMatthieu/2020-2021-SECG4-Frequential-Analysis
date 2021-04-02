import { bold } from "https://deno.land/std@0.91.0/fmt/colors.ts";
import { existsSync } from "https://deno.land/std@0.91.0/fs/mod.ts";
import { Parameter } from "../Parameter.ts";
import { isCipheredText, guessCipher } from "./crypto_utils.ts";

/**
 * Runs the main program.
 */
export function run(): void {
	Parameter.initialize();
	
	const help = Boolean(Parameter.getParameter("help").getValue());
	if(help) {
		printHelp();
		return Deno.exit();
	}

	let input = Parameter.getParameter("input").getValue(); // TODO
	if(existsSync(input)) {
		input = new TextDecoder("utf-8").decode(Deno.readFileSync(input));
	}

	let mode = Parameter.getParameter("mode").getValue();
	if(mode === "auto") {
		mode = isCipheredText(input) ? "decode" : "encode";
	}

	let algo = Parameter.getParameter("algo").getValue();
	if(algo === "auto") {
		algo = guessCipher(input);
	}
	if(["caesar", "c"].includes(algo)) {

	} else if(["vigenere", "v"].includes(algo)) {

	}

	let lang;

	let key;
	

	let result;

	let frequency;

	const output = Parameter.getParameter("output").getValue();
	const outputStream: Deno.WriterSync = output === "console" ? Deno.stdout : Deno.openSync(output);

	if(["encode", "e"].includes(mode)) {

	} else  if(["decode", "d"].includes(mode)) {
		result = 
		outputStream.writeSync(new TextEncoder().encode(result));
	} else if (["print-key", "pk"].includes(mode)) {
		outputStream.writeSync(new TextEncoder().encode(key));
	}

	/**

	get key
	if path
		resolve path and read key
	else if auto
		skip
	else
		check valid key
	
	get input
	if path
		resolve and read input
	
	get freq file



	if mode == encode
		solved = encode
	else if mode == decode
		key = find key
		solved == decode
	else if print key
		key = solved


	get sf
	if sf
		save frequency


	get output
	if console
		print console
		end
	else if path
		print in file
		end
	
	
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
