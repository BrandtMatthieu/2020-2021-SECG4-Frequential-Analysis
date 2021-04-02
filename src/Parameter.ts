import { parse } from "https://deno.land/std@0.91.0/flags/mod.ts";
import { existsSync } from "https://deno.land/std@0.91.0/fs/mod.ts";
import { bold, italic, red } from "https://deno.land/std@0.91.0/fmt/colors.ts";
import { checkIsActualNumber } from "./utils/number_utils.ts";

/**
 * A parameter for the main program, passed as argument
 */
export class Parameter {

	public static readonly parameters: Parameter[] = [];

	private readonly shortNames: string[];
	private readonly longNames: string[];
	private readonly description: string;
	private readonly type: ParameterType[];
	private readonly possibleValues?: string[];
	private readonly defaultValue: string;
	private readonly example: string;
	private readonly check?: (value: string) => void;

	private value?: string;

	/**
	 * Creats a new accepted parameter
	 * @param p the parameter to create
	 */
	private constructor(p: {
		shortNames: string[],
		longNames: string[],
		description: string,
		type: ParameterType[],
		possibleValues?: string[],
		defaultValue: string,
		example: string,
		check?: (value: string) => void,
	}) {
		this.shortNames = p.shortNames;
		this.longNames = p.longNames;
		this.description = p.description;
		this.type = p.type;
		this.possibleValues = p.possibleValues;
		this.defaultValue = p.defaultValue;
		this.example = p.example;
		this.check = p.check;
	}

	/**
	 * Returns the short names of the parameter.
	 * @returns the short names of the parameter.
	 */
	public getShortnames(): string[] {
		return this.shortNames;
	}

	/**
	 * Returns the long names of the parameter.
	 * @returns the long names of the parameter.
	 */
	public getLongNames(): string[] {
		return this.longNames;
	}

	/**
	 * Returns the description of the parameter.
	 * @returns the description of the parameter.
	 */
	public getDescription(): string {
		return this.description;
	}

	/**
	 * Returns the accepted types of the parameter.
	 * @returns the accepted types of the parameter.
	 */
	public getTypes(): ParameterType[] {
		return this.type;
	}

	/**
	 * Returns the possible accepted values of the parameter.
	 * @returns the possible accepted values of the parameter.
	 */
	public getPossibleValues(): string[] | undefined {
		return this.possibleValues;
	}

	/**
	 * Returns the default value of the parameter.
	 * @returns the default value of the parameter.
	 */
	public getDefaultValue(): string {
		return this.defaultValue;
	}

	/**
	 * Returns an example of value for the parameter.
	 * @returns an example of value for the parameter.
	 */
	public getExample(): string {
		return this.example;
	}

	/**
	 * Returns the value of the parameter.
	 * @returns the value of the parameter.
	 */
	public getValue(): string {
		return (this.value !== undefined) ? this.value : this.defaultValue;
	}

	/**
	 * Sets the value of the parameter.
	 * @param value the value to set the parameter to.
	 * @throws an error if a value isn't valid.
	 */
	public setValue(value: string): void {
		if(this.type.includes(ParameterType.AUTO)) {
			if(value.toLowerCase() === "auto") {
				return void (this.value = value);
			}
		}
		if(this.type.includes(ParameterType.ENUM)) {
			if(this.possibleValues!.includes(value)) {
				return void (this.value = value);
			}
		}
		if(this.type.includes(ParameterType.BOOLEAN)) {
			const t = ["true", "y", "yes"];
			const f = ["false", "n", "no"];
			if(t.includes(value)) {
				return void (this.value = "true");
			}
			if(f.includes(value)) {
				return void (this.value = "false");
			}
		}
		if(this.type.includes(ParameterType.PATH)) {
			if(existsSync(value) && Deno.lstatSync(value).isFile) {
				return void (this.value = Deno.realPathSync(value));
			}
		}
		if(this.type.includes(ParameterType.NUMBER)) {
			const n = parseInt(value, 10);
			try {
				checkIsActualNumber(n);
				return void (this.value = n.toString());
			} catch {}
		}
		if(this.type.includes(ParameterType.STRING)) {
			try {
				this.check!(value);
				return void (this.value = value);
			} catch {}
		}
		console.error(`Invalid value "${value}" for the parameter "${this.longNames[0]}".`);
		Deno.exit(-1);
	}

	/**
	 * Retuns a printable string with all the infos about the parameter.
	 * @param indent the indent to use for the string.
	 * @returns the stirng representing the parameter.
	 */
	public toString(indent = 0): string {
		return [
			this.shortNames.map(name => "-" + name).map(name => bold(name)).join(", "),
			this.longNames.map(name => "--" + name).map(name => bold(name)).join(", "),
			this.description,
			... this.possibleValues && this.possibleValues.length
				? [`Possible values: ${this.possibleValues.map(value => `"${italic(value)}"`).join(", ")}.`]
				: [],
			`Example: "${italic(this.example)}".`,
			... this.defaultValue
				? [`Default value: "${italic(this.defaultValue)}".`]
				: [],
			`Current value: "${red(this.getValue())}"`,
		]
			.map(e => " ".repeat(indent) + e)
			.join("\n");
	}

