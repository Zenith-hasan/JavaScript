// find() - Array.find() method executes a callback function on each array element and retrieves the first element in the array that satisfies a specified condition of the callback function

const num = [4, 5, 6, 7, -3, 6, 7, -6, -8, -5];

const result = num.find((val) => val < 0);
console.log(result); // returns the first occuence of the satisfied condition

// findIndex() - to find an index of the element satisfying the condition

const fruit = ["banana", "orange", "litchi", "mango", "banana"];

// find the first occuerence of the satisfied arguments
const favFruit = fruit.findIndex((val) => val === "mango");
console.log(favFruit);

// find the last index of the desierd query
const favFruit02 = fruit.findLastIndex((val) => val === "banana");
console.log(favFruit02);

// finding the last index of a even number

const num02 = [3, 4, 5, 6, 7, 8, 9, 12];
const findNum = num02.findLastIndex((val) => val % 2 === 0);
console.log(findNum);

// finding a string

const fruit02 = ["banana", "orange", "litchi", "mango", "banana", "avacado"];
const findFruit = fruit02.findLastIndex((val) => val.startsWith("a"));
console.log(findFruit);

// flat()- Array.flat() method in JavaScript is used to create a new array by flattening a nested array up to specified depth. Flattening an array means converting a multidimensional array into a one-dimensional array by concatenating all nested arrays or sub-arrays.

const arr03 = [4, 5, 6, 7, [5, 67, [8, 8,[4,5,6]]]];
const flatarr = arr03.flat();
console.log(flatarr); // if you dont specify the depth , then it automatically do to 1 depth.

const flatarr02 = arr03.flat(3) // you also can specify the depth in argument

console.log(flatarr02)

// flatMap() - Array.flatMap() method is used to create a flat array by applying a callback function to each element of the original array. It doesn't modify the original array instead, it returns a new array with the results of applying the provided callback function to each element.

const numbers = [5, , , 11, 15];
let result03 = numbers.flatMap(num => num ? [num * 2] : []);
console.log(result03)

const nestedArray = [[1,2],[3,4],[5,6]];
let result04 = nestedArray.flatMap(innerarray => innerarray.map( (num) => num*2 ))

console.log(result04)

// includes() - returns a boolean value if the array contains the specific element

// Array includes() method is used with the arrays to check if a particular element is present in the array. It returns a boolean value as a result: true if thr element is found in the array, and false if it is not present. This method is case sensitive for strings and checks for object references.

const array04 = [3,4,5,6,7,8]
console.log(array04.includes(9))