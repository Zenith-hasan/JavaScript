// The javascript Array object let's you store multiple values in a single variable. An array is used to store a sequential collection of multiple elements of same or differnt data types.


// Array constructor

const arr = new Array(3,4,5,6)
console.log(arr)

// using the array literals

const arr02 = ["apple","banana","litchi"]
console.log(arr02)
// Pushing element to an array

function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After Push Method:", arr);
}
pushExample([1, 2, 3], 4);

// poping element from the array

function popExample(arr) {
  console.log("Original Array: ", arr);
  arr.pop();
  console.log("After pop method :", arr);
}
popExample([2, 3, 4, 5]);

// shift - pop the first element of the array

function shiftExample(arr) {
  console.log("Original Array:", arr);
  arr.shift();
  console.log("After the shift method :", arr);
}

// unshift - add element at the begining of the array

function unshiftExample(arr, element) {
  console.log("Origal Array : ", arr);
  arr.unshift(element);
  console.log("After unshift method: ", arr);
}
unshiftExample([4,5,6],8)

// performing concatenation of arrays 

const firstArr = [3,4,5]
const lastArr = [6,7,8]
const finalArr = firstArr.concat(lastArr)
console.log(finalArr)