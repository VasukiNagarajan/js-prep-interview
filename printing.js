function exampleReturn() {
    const sentence = "Hello, world!"
    console.log("This will run");
    return sentence; // The function returns the string "Hello, world!"
    console.log("This won't run")// This line will never be executed
}

const greeting = exampleReturn();  // The value "Hello, world!" is assigned to the variable `greeting`
console.log(greeting);  // Outputs: Hello, world!
exampleReturn() // this will return clg value only
