function squre(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumofSqures(a, b) {
  let squre1 = squre(a);
  let squre2 = squre(b);
  return squre1 + squre2;
}

let ans = sumofSqures(1, 3);
console.log(ans);


// The concept of creating a callbacks function is to make a generic function that can take any function as it's passed to it. 


 