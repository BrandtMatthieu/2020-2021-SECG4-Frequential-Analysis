import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { shiftArrayRight } from "../../../src/utils/array_utils.ts";

Deno.test("shiftArrayRight empty", () => {
	const actual = shiftArrayRight([] as number[], -10);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight empty", () => {
	const actual = shiftArrayRight([] as number[], -1);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight empty", () => {
	const actual = shiftArrayRight([] as number[], 0);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight empty", () => {
	const actual = shiftArrayRight([] as number[], 1);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight empty", () => {
	const actual = shiftArrayRight([] as number[], 10);
	const expected: number[] = [];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight -27", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -27);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight -26", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -26);
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight -25", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -25);
	const expected = [25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight -2", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -2);
	const expected = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight -1", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], -1);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight 0", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 0);
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight 1", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 1);
	const expected = [25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight 2", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 2);
	const expected = [24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight 25", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 25);
	const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight 26", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 26);
	const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	assertEquals(actual, expected);
});

Deno.test("shiftArrayRight 27", () => {
	const actual = shiftArrayRight([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 27);
	const expected = [25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

	assertEquals(actual, expected);
});
