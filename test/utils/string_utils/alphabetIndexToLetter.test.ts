import { alphabetIndexToLetter } from "../../../src/utils/string_utils.ts";
import { assert, assertEquals, assertThrows } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("alphabetIndexToLetter 0 lowerCase", () => {
	const actual = -26;
	const expected = "a";

	assertEquals(alphabetIndexToLetter(actual), expected);
});

Deno.test("alphabetIndexToLetter 0 lowerCase", () => {
	const actual = -1;
	const expected = "z";

	assertEquals(alphabetIndexToLetter(actual), expected);
});

Deno.test("alphabetIndexToLetter 0 lowerCase", () => {
	const actual = 0;
	const expected = "a";

	assertEquals(alphabetIndexToLetter(actual), expected);
});

Deno.test("alphabetIndexToLetter 1 lowerCase", () => {
	const actual = 1;
	const expected = "b";

	assertEquals(alphabetIndexToLetter(actual), expected);
});

Deno.test("alphabetIndexToLetter 25 lowerCase", () => {
	const actual = 25;
	const expected = "z";

	assertEquals(alphabetIndexToLetter(actual), expected);
});

Deno.test("alphabetIndexToLetter 25 lowerCase", () => {
	const actual = 26;
	const expected = "a";

	assertEquals(alphabetIndexToLetter(actual), expected);
});

Deno.test("alphabetIndexToLetter 25 lowerCase", () => {
	const actual = 27;
	const expected = "b";

	assertEquals(alphabetIndexToLetter(actual), expected);
});

Deno.test("alphabetIndexToLetter 0 upperCase", () => {
	const actual = -26;
	const expected = "A";

	assertEquals(alphabetIndexToLetter(actual, true), expected);
});

Deno.test("alphabetIndexToLetter 0 upperCase", () => {
	const actual = -1;
	const expected = "Z";

	assertEquals(alphabetIndexToLetter(actual, true), expected);
});

Deno.test("alphabetIndexToLetter 0 upperCase", () => {
	const actual = 0;
	const expected = "A";

	assertEquals(alphabetIndexToLetter(actual, true), expected);
});

Deno.test("alphabetIndexToLetter 1 upperCase", () => {
	const actual = 1;
	const expected = "B";

	assertEquals(alphabetIndexToLetter(actual, true), expected);
});

Deno.test("alphabetIndexToLetter 25 upperCase", () => {
	const actual = 25;
	const expected = "Z";

	assertEquals(alphabetIndexToLetter(actual, true), expected);
});

Deno.test("alphabetIndexToLetter 25 upperCase", () => {
	const actual = 26;
	const expected = "A";

	assertEquals(alphabetIndexToLetter(actual, true), expected);
});

Deno.test("alphabetIndexToLetter 25 upperCase", () => {
	const actual = 27;
	const expected = "B";

	assertEquals(alphabetIndexToLetter(actual, true), expected);
});
