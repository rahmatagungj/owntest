
# OwnTest

Simple JavaScript Testing Framework with only single file and zero configuration.

```bash
Usage:

	owntest [options]

Options:

	init            : initialize ownTest

	--test          : run a single test file

	-h | --help     : show help

	-v | --version  : show version
```

## To Use
1. Initialize your ownTest project:
```bash
node owntest.js init
```
2. Create test file with format `name.test.js`

> You can put file in any folder but recommended on `__test__`.

3. Write test code in test file.
4. Run your test file:
  	- Run `owntest.js` to run all test.
  	- Run `owntest.js --test=name.test.js` to run single test.


## Expect

Expect to give you access to a number of "matches" that will allow you to validate things, including several methods.


### Methods

All of the methods below can be used with a negation format like `not()`, example:

```js

// normal

expect(1).toBe(1);

// negation

expect(1).not().toBe(2);

```

- `expect(actual).toExist()`

Expects that the actual value is not `undefined` or `null`.

- `expect(actual).toBe(expected)`

Expects that the actual value is equal to the expected value.

- `expect(actual).toEqual(expected)`

Expects that the actual value is equal to the expected value.

- `expect(actual).toBeType(expected)`

Expects that the actual value is of the same type as the expected value.

- `expect(actual).toBeTruthy()`

Expects that the actual value is truthy.

- `expect(actual).toBeFalsy()`

Expects that the actual value is falsy.

- `expect(actual).toBeGreaterThan(expected)`

Expects that the actual value is greater than the expected value.

- `expect(actual).toBeLessThan(expected)`

Expects that the actual value is less than the expected value.

- `expect(actual).toBeCloseTo(expected)`

Expects that the actual value is close to the expected value.

- `expect(actual).toBeInstanceOf(expected)`

Expects that the actual value is an instance of the expected value.

- `expect(actual).toBeOneOf(expected)`

Expects that the actual value is one of the expected values.

- `expect(actual).toBeBetween(expected, expected)`

Expects that the actual value is between the expected values.

- `expect(actual).toBeLessThanOrEqual(expected)`

Expects that the actual value is less than or equal to the expected value.

- `expect(actual).toBeGreaterThanOrEqual(expected)`

Expects that the actual value is greater than or equal to the expected value.

- `expect(actual).toThrowError()`

Expects that the actual value throws an error.

- `expect(actual).toBeNull()`

Expects that the actual value is `null`.

- `expect(actual).toBeUndefined()`

Expects that the actual value is `undefined`.

- `expect(actual).toBeNaN()`

Expects that the actual value is `NaN`.

- `expect(actual).toBeFinite()`

Expects that the actual value is `finite`.

- `expect(actual).toBePositive()`

Expects that the actual value is `positive`.

- `expect(actual).toBeNegative()`

Expects that the actual value is `negative`.

- `expect(actual).toBeZero()`

Expects that the actual value is `zero`.

- `expect(actual).toBeGreaterThanZero()`

Expects that the actual value is `greater than zero`.

- `expect(actual).toBeLessThanZero()`

Expects that the actual value is `less than zero`.

- `expect(actual).toBePositiveInfinity()`

Expects that the actual value is `positive infinity`.

- `expect(actual).toBeNegativeInfinity()`

Expects that the actual value is `negative infinity`.

- `expect(actual).toContain(expected)`

Expects that the actual value contains the expected value.

- `expect(actual).toThrow(expected)`

Expects that the actual value throws the expected value.

- `expect(actual).toHaveReturned(expected)`

Expects that the actual value has returned the expected value.

- `expect(actual).toHaveLength(expected)`

Expects that the actual value has the expected length.

- `expect(actual).stringMatch(expected)`

Expects that the actual value matches the expected value.