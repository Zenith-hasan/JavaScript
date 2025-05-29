// A Promises are one of the most important concepts in modern JavaScript for handling asyncrounous operations.

// A promise is an object that represents the eventual completion (or failure) of an asynchronoous operation and it's resulting value.It's a way to handle asynchrounous code without falling inth the callback hell.

//! States of Promises

//There are three states of promises :

/*
	01. pending
	02. fulfilled
	03. rejected

Once a promise is fullfilled or rejected, it becomes "settled" and cannot change states.

*/

// An example of promises

const myPromise = new Promise((resolve, reject) => {
  if (operationSuccessful) {
    resolve(result);
  } else {
    reject(error);
  }
});

// Consuming Promises

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`Operation Completed!`);
  });
const promise = new Promise(function (resolve) {});

console.log(promise);
