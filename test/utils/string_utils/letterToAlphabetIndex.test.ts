import { letterToAlphabetIndex } from "../../../src/utils/string_utils.ts";
import { assert, assertEquals, assertThrows } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("letterToAlphabetIndex empty", () => {
	const actual = "";

	assertThrows(() => letterToAlphabetIndex(actual));
});

Deno.test("letterToAlphabetIndex multiple", () => {
	const actual = "abc";

	assertThrows(() => letterToAlphabetIndex(actual));
});

Deno.test("letterToAlphabetIndex lowerCase", () => {
	const actual = "a";
	const expected = 0;

	assertEquals(letterToAlphabetIndex(actual), expected);
});

Deno.test("letterToAlphabetIndex lowerCase", () => {
	const actual = "b";
	const expected = 1;

	assertEquals(letterToAlphabetIndex(actual), expected);
});

Deno.test("letterToAlphabetIndex lowerCase", () => {
	const actual = "z";
	const expected = 25;

	assertEquals(letterToAlphabetIndex(actual), expected);
});

Deno.test("letterToAlphabetIndex upperCase", () => {
	const actual = "A";
	const expected = 0;

	assertEquals(letterToAlphabetIndex(actual), expected);
});

Deno.test("letterToAlphabetIndex upperCase", () => {
	const actual = "B";
	const expected = 1;

	assertEquals(letterToAlphabetIndex(actual), expected);
});

Deno.test("letterToAlphabetIndex upperCase", () => {
	const actual = "Z";
	const expected = 25;

	assertEquals(letterToAlphabetIndex(actual), expected);
});
