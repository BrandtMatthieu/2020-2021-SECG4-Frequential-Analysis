import { assertEquals, assertThrows } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { checkArrayNotEmpty } from "../../../src/utils/array_utils.ts";

Deno.test("checkArrayNotEmpty empty", () => {
	const actual: any[] = [];

	assertThrows(() => checkArrayNotEmpty(actual));
});

Deno.test("checkArrayNotEmpty empty string", () => {
	const actual= [""];

	assertEquals(checkArrayNotEmpty(actual), undefined);
});

Deno.test("checkArrayNotEmpty 0", () => {
	const actual= [0];

	assertEquals(checkArrayNotEmpty(actual), undefined);
});

Deno.test("checkArrayNotEmpty 1", () => {
	const actual= [1];

	assertEquals(checkArrayNotEmpty(actual), undefined);
});
