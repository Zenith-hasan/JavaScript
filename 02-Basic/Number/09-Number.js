// The javascript Number object represent numerical data as floating-point numbers.

//  No need to worry about Number objects because the browser automatically converts numbers literals to instances of the number class.

// A JavaScript number is always stored as a floating-point value(decimal number). 


// Some Important instance method of the Number class 


//? to string

const num = 555;
console.log(num.toExponential()) // 5.55e+2

// There is also a optional parameter where you can specify , how much digits you want after the decimel point

const decimal = 5
console.log(num.toExponential(decimal))

//?  toFixed() - formats a number with a specific number of digits to the right of the decimal.

function toFixed( originalNum){
	console.log("Original Number:" , originalNum);
	newNum = originalNum.toFixed()
	console.log("Fixed Number :" , newNum )
}
toFixed(34.444)

// We can also pass the parameter that how much we want to take after the decimal point . it will automatically round=off the number as well.

const num02 = 465.7665545443
console.log(num02.toFixed(3)) 


// toString() - returns the string representation of number value

const num03 = 56.5555
console.log(typeof(num03))

const num04 = num03.toString()
console.log(typeof(num04))

// valueOf() - returns the number's value

const num05 = 44444
const num06 = num05.valueOf(num05)
console.log(num06)