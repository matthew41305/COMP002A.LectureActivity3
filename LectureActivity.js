// Greeting function with a parameter
const printGreeting = function(name) {
    console.log(`Hello, ${name}! Nice to meet you!`);
};

// Call the greeting function with an example name
console.log(printGreeting("Jonathan")); // name




// Function to calculate circumference given the diameter
function getCircumference(diameter) {
    return Math.PI * diameter;
}

// Example call to the circumference function
console.log(getCircumference(10)); // Outputs the circumference for diameter = 10




// calling a function within a function
function printWhereAmI2() {
    console.log("Where am I?2");

}
function printWhereAmI3() {
    console.log("Where am I?3");
    printWhereAmI2(); // calling a function inside another function

    }


    printWhereAmI3(); // prints both "Where am I?2" & "Where am I?3"
    printWhereAmI2(); // prints just WhereAmI2

    // this happens because whatever is called executed in condecending order, therefore if we call printWhereAmI3, it will give us the output with the following console.log,
    // and exeuted what is next which is printWhereAmI2

    
// this function keeps repeating eventually leading to stack overflow as it has no end.
function infiniteRecursion() {
    console.log("This function will keep calling itself.");
    infiniteRecursion();  // Recursive call with no base case
}

// Uncomment the following line to trigger a stack overflow:
// infiniteRecursion();



