import { assertEquals, assertThrows } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { assertEqualsFloat } from "../../../src/utils/assert_utils.ts";
import { getArrayQuotient } from "../../../src/utils/array_utils.ts";

Deno.test("getArrayQuotient empty", () => {
	const numerator: number[] = [];
	const denominator: number[] = [];
	const expected: number[] = [];

	assertEqualsFloat(getArrayQuotient(numerator, denominator), expected);
});

Deno.test("getArrayQuotient different length", () => {
	const numerator: number[] = [];
	const denominator: number[] = [1];

	assertThrows(() => getArrayQuotient(numerator, denominator));
});

Deno.test("getArrayQuotient different length", () => {
	const numerator: number[] = [1];
	const denominator: number[] = [2, 3];

	assertThrows(() => getArrayQuotient(numerator, denominator));
});

Deno.test("getArrayQuotient divide 0", () => {
	const numerator: number[] = [1, 2];
	const denominator: number[] = [2, 0];
	const expected: number[] = [1/2, Infinity];

	assertEqualsFloat(getArrayQuotient(numerator, denominator), expected);
});

Deno.test("getArrayQuotient divide length 1", () => {
	const numerator: number[] = [1];
	const denominator: number[] = [2];
	const expected: number[] = [1/2];

	assertEqualsFloat(getArrayQuotient(numerator, denominator), expected);
});

Deno.test("getArrayQuotient divide length 2", () => {
	const numerator: number[] = [1, 2];
	const denominator: number[] = [2, 2];
	const expected: number[] = [1/2, 2/2];

	assertEqualsFloat(getArrayQuotient(numerator, denominator), expected);
});
