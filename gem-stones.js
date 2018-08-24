'use strict';

let _ = require('lodash');

function gemstones(arr) {
	if(arr.length == 1) {
		return arr[0].split('').length; 
	}

	let mer;
	for(let i=1; i<arr.length; i++) {
		let prev = arr[i-1].split('');
		let curr = arr[i].split('');
		mer = _.intersection(prev, curr);
		arr[i] = mer.join(''); // back to str

		/*
		// test
		console.log('---');
		console.log(prev);
		console.log(curr);
		console.log(mer);
		*/
	}

	return mer.length;
}


let arr = [ 'eeabg', 'abcdde', 'baccd'];
//let arr = ['abc'];
let out = gemstones(arr);
console.log(out);
