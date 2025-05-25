//* JSON ( JavaScript Object Notation ) is a lightweight data-interchange format that's easy to read and write for humans and easy to parse and generate for machines.


//* In JS, the global "JSON" object provides methods to convert data to / from JSON format.

//* The JSON object is not a constructor . You can't create a new JSON objet like we did for the other's obeject in JS.

//* Like const json = new JSON() this is not allowed. JSON is a static object with two main methods:

/*

		01. JSON.stringify() - Convert's a JS object to a JSON string. 
		02. JSON.parse() - Convert's a JSON string into a JS Object.

		*/


		// Example of the JSON.stringfy()

const obj = {name :"John", age:30,admin : true}

console.log(JSON.stringify(obj))


// Example of JSON.parse()

const jsonStr = '{ "name":"Zenith","age": 21}';
const user = JSON.parse(jsonStr)
console.log(user)