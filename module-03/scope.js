let name = "Matthew"; // This variable is available in the entire program

if (name == "Matthew") {
    name = "Hudson"; // name is still accessible here
    let helloStatement = "Helle, there!"; // This variable is only available inside this code block
    console.log(helloStatement);
} // after the if block completes, the helloStatement variable is no longer accessible 
// the line below will throw an error because helloStatement no longer exists here
//console.log(helloStatement);  
console.log(name); // can still use name as it is declared outside of the if block