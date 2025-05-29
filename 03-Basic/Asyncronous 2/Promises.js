// A promise is a JavaScript object representing the eventual completion(or failure) of an asyncronous operation and it's resulting value.

//! Before promises, callback were used, which often led to callback hell.Promises solve this by providing a clearner,more structered way to handle asynchronous tasks.

// let promise= new Promise(function(resolve,reject) {
// 	if (true){
// 		resolve(result)
// 	}else{
// 		reject(error)
// 	}
// })

// promise
// 	.then(function(msg){
// 		console.log(msg)
// 	})

// promisify an function

// function promisifyOwnSetTimeout(duration) {
// 	const p = new Promise(function (resolve) {
// 		setTimeout( function() {
// 			resolve();
// 		})
// 	})
// 	return p
// }

// const ans = promisifyOwnSetTimeout(3000)
// ans.then( function(){
// 	console.log(`Timeout is Done.`)
// })

// Creating wraping Async operation

function wait(ms) {
  return new Promise((reslove) => setTimeout(reslove, ms));
}

wait(1500).then(() => console.log(`1.5 Second Later.`));

// real world example

function fetchUser(userID) {
  return fetch(`/api/users/${userID}`).then((response) => {
    if (!response.ok) throw new Error(`User Not Found`);
    return response.json();
  });
}

fetchUser(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
