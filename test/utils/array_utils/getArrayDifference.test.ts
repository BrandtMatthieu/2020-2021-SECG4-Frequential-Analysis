import { assertEquals, assertThrows } from "https://deno.land/std@0.91.0/testing/asserts.ts";
import { assertEqualsFloat } from "../../../src/utils/assert_utils.ts";
import { getArrayDifference } from "../../../src/utils/array_utils.ts";

Deno.test("getArrayDifference empty", () => {
	const numerator: number[] = [];
	const denominator: number[] = [];
	const expected: number[] = [];

	assertEqualsFloat(getArrayDifference(numerator, denominator), expected);
});

Deno.test("getArrayDifference different length", () => {
	const numerator: number[] = [];
	const denominator: number[] = [1];

	assertThrows(() => getArrayDifference(numerator, denominator));
});

Deno.test("getArrayDifference different length", () => {
	const numerator: number[] = [1];
	const denominator: number[] = [2, 3];

	assertThrows(() => getArrayDifference(numerator, denominator));
});

Deno.test("getArrayDifference minus 0", () => {
	const numerator: number[] = [2, 2];
	const denominator: number[] = [1, 0];
	const expected: number[] = [1, 2];

	assertEqualsFloat(getArrayDifference(numerator, denominator), expected);
});

Deno.test("getArrayDifference negative result", () => {
	const numerator: number[] = [1];
	const denominator: number[] = [2];
	const expected: number[] = [-1];

	assertEqualsFloat(getArrayDifference(numerator, denominator), expected);
});

Deno.test("getArrayDifference negative term", () => {
	const numerator: number[] = [-1, 2];
	const denominator: number[] = [2, 2];
	const expected: number[] = [-3, 0];

	assertEqualsFloat(getArrayDifference(numerator, denominator), expected);
});
