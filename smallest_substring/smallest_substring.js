// Given an array with unique characters arr and a string str, find the smallest substring of str containing all characters of arr.

// Example:
// arr: [x,y,z], str: xyyzyzyx
// result: zyx

// Implement your solution and analyze the runtime complexity

var arr = [ 'x', 'y', 'z' ];
var str = 'xyyzyzyx';

function smallest_substring(arr, str) {

	var possible = '';

	// iterate over str
	for (var i = 0; i < str.length; i++) {

		// if in array
		if (arr.indexOf(str[i]) !== -1) {

			console.log('str[i]: ', str[i]);

			// assign to possible
			possible.concat(str[i]); // why isn't concat working?!
			console.log('possible: ', possible);
		}
	}

};

// test in node
smallest_substring(arr, str);