	/**
	 * Initializes all the parameters from the arguments.
	 */
	public static initialize(): void {
		Parameter.parameters.push(
			new Parameter({
				shortNames: ["m"],
				longNames: ["mode"],
				description: "Wether to encode a file; decode a file; or print the key of a ciphered text.",
				type: [ParameterType.AUTO, ParameterType.ENUM],
				possibleValues: ["encode", "e", "decode", "d", "print-key", "pk"],
				defaultValue: "decode",
				example: "encode",
			}),
			new Parameter({
				shortNames: ["k"],
				longNames: ["key"],
				description: "The number; or string key; or a path to a file containing any of the previous to encode or decode text. Only when encoding or decoding.",
				type: [ParameterType.AUTO, ParameterType.NUMBER, ParameterType.PATH, ParameterType.STRING],
				possibleValues: [],
				defaultValue: "auto",
				example: "3",
				check: (str: string) => {},
			}),
			new Parameter({
				shortNames: ["i", "if"],
				longNames: ["input", 'input-file'],
				description: "The text; or file containing the text to encode or decode.",
				type: [ParameterType.PATH, ParameterType.STRING],
				defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				example: "Secret message",
				check: (str: string) => {},
			}),
			new Parameter({
				shortNames: ["o", "of"],
				longNames: ["output", "output-file"],
				description: "The console; or a path to a file where the encoded; or decoded text; or the ciphering key text should be printed / saved.",
				type: [ParameterType.ENUM, ParameterType.PATH],
				possibleValues: ["console", "terminal", "cmd", "shell"],
				defaultValue: "console",
				example: "./ciphered.txt",
			}),
			new Parameter({
				shortNames: ["a", "c"],
				longNames: ["algorithm", "algo", "cipher"],
				description: "The algorithm to use to encode or decode the ciphered text.",
				type: [ParameterType.AUTO, ParameterType.ENUM],
				possibleValues: ["caesar", "c", "vigenere", "v"],
				defaultValue: "vigenere",
				example: "caesar",
			}),
			new Parameter({
				shortNames: ["f", "ff", "ft"],
				longNames: ["frequency", "frequency-file", "frequency-text"],
				description: "A path to a file containing the frequencies to use; or the text to get the frequencies from. Only when decoding or printing the encoding key.",
				type: [ParameterType.AUTO, ParameterType.PATH, ParameterType.STRING],
				possibleValues: [],
				defaultValue: "auto",
				example: "auto",
				check: (str: string) => {},
			}),
			new Parameter({
				shortNames: ["sf"],
				longNames: ["save-frequency"],
				description: "A path to a file where to save the frequencies. Only if frequencies are read from a plain text file and when decoding or printing the encoding key.",
				type: [ParameterType.BOOLEAN, ParameterType.PATH],
				possibleValues: [],
				defaultValue: "false",
				example: "false",
			}),
			new Parameter({
				shortNames: ["l", "lang"],
				longNames: ["language"],
				description: "The language the encoded text is in. Only when decoding or printing the ciphering key.",
				type: [ParameterType.AUTO, ParameterType.ENUM],
				possibleValues: ["english", "en", "french", "fr"],
				defaultValue: "en",
				example: "en",
			}),
			new Parameter({
				shortNames: ["h", "?"],
				longNames: ["help"],
				description: "Prints this help message then exits.",
				type: [ParameterType.BOOLEAN],
				possibleValues: [],
				defaultValue: "false",
				example: "",
			}),
		);

		const args = parse(Deno.args);

		Object.entries(args)
			.map(([key, value]) => ([key, value.toString() as string]))
			.filter(([key, value]) => key !== "_")
			.some(([key, value]) => {
				const parameter = Parameter.parameters.find(parameter =>
					parameter.shortNames.includes(key) ||
					parameter.longNames.includes(key));
				if(!parameter) {
					console.warn(`Unknown parameter: "${key}"`);
					return false;
				}

				parameter.setValue(value.toString());
				return false;
			});

		args._.map(value => value.toString())
			.some(value => {
				const parameter = Parameter.parameters
					.filter(parameter => parameter.type.includes(ParameterType.ENUM))
					.find(parameter => parameter.possibleValues!.includes(value));

				if(!parameter) {
					console.warn(`Unknown parameter: "${value}"`);
					return false;
				}

				parameter.setValue(value);
			});
	}

	/**
	 * Retrieves a parameter by one if its names.
	 * @param name the name of the parameter to retrive.
	 * @returns the parameter if found.
	 * @throws an error if no parameter with such name has been found.
	 */
	public static getParameter(name: string): Parameter {
		const p = Parameter.parameters.find(p => p.longNames.includes(name) || p.shortNames.includes(name));
		if(!p) {
			throw new Error("No matchinig parameter found");
		}
		return p;
	}
}

/**
 * All the different kinds of parameters.
 */
enum ParameterType {
	AUTO = "auto",
	BOOLEAN = "boolean",
	ENUM = "enum",
	NUMBER = "number",
	PATH = "path",
	STRING = "string",
}
