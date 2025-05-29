// An example of Async Function

function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTillN() {
  console.log(findSum(100));
}
setTimeout(findSumTillN, 1000);
console.log("hello World!");
