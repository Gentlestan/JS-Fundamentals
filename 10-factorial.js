function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}

// Get the first command line argument
const num = parseInt(process.argv[2], 10);

// If the argument is a valid number, compute its factorial, otherwise return 1
if (isNaN(num)) {
  console.log(1); // Factorial of NaN is 1
} else {
  console.log(factorial(num)); // Compute and print the factorial
}
