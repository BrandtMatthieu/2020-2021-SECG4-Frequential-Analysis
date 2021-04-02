import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { fixKey } from "../../../src/utils/key_utils.ts";

Deno.test("fixKey -27 % 26", () => {
	const key = -27;
	const actual = fixKey(key);
	const expected = 25;

	assertEquals(actual, expected);
});

Deno.test("fixKey -26 % 26", () => {
	const key = -26;
	const actual = fixKey(key);
	const expected = 0;

	assertEquals(actual, expected);
});

Deno.test("fixKey -25 % 26", () => {
	const key = -25;
	const actual = fixKey(key);
	const expected = 1;

	assertEquals(actual, expected);
});


Deno.test("fixKey -2 % 26", () => {
	const key = -2;
	const actual = fixKey(key);
	const expected = 24;

	assertEquals(actual, expected);
});

Deno.test("fixKey -1 % 26", () => {
	const key = -1;
	const actual = fixKey(key);
	const expected = 25;

	assertEquals(actual, expected);
});

Deno.test("fixKey 0 % 26", () => {
	const key = 0;
	const actual = fixKey(key);
	const expected = 0;

	assertEquals(actual, expected);
});

Deno.test("fixKey 1 % 26", () => {
	const key = 1;
	const actual = fixKey(key);
	const expected = 1;

	assertEquals(actual, expected);
});

Deno.test("fixKey 2 % 26", () => {
	const key = 2;
	const actual = fixKey(key);
	const expected = 2;

	assertEquals(actual, expected);
});

Deno.test("fixKey 25 % 26", () => {
	const key = 25;
	const actual = fixKey(key);
	const expected = 25;

	assertEquals(actual, expected);
});

Deno.test("fixKey 26 % 26", () => {
	const key = 26;
	const actual = fixKey(key);
	const expected = 0;

	assertEquals(actual, expected);
});

Deno.test("fixKey 27 % 26", () => {
	const key = 27;
	const actual = fixKey(key);
	const expected = 1;

	assertEquals(actual, expected);
});

Deno.test("fixKey -101 % 100", () => {
	const key = -101;
	const actual = fixKey(key, 100);
	const expected = 99;

	assertEquals(actual, expected);
});

Deno.test("fixKey -100 % 100", () => {
	const key = -100;
	const actual = fixKey(key, 100);
	const expected = 0;

	assertEquals(actual, expected);
});

Deno.test("fixKey -99 % 100", () => {
	const key = -99;
	const actual = fixKey(key, 100);
	const expected = 1;

	assertEquals(actual, expected);
});


Deno.test("fixKey -2 % 100", () => {
	const key = -2;
	const actual = fixKey(key, 100);
	const expected = 98;

	assertEquals(actual, expected);
});

Deno.test("fixKey -1 % 100", () => {
	const key = -1;
	const actual = fixKey(key, 100);
	const expected = 99;

	assertEquals(actual, expected);
});

Deno.test("fixKey 0 % 100", () => {
	const key = 0;
	const actual = fixKey(key, 100);
	const expected = 0;

	assertEquals(actual, expected);
});

Deno.test("fixKey 1 % 100", () => {
	const key = 1;
	const actual = fixKey(key, 100);
	const expected = 1;

	assertEquals(actual, expected);
});

Deno.test("fixKey 2 % 100", () => {
	const key = 2;
	const actual = fixKey(key, 100);
	const expected = 2;

	assertEquals(actual, expected);
});

Deno.test("fixKey 99 % 100", () => {
	const key = 99;
	const actual = fixKey(key, 100);
	const expected = 99;

	assertEquals(actual, expected);
});

Deno.test("fixKey 100 % 100", () => {
	const key = 100;
	const actual = fixKey(key, 100);
	const expected = 0;

	assertEquals(actual, expected);
});

Deno.test("fixKey 101 % 100", () => {
	const key = 101;
	const actual = fixKey(key, 100);
	const expected = 1;

	assertEquals(actual, expected);
});
