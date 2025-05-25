
function add(a, b) {
  return a + b;
}

// Get the arguments from the command line
const firstArg = parseInt(process.argv[2], 10);  // First integer
const secondArg = parseInt(process.argv[3], 10); // Second integer

// If both arguments are valid numbers, add them, otherwise print NaN
if (isNaN(firstArg) || isNaN(secondArg)) {
  console.log("NaN");
} else {
  console.log(add(firstArg, secondArg));
}

