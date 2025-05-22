// looping through an array

// forEach Method

const arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
  console.log(element); // will log every value of the array
});




//! Some static array method

//? from() - convert object that are not array(such as string,sets or array-like objets) into arrays.

const arr03 = "Attack on Titans";
console.log(Array.from(arr03));

const arrayObj = {
  0: "apple",
  1: "banana",
  2: "litchi",
  length : 3
};
const arr04 = Array.from(arrayObj)
console.log(arr04)



// isArray() - returns the boolean values based on the argument is an array

const arr05 = [8,9,10]
console.log(Array.isArray(arr05))


// of()  - can take multiple argument and return as array

console.log(Array.of(3,4,5,6,7));



//! Some instance method of an Array


// at() - to get element from the particular index
const arr06 = [40,50,60,70,80,90]
console.log(arr06[0])
console.log(arr06[5])


// concat() - returns a new array comprised of this array joined with another array(s)

const array01 = [3,4,5]
const array02 = [6,7,8]
const array03 = [9,10,11]
const concatedArr = array01.concat(array02,array03)
console.log(concatedArr)


// entries() - to get each entry of the array

const array04 = [45,55,67,78,89,90]

for (const i of array04.entries()){
  console.log(i)
}

for ( const [index , value] of array04.entries()){
  console.log(`Index :${index} -- Value :${value}`)
}


// fill() - to fill the array with static values

const array05 = Array.of(5,5,5,5,5).fill(10)
console.log(array05)


// filter() - method is used to create a new array with elements that pass a certan condition


// function to find all all the even number in an array

const num = [3,4,5,6,7,8,9,10]

const result = num.filter( (val) => {
  if (val % 2 == 0){
    return val
  }
  
})

console.log(result)


// function combining the includes and filter methods

const animal = ["Lion","Cheetah","Horse","Tiger","Bear","Elephant"]

const selectAnimal = animal.filter((animal) => animal.includes('a'))
console.log(selectAnimal)