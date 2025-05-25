// JSON(JavaScript object Notation) is a lightweight, text-based data interchange format that's become the standard for the web API's and data storage.

/* 
JSON represent six data types : 
	01. string 
	02. numbers 
	03. booleans 
	04. null 
	05. objects 
	06. arrays
*/

// Creating a JSON

const jsonData = '{"name":"Cane","age": 29,"city":"Chicago"}';
console.log(jsonData.name);
const parseObject = JSON.parse(jsonData);
console.log(parseObject.name);

// advanced JSON.stringify() freature - JSON.stringify() accepts optional parameter for customization. The second parameter (replacer) can be a function or array that filters that filter's or transform values.

const data = {
  name: "David",
  password: "secretpass232",
  age: 22,
  salary: 75000,
};

const filtered = JSON.stringify(
  data,
  (key, value) => {
    if (key === "password") return undefined;
    return value;
  },
  3
);

console.log(filtered);

// Use Case of JSON

//
//! JSON is extensively used for the API communication, configuration files, data storage and state management. When fetching data from APIs, responses typically arrive as JSON strings. Local Storage also commonly used JSON for persisting complex data */

// API response example

fetch("/api/users")
  .then((response) => response.json()) // parses to JSON
  .then((data) => console.log(data));

// localSotrage example

const userData = {
  id: 1,
  preference: {
    theme: "dark",
  },
};

localStorage.setItem("user", JSON.stringify(userData));

// Safe approach with error handling
const storedData = localStorage.getItem("user");
if (storedData) {
  try {
    const retrieve = JSON.parse(storedData);
    console.log(retrieve);
  } catch (error) {
    console.error("Failed to parse stored data:", error);
  }
} else {
  console.log("No user data found in localStorage");
}