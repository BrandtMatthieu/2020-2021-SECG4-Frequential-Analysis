import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";
import { Caesar } from "../src/Caesar.ts";

Deno.test("caesar encode letter ascii lowercase", () => {
	const actual = "a";
	const key = 1;
	const expected = "b";

	assertEquals(Caesar.encode(actual, key), expected);
});

Deno.test("caesar encode letter ascii uppercase", () => {
	const actual = "A";
	const key = 1;
	const expected = "B";

	assertEquals(Caesar.encode(actual, key), expected);
});

Deno.test("caesar encode letter unicode lowercase", () => {
	const actual = "à";
	const key = 1;
	const expected = "b";

	assertEquals(Caesar.encode(actual, key), expected);
});

Deno.test("caesar encode letter unicode uppercase", () => {
	const actual = "À";
	const key = 1;
	const expected = "B";

	assertEquals(Caesar.encode(actual, key), expected);
});

Deno.test("caesar encode text ascii lowercase", () => {
	const actual = "lorem ipsum dolor sit amet, consectetur adipiscing elit.";
	const key = 1;
	const expected = "mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";

	assertEquals(Caesar.encode(actual, key), expected);
});

Deno.test("caesar encode text ascii uppercase", () => {
	const actual = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
	const key = 1;
	const expected = "Mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";

	assertEquals(Caesar.encode(actual, key), expected);
});

Deno.test("caesar encode text unicode lowercase", () => {
	const actual = "lôrèm ípsùm dòlór sït âmèt, cônséctétùr ádípìscíng élít.";
	const key = 1;
	const expected = "mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";

	assertEquals(Caesar.encode(actual, key), expected);
});

Deno.test("caesar encode text unicode uppercase", () => {
	const actual = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
	const key = 1;
	const expected = "Mpsfn jqtvn epmps tju bnfu, dpotfdufuvs bejqjtdjoh fmju.";

	assertEquals(Caesar.encode(actual, key), expected);
});
