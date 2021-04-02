import { assertEquals, assert } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { Caesar } from "../src/Caesar.ts";
import { randomNumber } from "../src/utils/number_utils.ts";
import { alphabetIndexToLetter } from "../src/utils/string_utils.ts";
import { invertKey } from "../src/utils/key_utils.ts";

Deno.test("caesar decode 0", () => {
	const actual = "abc";
	const key = 0;
	const expected = "abc";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode letter ascii lowercase", () => {
	const actual = "b";
	const key = 1;
	const expected = "a";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode letter ascii uppercase", () => {
	const actual = "B";
	const key = 1;
	const expected = "A";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode letter unicode lowercase", () => {
	const actual = "è";
	const key = 1;
	const expected = "d";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode letter unicode uppercase", () => {
	const actual = "È";
	const key = 1;
	const expected = "D";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode text ascii lowercase", () => {
	const actual = "mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";
	const key = 1;
	const expected = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode text ascii uppercase", () => {
	const actual = "Mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";
	const key = 1;
	const expected = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode text unicode lowercase", () => {
	const actual = "mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";
	const key = 1;
	const expected = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode text unicode uppercase", () => {
	const actual = "Mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";
	const key = 1;
	const expected = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode 26", () => {
	const actual = "abc";
	const key = 26;
	const expected = "abc";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode 27", () => {
	const actual = "bcd";
	const key = 27;
	const expected = "abc";

	assertEquals(Caesar.decode(actual, key), expected);
});

Deno.test("caesar decode same source", () => {
	const actual = "Mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";
	const key1 = 1;
	const key2 = 27;

	assert(Caesar.decode(actual, key1) === Caesar.decode(actual, key2));
});

Deno.test("caesar decode encoded auto test", () => {
	for(let i = 0; i < 50; ++i) {
		const string = new Array(randomNumber(10, 20))
			.fill(0)
			.map(e => randomNumber(0, 25))
			.map(e => alphabetIndexToLetter(e))
			.join("");

		const key = randomNumber(0, 25);

		const encoded = Caesar.encode(string, key);

		const decoded = Caesar.decode(encoded, key);

		assertEquals(decoded, string, `original: ${string}\nkey: ${key}\nencoded: ${encoded}\ndecoded: ${decoded}`);
	}
});
