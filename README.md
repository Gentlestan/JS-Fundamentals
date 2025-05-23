# JavaScript Fundamentals - Week 3 This repository contains beginner-level JavaScript scripts as part of the **ALX Front-End Curriculum - Week 3**.

# Project0: 0-javascript_is_amazing.js

## Task Description

       Write a script that prints the message:
       "JavaScript is amazing"

### Requirements

Create a constant variable named `myVar` with the value `"JavaScript is        amazing"`.
Use `console.log(...)` to print the message to the console.
Do **not** use the `var` keyword.
Filename: `0-javascript_is_amazing.js`

#### Example Output

When the script is run with Node.js:
$ node 0-javascript_is_amazing.js

Result: JavaScript is amazing

# Project1: 1-multi_languages.js

## Task Description

    Write a script that prints 3 lines:

        C is fun
        Python is cool
        JavaScript is amazing

### Requirements

    Use console.log(...) to print each line.
    Do not use the var keyword.
    Filename: 1-multi_languages.js

#### Best Practices

    Use const instead of let or var for values that don’t change.
    Use descriptive, camelCase variable names if storing values, such as:


    const cMessage = "C is fun";
    const pythonMessage = "Python is cool";
    const jsMessage = "JavaScript is amazing";

##### Example Output

When the script is run with Node.js:$ node 1-multi_languages.js

Result:
C is fun
Python is cool
JavaScript is amazing

#Project2: 2-arguments.js
##Task Description:
Write a script that prints a message depending of the number of arguments passed:

    If no arguments are passed to the script, print “No argument”
    If only one argument is passed to the script, print “Argument found”
    Otherwise, print “Arguments found”

### Requirement

        You must use console.log(...) to print all output
        You are not allowed to use var

######### Example Output
When the script is run with Node.js:$ node 2-arguments.js

Result: No Argument

When the script is run with Node.js:$ node 2-arguments.js Best
Result: Argument found

When the script is run with Node.js:$ node 2-arguments.js Best school
Result: Argument found

#Project3: 3-value_argument.js

## Task Description

    Write a script that prints the first argument passed to it:

    ### Requirement

    If no arguments are passed to the script, print “No argument”
        You must use console.log(...) to print all output
        You are not allowed to use var
        You are not allowed to use length

    ##### Example Output

    When the script is run with node 3-value_argument.js
    Result: No argument

    When the script is run with node 3-value_argument.js School
    Result: School

    When the script is run with node 3-value_argument.js School Time
    Result: School

#Project4: JS-Fundamentals

## Task Description

    Write a script that prints two arguments passed to it, in the following format: “ is ”

### Requirement

    You must use console.log(...) to print all output
    You are not allowed to use var

##### Example Output

        When the script is run with Node.js:$ node 4-concat.js
        Result: undefined is undefined

        When the script is run with Node.js:$ node 4-concat.js c cool
        Result: c is cool

        When the script is run with Node.js:$ node 4-concat.js c
        Result c is undefined

# Project5: 5-to_integer.js

## Task Description

    Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

### Requirement

    If the argument can’t be converted to an integer, print “Not a number”
    You must use console.log(...) to print all output
    You are not allowed to use var
    You are not allowed to use try/catch

##### Example Output

        When the script is run with Node 5-to_integer.js
        Result: Not a number

        When the script is run with Node 5-to_integer.js 89
        Result: My number: 89

        When the script is run with Node 5-to_integer.js "89"
        Result: My number: 89

        When the script is run with Node 5-to_integer.js 89.99
        Result: My number: 89

        When the script is run with Node 5-to_integer.js School
        Result: Not a number

# Project6: 6-multi_languages_loop.js

## Task Description

    Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

### Requirement

        The first line: “C is fun”
        The second line: “Python is cool”
        The third line: “JavaScript is amazing”
        You must use console.log(...) to print all output
        You are not allowed to use var
        You are not allowed to use any if/else statement
        You can use only one console.log
        You must use a loop (while, for, etc.)

##### Example Output

        When the script is run with Node 6-multi_languages_loop.js
        Result: C is fun
                Python is cool
                JavaScript is amazing

Author
This project was completed as part of the ALX Software Engineering Program.
