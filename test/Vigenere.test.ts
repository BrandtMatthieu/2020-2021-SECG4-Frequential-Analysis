import { assertEquals, assertThrows } from "https://deno.land/std@0.91.0/testing/asserts.ts";
import { Vigenere } from "../src/Vigenere.ts";

Deno.test("vigenere empty string", () => {
	const actual = "";
	const key = [1];
	const expected = "";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere empty key", () => {
	const actual = "abc";
	const key: number[] = [];
	const expected = "";

	assertThrows(() => Vigenere.encode(actual, key));
});

Deno.test("vigenere char -1 lowercase", () => {
	const actual = "a";
	const key = [-1];
	const expected = "z";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere char -1 uppercase", () => {
	const actual = "A";
	const key = [-1];
	const expected = "Z";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere char 0 lowercase", () => {
	const actual = "a";
	const key = [0];
	const expected = "a";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere char 0 uppercase", () => {
	const actual = "A";
	const key = [0];
	const expected = "A";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere char 1 lowercase", () => {
	const actual = "a";
	const key = [1];
	const expected = "b";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere char 1 lowercase", () => {
	const actual = "z";
	const key = [1];
	const expected = "a";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere char 1 uppercase", () => {
	const actual = "A";
	const key = [1];
	const expected = "B";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere char 1 uppercase", () => {
	const actual = "Z";
	const key = [1];
	const expected = "A";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string -1 lowercase", () => {
	const actual = "abcde";
	const key = [-1, -1, -1, -1, -1];
	const expected = "zabcd";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string -1 uppercase", () => {
	const actual = "ABCDE";
	const key = [-1, -1, -1, -1, -1];
	const expected = "ZABCD";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string 0 lowercase", () => {
	const actual = "abcde";
	const key = [0, 0, 0, 0, 0];
	const expected = "abcde";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string 0 uppercase", () => {
	const actual = "ABCDE";
	const key = [0, 0, 0, 0, 0];
	const expected = "ABCDE";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string 1 lowercase", () => {
	const actual = "abcde";
	const key = [1, 1, 1, 1, 1];
	const expected = "bcdef";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string 1 uppercase", () => {
	const actual = "ABCDE";
	const key = [1, 1, 1, 1, 1];
	const expected = "BCDEF";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string random lowercase", () => {
	const actual = "abcde";
	const key = [0, 1, 2, 3, 4];
	const expected = "acegi";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string random uppercase", () => {
	const actual = "ABCDE";
	const key = [0, 1, 2, 3, 4];
	const expected = "ACEGI";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string random mixed", () => {
	const actual = "aBcDe";
	const key = [0, 1, 2, 3, 4];
	const expected = "aCeGi";

	assertEquals(Vigenere.encode(actual, key), expected);
});

Deno.test("vigenere string random mixed special chars", () => {
	const actual = "Ab. Cde;";
	const key = [0, 1, 2, 3, 4];
	const expected = "Ac. Egi;";

	assertEquals(Vigenere.encode(actual, key), expected);
});
