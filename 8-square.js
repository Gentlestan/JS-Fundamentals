const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size) || size <= 0) {
    if (size <= 0) {
        // Do nothing for negative numbers or zero
    } else {
        console.log("Missing size");
    }
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
}
