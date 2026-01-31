const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./practice');

test('capitalize first letter', () => {
	expect(capitalize(man)).toBe('Man')
});

test('reverses strings', () => {
	expect(reverseString('word')).toBe('drow')
});

test('adds two numbers', () => {
	expect(calculator.add(1, 2)).toBe(4)
});

test('subtract two numbers', () => {
	expect(calculator.subtract(3, 1)).toBe(2)
});

test('multiply two numbers', () => {
	expect(calculator.multiply(3, 4)).toBe(12)
});

test('divide two numbers', () => {
	expect(calculator.divide(8, 4)).toBe(2)
});

test('ciphers word with unchanged case and punctuation', () => {
	expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
});

test('returns object with average, min, max and length properties', () => {
	const object = analyzeArray([1,8,3,4,2,6]);

	object == {
   		average: 4,
   		min: 1,
   		max: 8,
   		length: 6
	};
});