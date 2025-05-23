// Let's talk about the Math object in JavaScript. 

//* The JavaScript math object provides properties and methods for mathemaitcal constants and functions.

//* All the properties and methods of Math are static and can be called by using Math as an object without creating it.

console.log(Math.PI)
console.log(Math.sin(45)) // this is not the sin 45 degree . In javascript Math.sin() expects angles in radians , not degree. 

console.log( Math.sin(45 * Math.PI/180)) // this is the right way to calculate the value of a particular degree

//! Some JavaScript Math properties


console.log(Math.E) // eular constant

console.log(Math.LN2) // natural logarithms of 2 , approximately 0.693

console.log(Math.LN10) // natural logarithms of 10 , approximately 2.302

console.log(Math.PI)

console.log(Math.SQRT1_2) // The square root of 1/2, equivalently, 1 over the square root of 2, is approximately 0.707.

console.log(Math.SQRT2) // the squre root of 2 , appoximately 1.414

