import { assertEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { getIndexArrayRepeatingStandingoutValue } from "../../../src/utils/array_utils.ts";
import { randomNumber } from "../../../src/utils/number_utils.ts";

Deno.test("getIndexArrayRepeatingStandingoutValue manual tests", () => {
	const actual = getIndexArrayRepeatingStandingoutValue([null, null, 1, 2, 1, 3, 2, 1, 10, 2]);
	const expected = 8;

	assertEquals(actual, expected);
});

Deno.test("getIndexArrayRepeatingStandingoutValue random tests", () => {
	for(let i = 0; i < 50; ++i) {
		const a: (number | null)[] = new Array(randomNumber(5, 20))
			.fill(0)
			.map(e => randomNumber(450, 590));

		const maxValue = randomNumber(810, 850);


		a.splice(randomNumber(0, a.length - 1), 0, maxValue);

		a.unshift(null);
		a.unshift(null);

		const actual = getIndexArrayRepeatingStandingoutValue(a);

		assertEquals(actual, a.indexOf(maxValue), `automated test ${i}\n${a}\n${actual} !== ${a.indexOf(maxValue)}`);
	}
});
