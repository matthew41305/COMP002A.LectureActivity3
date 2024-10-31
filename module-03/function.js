// three ways to delare a function

// 1st method to create a function
const printHelloWorld = function() {
    // activtities inside the function block
    console.log("printHelloWorld() called!");
    console.log("Hello");
    console.log("World!");
};

printHelloWorld(); // calls the printHelloWorld

// 2nd method to create a funcion
function printHelloWorld2() {
    console.log("printHelloWorld2() called!");
    console.log("Hello");
    console.log("World 2!");
} // no need for semi-colon here

printHelloWorld2(); //calls the printHelloWorld2

// 3rd method to create a function (=> arrow notation)
const printHelloWorld3 = () => {
    console.log("printHelloWorld3() called!");
};

printHelloWorld3(); // calls the printHelloWorld3() function

/*****************************************************/

// function with a parameter
function printHelloWorld4(name) {
    console.log("Hello, " + name); // when using variables you don't need to use double quotes

} // scope note: The variable name no longer exists whenthe function completes

printHelloWorld4("Matthew"); //now when we print we can add our name

//function with parameters
function printHelloWorld5(name1, name2, name3, name4, name5 ) {
    console.log('Hello, ${name1}, ${name2}, ${name3}, ${name4}, and ${name5}'); //string interpolation example
}

printHelloWorld5("Matthew", "Jonathan,", "Humberto", "Jerry", "Jovanni");

// string output options (single-quotes, double-quotes, and backticks)
let someVariable = "";
console.log('hello, ' + someVariable); //single quotes
console.log("hello, " + someVariable); //double quotes
console.log(hello, ${someVariable}); // backticks with string interpolation

/*****************************************************************************************************/
// function calling a function
function printHelloWorld6() {
    console.log("This is printHelloWorld6");

function printHelloWorld7() {
    console.log("This is printHelloWorld7");
    printHelloWorld6(); // calling a function inside another function

    }
}

printHelloWorld7(); // prints both "This is printHelloWorld(7))" & "This is printHelloWorld6()"
printHelloWorld6(); // prints just "This is printHelloWorld(6)"


/************************************************************/
// recursion
const factorial = n => {
    if (n <= 1) {
        return 1; // the base "case"
    }

    return n * factorial(n - 1); //recursive call
};

console.log(factorial(5));


/************************************************************/
// no return vs return values functions

// functions without a return value
function sum(num1, num2) {
    console.log(num1 + num2); //prints the sum of num1 and num2
}

// function with a return value
function difference(num1, num2) {
    return num1 - num2; // returns the difference between num1 & num2 but it does not print it
}

sum (2, 10); // since this function did not return a value it cannot be manipulated further

// since the difference function returns a value, it CAN be manipulated further

let addTentoDifference = difference(10, 5) + 10;
console.log(addTentoDifference);