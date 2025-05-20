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