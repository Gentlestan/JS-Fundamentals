const arg = process.argv[2];
const count = parseFloat(arg);

// Check if the argument is a valid number and greater than 0
if (isNaN(count) || count <= 0) {
    if (count < 0) {
        // Do nothing if the number is negative
    } else {
        console.log("Missing number of occurrences");
    }
} else {
    let output = "";
    for (let i = 0; i < count; i++) {
        output += "C is fun\n";
    }
    console.log(output.trim());
}
