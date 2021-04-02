import { assertEquals, assertThrows } from "https://deno.land/std@0.92.0/testing/asserts.ts";
import { checkArraySameLength } from "../../../src/utils/array_utils.ts";

Deno.test("checkArraySameLength empty", () => {
	const a: any = [];
	const b: any = [];

	assertEquals(checkArraySameLength(a, b), undefined);
});

Deno.test("checkArraySameLength empty ''", () => {
	const a: any = [];
	const b = [""];

	assertThrows(() => checkArraySameLength(a, b));
});

Deno.test("checkArraySameLength '' empty", () => {
	const a = [""];
	const b: any = [];

	assertThrows(() => checkArraySameLength(a, b));
});


Deno.test("checkArraySameLength '' ''", () => {
	const a= [""];
	const b= [""];

	assertEquals(checkArraySameLength(a, b), undefined);
});


Deno.test("checkArraySameLength 1 '' 2 ''", () => {
	const a = [""];
	const b = ["", ""];

	assertThrows(() => checkArraySameLength(a, b));
});

Deno.test("checkArraySameLength empty 0", () => {
	const a: any = [];
	const b = [0];

	assertThrows(() => checkArraySameLength(a, b));
});

Deno.test("checkArraySameLength 0 empty", () => {
	const a = [0];
	const b: any = [];

	assertThrows(() => checkArraySameLength(a, b));
});


Deno.test("checkArraySameLength 0 0", () => {
	const a= [0];
	const b= [0];

	assertEquals(checkArraySameLength(a, b), undefined);
});


Deno.test("checkArraySameLength 1 0 2 0", () => {
	const a = [0];
	const b = [0, 0];

	assertThrows(() => checkArraySameLength(a, b));
});
