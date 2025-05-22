// String in JavaScript

// function that returns the length of a string

function getLength(str) {
  console.log("Original String :", str);
  console.log("Length of String :", str.length);
}
getLength("EduCode");

// find the index of the first occuerence

function findIndexof(str, target) {
  console.log("Original String: ", str);
  console.log("Index:", str.indexOf(target));
}
findIndexof("Hello World", "World");

/*
Note : This method is case sensitive. If you type "world" instead of "World" it will return -1. 

If any target string occur more than one time it will give the index of the first occurence.

*/

// find the index of the last occerence of a particular string

function lastIndexof(str, target) {
  console.log("Original String:", str);
  console.log("Last Index :", str.lastIndexOf(target));
}

lastIndexof("Hello Eren Eren Eren", "Eren");

// getting a slice of an string

function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After Slice:", str.slice(start, end));
}
getSlice("Hello Eren", 6, 11);

// Custom function to cut certain portion of an string

function cutIt(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

const value = "Zenith Avro";
console.log(cutIt(value, 0, 6));

let ans = value.slice(0, 6);
console.log(ans);

// replacing a certain portion of string

function repalceStr(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replacement:", str.replace(target, replacement));
}
repalceStr("Hello Eren", "Eren", "Luffy");

// spiliting a string

function splitStr(str, separator) {
  console.log("Original String:", str);
  console.log("After Split: ", str.split(separator));
}
const str = "Hello Eren is my favorite hero";
splitStr(str, " ");

// triming a string

function trimStr(str) {
  console.log("Original String: ", str);
  console.log("After trimming:", str.trim());
}
const str2 = "    Hello World , Hello JavaScript     ";
console.log(str2.length);
trimStr(str2);

// convert to upperCase letter

function toUpper(str) {
  console.log("Original String :", str);
  console.log("After UpperCase Method:", str.toUpperCase());
}
toUpper("Eren Yeager")

// convert to lowerCase letter

function tolower(str){
	console.log("Original String: ",str)
	console.log("After Lowercase:",str.toLowerCase())
}
tolower("EReN YeAGeR")



// Joining one or more string together

const joinOps = ["customer01","customer02" ,"customer03"]
console.log(joinOps.join("-"))


function replace_All(str, replecent, replacetaker){
	console.log("Original String: ",str)
	console.log("Replaced All String:", str.replaceAll(replecent,replacetaker))
}
replace_All("Hello Eren Eren Eren ","Eren", "Zoro")