import { AssertionError } from "https://deno.land/std@0.91.0/testing/asserts.ts";

/**
 * Makes an assertion that `actual` and `expected` are equal to an extend.
 * If not equal, throw.
 * 
 * @param actual the actual number.
 * @param expected the expected number.
 * @throws an AssertionError if the floats are not equals.
 */
export function assertEqualsFloat<T = number | number[]>(actual: T, expected: T, msg?: string): void {
	if(actual instanceof Array
		&& expected instanceof Array) {
		if(actual.length === expected.length) {
			actual.every((a, index) => assertEqualsFloat(actual[index], expected[index]));
		}
	} else if(typeof actual === "number"
		&& typeof expected === "number") {
		if((actual - expected) <= Number.EPSILON) {
			return;
		}
		throw new AssertionError("Values are not equals");
	}
}
