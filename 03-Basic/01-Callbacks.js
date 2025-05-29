// let's talk about callbacks in JavaScriipt

// an example of one function taking input another function

function squres(n) {
  return n * n;
}

function sumofSqure(a, b) {
  const val01 = squres(a);
  const val02 = squres(b);

  return val01 + val02;
}

console.log(sumofSqure(1, 2));

// combining these above function to a callbacks function

function squre(a) {
  return a * a;
}

function sumofSomething(a,b,fn){
	const val1 = fn(a)
	const val2 = fn(b)
	return val1 + val2
}

console.log(sumofSomething(5,5,squre))


// Anonymous function 

// const 