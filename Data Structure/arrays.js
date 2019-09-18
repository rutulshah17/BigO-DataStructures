const strings = ['a', 'b', 'c', 'd'];

strings(2);

//Operations in array

//1. Push
//we can use append or push functions it may sometimes have time complexity of O(n),
// since arrays are allocated dynamically in JS, it copies the array to a totally different location occupying double space
//and looping over the items of an array to copy to another location which is a O(n)
strings.push('e'); // --> O(1)

//2. Pop
strings.pop(); // --> O(1)

//3. Unshift
strings.unshift('x'); // --> O(n)

//4. Splice, start at array of index 2, 0 is do not delete anything and add 'alien to it'
strings.splice(2, 0, 'alien'); // --> O(n)
