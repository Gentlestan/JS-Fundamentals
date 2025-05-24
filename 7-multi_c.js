const arg = process.argv[2]
const count = parseFloat(arg,10)

if (isNaN(count)){
    console.log("Missing number of occurrences")
} else {
    let output = ""
    for (let i = 0; i < count; i++){
        output +=  + "C is fun"
    }
    console.log(output.trim())
}