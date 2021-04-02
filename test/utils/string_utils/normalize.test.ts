import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";
import { normalize } from "../../../src/utils/string_utils.ts";

Deno.test("normalize empty", () => {
	const actual = [""];
	const expected = "";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize lowercase a", () => {
	const actual = ["a", "à", "á", "ä", "â"];
	const expected = "a";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize lowercase e", () => {
	const actual = ["e", "è", "é", "ë", "ê"];
	const expected = "e";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize lowercase i", () => {
	const actual = ["i", "ì", "í", "ï", "î"];
	const expected = "i";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize lowercase o", () => {
	const actual = ["o", "ò", "ó", "ö", "ô"];
	const expected = "o";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize lowercase u", () => {
	const actual = ["u", "ù", "ú", "ü", "û"];
	const expected = "u";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize uppercase a", () => {
	const actual = ["A", "À", "Á", "Ä", "Â"];
	const expected = "A";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize uppercase e", () => {
	const actual = ["E", "È", "É", "Ë", "Ê"];
	const expected = "E";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize uppercase i", () => {
	const actual = ["I", "Ì", "Í", "Ï", "Î"];
	const expected = "I";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize uppercase o", () => {
	const actual = ["O", "Ò", "Ó", "Ö", "Ô"];
	const expected = "O";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize uppercase u", () => {
	const actual = ["U", "Ù", "Ú", "Ü", "Û"];
	const expected = "U";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});

Deno.test("normalize special chars", () => {
	const actual = [".", ",", ";", ":", "_", "-", "+", "*", "/", "\\", "!", "?", "@", "%", "&", "|", "#", "'", "\"", "(", ")", "§", "^", "{", "}", "$", "€", "£", "`", "~"];

	actual.forEach(entry => assertEquals(normalize(entry), entry));
});

Deno.test("normalize multiple characters", () => {
	const actual = [
		"ae", "áe", "àe", "âe", "äe",
		"aé", "áé", "àé", "âé", "äé",
		"aè", "áè", "àè", "âè", "äè",
		"aê", "áê", "àê", "âê", "äê",
		"aë", "áë", "àë", "âë", "äë",
	];
	const expected = "ae";

	actual.forEach(entry => assertEquals(normalize(entry), expected));
});
