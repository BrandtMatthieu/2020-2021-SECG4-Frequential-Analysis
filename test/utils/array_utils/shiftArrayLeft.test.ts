import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";
import { shiftArrayLeft } from "../../../src/utils/array_utils.ts";

Deno.test("shiftArrayLeft empty", () => {
	const actual = shiftArrayLeft([] as number[], -10);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft empty", () => {
	const actual = shiftArrayLeft([] as number[], -1);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft empty", () => {
	const actual = shiftArrayLeft([] as number[], 0);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft empty", () => {
	const actual = shiftArrayLeft([] as number[], 1);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft empty", () => {
	const actual = shiftArrayLeft([] as number[], 10);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft -27", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -27);
	const expected = [25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft -26", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -26);
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft -25", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -25);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft -2", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -2);
	const expected = [24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft -1", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -1);
	const expected = [25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft 0", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 0);
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft 1", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 1);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft 2", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 2);
	const expected = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft 25", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 25);
	const expected = [25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft 26", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 26);
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayLeft 27", () => {
	const actual = shiftArrayLeft([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 27);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0];

	assertEquals(actual, expected);
});
