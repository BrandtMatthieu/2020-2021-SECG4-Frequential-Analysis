import { assertThrows } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { getLetterFrequency } from "../../../src/utils/frequency_utils.ts";
import { assertEqualsFloat } from "../../../src/utils/assert_utils.ts";

Deno.test("getLetterFrequency empty", () => {
	const actual = "";

	assertThrows(() => getLetterFrequency(actual));
});

Deno.test("getLetterFrequency single", () => {
	const actual = "a";
	const expected = [1 / 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	assertEqualsFloat(getLetterFrequency(actual), expected);
});

Deno.test("getLetterFrequency multiple", () => {
	const actual = "abb";
	const expected = [1 / 3, 2 / 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	assertEqualsFloat(getLetterFrequency(actual), expected);
});

Deno.test("getLetterFrequency multiple", () => {
	const actual = "abb";
	const expected = [1 / 3, 2 / 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	assertEqualsFloat(getLetterFrequency(actual), expected);
});

Deno.test("getLetterFrequency all", () => {
	const actual = "abcdefghijklmnopqrstuvwxyz";
	const expected = [1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26, 1 / 26];

	assertEqualsFloat(getLetterFrequency(actual), expected);
});

Deno.test("getLetterFrequency special only chars", () => {
	const actual = ".,;:/?!&";

	assertThrows(() => getLetterFrequency(actual));
});

Deno.test("getLetterFrequency mixed sum 1", () => {
	const actual = "Nisi enim qui sunt non eiusmod. Qui duis culpa commodo in. Est cillum reprehenderit eu fugiat consequat eiusmod nisi ea id ipsum fugiat tempor tempor. Ullamco eu adipisicing ea laboris ipsum velit pariatur Lorem cupidatat eu id anim quis quis. Consequat id eiusmod incididunt sunt nulla nisi consequat. Elit veniam cillum sit Lorem enim magna et enim ipsum laborum enim. Pariatur elit adipisicing laboris minim id. Eiusmod adipisicing aute ut eu esse labore reprehenderit. Labore proident qui sint ea ipsum esse excepteur pariatur ea esse duis. Elit fugiat in non non ea labore nisi reprehenderit ullamco labore. In irure aute proident aliquip ea fugiat culpa eu.";

	assertEqualsFloat((getLetterFrequency(actual) as number[]).reduce((p, c) => p + c, 0), 1);
});
