/**
 * Checks if a number is an actual number.
 * @param n the number to check.
 * @throws an error if the number is infinite or NaN.
 */
export function checkIsActualNumber(n: number): void {
	checkIsNotNaN(n);
	checkIsNotInfinite(n);
}

/**
 * Checks if a number is positive.
 * @param n the number to check.
 * @throws an error if the number isn't positive.
 */
export function checkIsActualPositiveNumber(n: number): void {
	checkIsNotNaN(n);
	checkIsNotInfinite(n);
	checkIsNotNegative(n);
}

/**
 * Checks if a number is not infinite.
 * @param n the number to check.
 * @throws an error if the number is infinite.
 */
export function checkIsNotInfinite(n: number): void {
	if(Number.isFinite(n)) {
		throw new Error("Number cannot be infinite");
	}
}

/**
 * Checks if a number is not NaN.
 * @param n the number to check.
 * @throws an error if the number is NaN.
 */
export function checkIsNotNaN(n: number): void {
	if(Number.isNaN(n)) {
		throw new Error("Number cannot be infinite");
	}
}

/**
 * Checks if a number is not negative.
 * @param n the number to check.
 * @throws an error if the number is negative.
 */
export function checkIsNotNegative(n: number): void {
	if(n < 0) {
		throw new Error("Number cannot be negative");
	}
}

/**
 * Checks if a number is not 0.
 * @param n the number to check.
 * @throws an error if the number is 0.
 */
export function checkIsNotNull(n: number): void {
	if(n === 0) {
		throw new Error("Number cannot be 0");
	}
}

/**
 * Checks if a number is positive and finite.
 * @param n the number to check.
 * @throws an error if the number isn't positive or finite.
 */
export function checkIsPositiveNumber(n: number): void {
	checkIsNotNaN(n);
	checkIsNotInfinite(n);
	checkIsNotNegative(n);
	checkIsNotNull(n);
}

/**
 * Generates a random integer number between two numbers.
 * @param a the minimum value.
 * @param b the maximum value.
 * @returns the random number generated.
 */
export function randomNumber(a: number, b: number): number {
	const min = Math.min(a, b);
	const max = Math.max(a, b);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
