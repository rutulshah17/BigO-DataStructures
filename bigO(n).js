//finding Nemo

//1 item in array
const nemo = ['nemo'];

//10 items in array
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

//n number of items in array
//declaring n array of 10,000 items and all with name Nemo
const large = new Array(10000).fill('nemo');
function findingNemo(array) {

  let t0 = performance.now();

  for(let i=0; i<array.length; i++) {
	  if(array[i] === 'nemo') {
		  console.log("Found Nemo")
	  }
  }

  let t1 = performance.now();

  console.log("time taken to find Nemo is " + (t1-t0) + " milliseconds")
}

//changing length of array changes the performance time

//where n is the no of inputs
findingNemo(large); //--> O(n) --> linear





//BIG O also depends on number of inputs

const boxes1 = ['box1','box2','box3','box4','box5','box6','box7'];
const boxes2 = ['box8','box9','box10','box11','box12','box13','box14'];


function compareTwoBoxes (boxes1, boxes2) {

	forEach (const box of boxes1) {
		console.log(box);
	}

	// boxes1.forEach( function(boxes1) {
	// 	console.log(boxes1);
	// });

	boxes2.forEach( function(boxes2) {
		console.log(boxes2);
	});
}

compareTwoBoxes(boxes1, boxes2); // --> O(a+b) coz of 2 inputs
