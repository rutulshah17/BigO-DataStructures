//--QUESTION--
//given 2 arrays, create A FUNCTION that lets user know (true/false)
//whether these two arrays contain any common items

//----Answer----
//would be BigO(n^2), since it has nested for loop
// in this case, BigO(a*b) --> time complexity
// BigO(1) --> space complexity (since no variables are created except for ones in for loop)
const array1 = ['a','b','c','d'];
const array2 = ['x','y','z'];
function compareTwoArrays(array1, array2) {
	for (let i=0; i<array1.length; i++) {
		for(let j=0; j<array2.length; j++) {
			if(array1[i] === array2[j]) {
				console.log(array1[i], array2[j]);
				return true;
			}
		}
	}
	return false;
}

compareTwoArrays(array1, array2);

//better solution, if we see we are comparing and need nested loop, usually we convert an array to be a Object
//and then search that object which is BigO(a+b) --> time complexity
//BigO(n) --> space complexity, since we are using object to hold our array
function compareTwoArrays1(array1, array2) {
	let map = {};

	//we should get {a: true, b: true, c: true, x: true}
	for(let i=0; i<array1.length; i++) {
		if(!map[array1[i]]) {
			let item = array1[i];
			map[item] = true;
		}
	}

	//searching the elements of map in array2
	for(let j=0; j<array2.length; j++) {
		if(map[array2[j]]) {
			console.log(map[array1[j]]);
			return true;
		}
	}
	return false
}

//best Solution, less readble though
function compareTwoArrays2(array1, array2) {
	return array1.some(item => array2.includes(item));
}
compareTwoArrays2(array1, array2);
