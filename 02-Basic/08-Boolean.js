// The javascript Boolean object represents two values , either "true" or "false". 

// boolena constructor

const val = new Boolean(0);
console.log(val)


// boolean to string 

console.log(val.toString())  // returns a string 


// value of boolean

console.log(val.valueOf()) // returns a primitive value of boolean

//! There are six falsy value 

/*
	01. false
	02. null
	03. ""  or empty string
	04. undefined
	05. 0
	06. NaN

*/



const bool = new Boolean(-0)
console.log(bool.valueOf()) // so -0 is also a falsy value