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
