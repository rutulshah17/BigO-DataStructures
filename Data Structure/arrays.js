const strings = ['a', 'b', 'c', 'd'];

strings(2);

//Operations in array

//1. Push
strings.push('e'); // --> O(1)

//2. Pop
strings.pop(); // --> O(1)

//3. Unshift
strings.unshift('x'); // --> O(n)

//4. Splice, start at array of index 2, 0 is do not delete anything and add 'alien to it'
strings.splice(2, 0, 'alien'); // --> O(n)
