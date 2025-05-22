str4 = String(44)  // creating string using the string function which is string in type
const str = new String("hi") // creating object using string constructor which is a object

console.log(typeof(str4))
console.log(typeof(str))


// Chekcing a particular string present or not

function includesCheck( str , target){
	console.log("Original String : ", str)
	const validation = str.includes(target)
	if (validation == 0){
		console.log(`${target} don't exist in the String!`)

	}else{
		console.log(`${target} exist in the string!`)
	}
}
includesCheck("Hi Eren","Zoro")

// 	