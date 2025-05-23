//! JavaScript Math Methods

console.log(Math.abs(-3.44)) // Returns the absolute value of a number

console.log(Math.acos(.5))

console.log(Math.ceil(3.00000000001)) // return the smallest larger integer value than the number passed as an argument

const numbers = (12,4,56,7,8,44,5,66,77,88,99,100)
console.log(Math.max(numbers))


console.log(Math.cos(60 * Math.PI / 180)) // gives the value of cos 60 


// returns the integer part of the number
console.log(Math.trunc(3.43333))
console.log(Math.trunc(354.43333))


// returns -1 or 1 indicating the sign of the number
console.log(Math.sign(-33))  // -1 means the number is negative
console.log(Math.sign(4))	// 1 means the number is positive


// round() - returns the value of a number rounded to the nearest integers
console.log(Math.round(4.222222))
console.log(Math.round(4.5555))
console.log(Math.round(3.7982))


// random() - returns the pseudo-random number between 0 and 1
console.log(Math.random())


//pow() - returns the base to the exponet power that is, base exponent.
console.log(Math.pow(5,2))


// min() - returns the smallest of zero or more numbers
console.log(Math.min(3,2,34,4,56,4,3,2,4,54,345,312,-3445))

// floor() - returns the largest integer less then or equal to a numbers
console.log(Math.floor(3.999))


// cbrt() - retuns the cubic root a particluar numbers
console.log(Math.cbrt(343))


// e^x 
console.log(Math.exp(3))


// log10() - base-10 logarithms
console.log(Math.log10(20))

