import { fixKey } from "./key_utils.ts";

/**
 * Represents an array with a fixed length
 * https://github.com/microsoft/TypeScript/issues/26223#issuecomment-410642988
 */
export interface FixedLengthArray<T extends unknown, L extends number> extends Array<T> {
	0: T;
	length: L;
}

/**
 * Shifts all elements of an array to the right.
 * [a, b, c, d] => [d, a, b, c]
 * @param arr the array to shift the elements in.
 * @param times the amount to shifts all the elements for.
 * @returns the shifted array.
 */
export function shiftArrayRight<T>(arr: T[], times: number): T[] {
	times = fixKey(times, arr.length);
	arr = arr.slice();

	for(let i = 0; i < times; ++i) {
		if(arr.length >= 1) {
			const temp = arr.pop()!;
			arr.unshift(temp);
		}
	}

	return arr;
}

/**
 * Shifts all elements of an array to the left.
 * [a, b, c, d] => [b, c, d, a]
 * @param arr the array to shift the elements in.
 * @param times the amount to shifts all the elements for.
 * @returns the shifted array.
 */
export function shiftArrayLeft<T>(arr: T[], times: number): T[] {
	times = fixKey(times, arr.length);

	return [...arr.slice(times), ...arr.slice(0, times - arr.length)];
}

/**
 * Executes an operation on two elements at the same index in an array.
 * @param a an array of numbers.
 * @param b an array of numbers.
 * @param c a function to execute on two numbers.
 * @returns the modified array with the function applied.
 */
export function arrayOperator(a: number[], b: number[], c: (a: number, b: number) => number): number[] {
	checkArraySameLength(a, b);

	return a.map((e, i) => c(a[i], b[i]));
}

/**
 * Returns an array with the sum of every element at the same place.
 * @param a an array with numbers.
 * @param b an array with numbers.
 * @returns an array with the sum of every element at the same place.
 */
export function getArraySum(a: number[], b: number[]): number[] {
	return arrayOperator(a, b, (a, b) => a + b);
}

/**
 * Returns an array with the difference between every element at the same place.
 * @param a an array with numbers.
 * @param b an array with numbers.
 * @returns an array with the difference between every element at the same place.
 */
export function getArrayDifference(a: number[], b: number[]): number[] {
	return arrayOperator(a, b, (a, b) => a - b);
}

/**
 * Returns an array with the multiplication of every element at the same place.
 * @param a an array with numbers.
 * @param b an array with numbers.
 * @returns an array with the multipliication of every element at the same place.
 */
export function getArrayMultiplication(a: number[], b: number[]) {
	return arrayOperator(a, b, (a, b) => a * b);
}

/**
 * Returns an array with the quotient of every element at the same place.
 * @param a an array with numbers.
 * @param b an array with numbers.
 * @returns an array with the quotient of every element at the same place.
 */
export function getArrayQuotient(a: number[], b: number[]) {
	return arrayOperator(a, b, (a, b) => a / b);
}

/**
 * Returns the average difference between two frequencies arrays.
 * @param a an array with numbers.
 * @param b an array with numbers.
 * @returns the average difference between the two arrays.
 */
export function getAvgArrayDifference(a: number[], b: number[]): number {
	if(a.length === 0) {
		return 0;
	}

	return getArrayDifference(a, b)
		.map(e => Math.abs(e))
		.reduce((p, c) => p + c, 0)
		/ a.length;
}

/**
 * Checks two arrays are the same length, or throws an error.
 * @param a the first array.
 * @param b the second array.
 * @throws an error if the two arrays aren't the same size.
 */
export function checkArraySameLength<T>(a: T[], b: T[]): void {
	if(a.length !== b.length) {
		throw new Error("Arrays do not have the same length");
	}
}

/**
 * Checks an array isn't empty.
 * @param arr the array to check.
 * @throws an error if the array is empty.
 */
export function checkArrayNotEmpty<T>(arr: T[]): void {
	if(arr.length === 0) {
		throw new Error("Array is empty");
	}
}

/**
 * Returns the element from the array at the provided index, looping trough the array if the index is out of bounds.
 * @param arr the array to pick the element from.
 * @param index the index of the element to pick.
 * @returns the selected element in the array.
 */
export function getArrayAt<T>(arr: T[], index: number): T {
	checkArrayNotEmpty(arr);
	index = fixKey(index, arr.length);

	return arr[index];
}

/**
 * Returns the value that's standing out in the array.
 * @param arr the array to check.
 * @returns the element that's standing out.
 */
export function getIndexArrayRepeatingStandingoutValue(arr: (number | null)[]): number {
	const avgs = new Array(arr.length)
		.fill(0)
		.map((e, i) => {
			if(arr[i] === null || i < 2) {
				return null;
			}
			const a = arr.filter((f, j) => (f !== null) && (j % i !== 0)) as number[];
			return a.reduce((p, c) => p + c, 0) / a.length;
		});

	const diffs = arr
		.map((e, i) => {
			if(e === null) {
				return null;
			}
			return Math.abs(e - avgs[i]!);
		});
	
	const maxDiff = Math.max(... diffs as number[]);

	return diffs.indexOf(maxDiff);
}
