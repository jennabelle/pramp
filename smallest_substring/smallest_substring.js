// Given an array with unique characters arr and a string str, find the smallest substring of str containing all characters of arr.

// Example:
// arr: [x,y,z], str: xyyzyzyx
// result: zyx

// Implement your solution and analyze the runtime complexity

var arr = [ 'x', 'y', 'z' ];
var str = 'xyy';

function smallest_substring(arr, str) {

	var possible = [ 'x', 'y' ];

	// iterate over str
	for (var i = 0; i < str.length; i++) {

		console.log('current character: ', str[i]);

		console.log('first conditional: ', arr.indexOf(str[i]) !== -1);

		console.log('second conditional: ', possible.indexOf('y') === -1);

		// if character is in array, and, if character not already in 'possible' array
		if ( (arr.indexOf(str[i]) !== -1) && (possible.indexOf(str[i]) === -1) ) {

			console.log('inside if!');
			// // add to possible
			// possible.push( str[i] ); // q: why isn't .concat() working?!
			// console.log('possible: ', possible);
		}
	}

};

// test in node
smallest_substring(arr, str);