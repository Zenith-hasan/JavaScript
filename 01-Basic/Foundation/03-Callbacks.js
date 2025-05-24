// let's know about the callbaks in JavaScript

// A callback is a function passed as an argument to another function , to be invoked later.

// A simple example of the callbacks function

function greet(name, callback){
	console.log("Hello, " + name)
	callback();
}

function sayBye(){
	console.log("GoodBye!")
}

greet("Alix",sayBye)

//! Usecase of the callback function : 

	// Asyncronous operation 
	// Custom behaviour after an operation completes
	// Making functions more flexible and reusable

//! Types of callback is Syncronous and Asyncronous Callbacks.

// Example of Syncronous callbacks - called immdediately, during execution of the parent function.

// const arr = [1,2,3]
// arr.forEach(function (item) {
//   console.log(item);
// });

// Asynchronous Callback - Executed later, e.g., after an I/O task completes.

setTimeout(() => {
	console.log(`Executed after 2 seconds`)

},2000)



// Callback function


