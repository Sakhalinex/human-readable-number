// function toReadable (number) {
	
// 	const arr = [
// 		[
// 		 'zero', 'one', 'two', 'three', 'four',
// 		 'five', 'six', 'seven', 'eight', 'nine',
// 		 'ten', 'eleven', 'twelve', 'thirteen',
// 		 'fourteen', 'fifteen', 'sixteen', 'seventeen',
// 		 'eighteen', 'nineteen'
// 		],
// 		[
// 			'', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
// 		  'seventy', 'eighty', 'ninety'
// 		],
// 	]

// 	number = number.toString()
	
// 	if (number < 20) {
// 		return arr[0][number]
// 	} else if (number < 99 && number[1] == 0) {
// 		return arr[1][number[0] - 1]
// 	} else if (number < 100 && number[1] !== 0) {
// 		return arr[1][number[0] - 1] + ' ' + arr[0][number[1]]
// 	} else if (number < 999 && number[1] + number[2] == 0) {
// 		return arr[0][number[0]] + ' ' + 'hundred'
// 	} else if (number <= 999 && number[2] !== 0) {
// 		return arr[0][number[0]] + ' hundred ' + arr[1][number[1] - 1] + ' ' + arr[0][number[2]].replace('zero', '')
// 	}

// }




// 0 - 99

// module.exports = 

module.exports = function toReadable (number) {
	const arr = [
		[
		 'zero', 'one', 'two', 'three', 'four',
		 'five', 'six', 'seven', 'eight', 'nine',
		 'ten', 'eleven', 'twelve', 'thirteen',
		 'fourteen', 'fifteen', 'sixteen', 'seventeen',
		 'eighteen', 'nineteen'
		],
		[
			'twenty', 'thirty', 'forty', 'fifty', 'sixty',
		  'seventy', 'eighty', 'ninety'
		],
	]

	number = number.toString()


		if (number.length === 1 || number.length === 2) {
			if (number < 20) {
				return arr[0][number]
			} else if (number < 99 && number[1] == 0) {
				return arr[1][number[0] - 2]
			} else if (number < 100 && number[1] !== 0) {
				return `${arr[1][number[0] - 2]} ${arr[0][number[1]]}`
			} 
		}


		if (number.length === 3) {
			if (!(+number[1] + +number[2])) {
				return arr[0][number[0]] + ' hundred'
			} else if (number[1] + number[2] <= 19) {
				return arr[0][number[0]] + ' hundred ' + (+number[1] ? arr[0][number[1] + number[2]] : arr[0][number[2]])
			} else if (number[1] + number[2] > 19 && number[2] == 0) {
				return arr[0][number[0]] + ' hundred ' + arr[1][number[1] - 2]
			} else if (number[1] + number[2] > 19 && +number[1] * +number[2]) {
				return arr[0][number[0]] + ' hundred ' + arr[1][number[1] - 2] + ' ' + arr[0][number[2]]
			}
		} 
	

	
}

// console.log(toReadable(0))


// 121
// 120

