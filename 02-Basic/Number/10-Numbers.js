// Some Static methods of the number

const num = 77;
console.log(Number.isNaN(num));

// creating a function that show the given input number or not

function isNum(num) {
  if (num == NaN) {
    console.log(`You need to enter a number!`);
  } else {
    console.log(`You entered : ${num}`);
  }
}
isNum(NaN);

// isFinite() - checks whether the number is finite or not

const num02 = 444;
console.log(Number.isFinite(num02));


// isInteger() - returns boolean when the number is an integer value
const Val = 90.909090909;
console.log(Number.isInteger(Val));


// isSafeInteger() - ensures that the integer is a safe integer.
const Val03 = 57329573298097809780;
console.log(Number.isSafeInteger(Val03))


// parseFloat() - parses the float value from the string

console.log(parseFloat(555.4544))
const val04 = parseFloat("9.999")
console.log(typeof(val04))

// NOTE :  If the string does not start with a valid number, or if the first character of the passed string cannot be converted, "NaN" is returned. It ignores any leading or trailing white spaces before and after the string.


// parseInt () - parse the integer value from the string

const val05 = parseInt("34Ad",10)
console.log(val05)

// The Radix parameter represents the base in a mathematical numeral system, and must be an integer within the range of 2 to 36, inclusive. If the input string is invalid, or if the specified radix is outside of this range, the method returns 'NaN'.