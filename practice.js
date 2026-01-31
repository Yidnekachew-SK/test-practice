function capitalize (string) {
	let capitalizedWord = string[0].toUpperCase() + string.slice(1)

	return capitalizedWord;
}

function reverseString (string) {
	let reversedWord = '';
	for(let i = string.length - 1; i >= 0; i--){
		reversedWord += string[i];
	}

	return reversedWord;
}

const calculator = {
	add(a, b) {
		return a + b;
	},

	subtract(a, b) {
		return a - b;
	},

	multiply(a, b) {
		return a * b;
	},

	divide(a, b) {
		return a / b;
	},
}

function caesarCipher (string, shiftFactor) {
	let encryptedWord = "";
	let shift = shiftFactor % 26;
	for(let i = 0; i < string.length; i++){
		let charCode = string.charCodeAt(i);

		if (charCode >= 65 && charCode <= 90) {
			encryptedWord += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
		} else if (charCode >= 97 && charCode <= 122) {
			encryptedWord += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
		} else {
			encryptedWord += string[i];
		}
	}
	return encryptedWord;
}

function analyzeArray (array) {
	const average = function(){
		let avgValue = 0;
		for(let i = 0; i < array.length; i++){
			avgValue += array[i];
		}
		return avgValue / array.length;
	};

	const max = function(){
		let maxValue = array[0];
		for(let i = 0; i < array.length; i++){
			if (array[i] > maxValue) {
				maxValue = array[i];
			}
		}
		return maxValue;
	};

	const min = function(){
		let minValue = array[0];
		for(let i = 0; i < array.length; i++){
			if (array[i] < minValue) {
				minValue = array[i];
			}
		}
		return minValue;
	};

	return {
		average: average(),
		max: max(),
		min: min(),
		length: array.length
	};
}

module.exports = {capitalize,reverseString, calculator, caesarCipher, analyzeArray};