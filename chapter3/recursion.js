function isEven(n) {
  n = Math.abs(n);
  if (n == 0) {
    return "even";
  } else if (n == 1) {
    return "odd";
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));