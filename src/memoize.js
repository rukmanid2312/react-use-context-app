const memoize = (callback) => {
  let memo = {};
  return (...args) => {
    let key = args.length > 1 ? JSON.stringify(args) : args;

    if (!memo[key]) {
      memo[key] = callback(...args);
    }
    return memo[key];
  };
};
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
const sum = (a, b) => {
  return a + b;
};

const memoizedFac = memoize(factorial);
const memoizedSum = memoize(sum);
console.log(memoizedFac(3));
