import { assert, assertThrows } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { isLetter } from "../../../src/utils/string_utils.ts";

Deno.test("isLetter empty", () => {
	const actual = [""];

	actual.forEach(entry => assertThrows(() => isLetter(entry)));
});

Deno.test("isLetter lowercase", () => {
	const actual = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	actual.forEach(entry => assert(isLetter(entry)));
});

Deno.test("isLetter uppercase", () => {
	const actual = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	actual.forEach(entry => assert(isLetter(entry)));
});

Deno.test("isLetter digits", () => {
	const actual = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	actual.forEach(entry => assert(!isLetter(entry)));
});

Deno.test("isLetter special chars", () => {
	const actual = [".", ",", ";", ":", " ", "\t", "\n", "\r", "_", "-", "+", "*", "/", "\\", "!", "?", "@", "%", "&", "|", "#", "'", "\"", "(", ")", "§", "^", "{", "}", "$", "€", "£", "µ", "`", "´", "~"];

	actual.forEach(entry => assert(!isLetter(entry)));
});

Deno.test("isLetter multiple characters", () => {
	const actual = ["aa", "aaa", "ǳ", "ǆ", "ĳ", "ǉ", "ǌ"];

	actual.forEach((entry, index) => assertThrows(() => isLetter(entry), undefined, undefined, `value: "${entry}", index: ${index}`));
});
