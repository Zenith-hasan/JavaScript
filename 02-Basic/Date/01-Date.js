// Let's talk about the Date object in JavaScript

// The date object is a datatype built into the javascript language.

//? Date Contructor

const date = new Date();
console.log(date)


//* Date.parse(date) - returns the time in milisecond since the UNIX EPOCH (1 January 1970)
console.log(Date.parse(date))


//* Date.UTC(date) - Date.UTC() method is a static method of the Date object that allows you to create a date object based on Coordinated Universal Time (UTC) values, rather than local time.

console.log(Date.UTC(2023))


//! Some important instance method of the Date Object

const today = new Date();

console.log(today.getDate()) // returns the day of the month for the specified date according to local time

console.log(today.getDay()) // retruns the day of the week 

console.log(today.getUTCDay())

console.log(today.getFullYear()) // returns the year of the specified date according to the local time

console.log(today.getHours()) // returns the hours in the specified date according to the local time

console.log(today.getMilliseconds()) //It is used to retrieve the milliseconds value of a date object, which represents the number of milliseconds elapsed since the last second.

console.log(today.getMinutes()) // Returns the month in the specified date according to local time.

console.log(today.getSeconds()) // Date.getSeconds() method is used to get the seconds component of a specified date and time, based on the local time zone. The return value will be an integer between (0 to 59) specifies seconds of a date.

console.log(today.getTime()) //Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.


console.log(today.toDateString()) // returns the "date" portion of the Date as a human-readable string.

console.log(today.toISOString()) // Returns date string in the ISO format

console.log(today.toLocaleDateString()) // Returns the "date" portion of the Date as a string, using the current locale's conventions.

console.log(today.toJSON()) // Converts a date to a string.

console.log(today.toLocaleString()) // Converts a date to a string, using the current locale's conventions

console.log(today.toLocaleTimeString()) // Returns the "time" portion of the Date as a string, using the current locale's conventions.

console.log(today.toString()) // Returns a string representing the specified Date object


console.log(today.toTimeString()) // Returns the "time" portion of the Date as a human-readable string.

console.log(today.toUTCString()) // Converts a date to a string, using the universal time convention.

console.log(today.valueOf())