/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // this is a explicit type conversion to make. This will make string "5" to number.
console.log("The result is: " + result); // the result will be 3


if (isValid) {
    console.log("This is valid!"); // I have removed the isValid declaration to provide example for undefined use case
}

let age = Number("25"); // this is a explicit type conversion to make. This will make string "5" to number.
let totalAge = age + 5;
console.log("Total Age: " + totalAge); // the result will be 25


//implicit example
let result = "5" + 2; // this is a implicit type conversion to make. This will make string "2" to number.
console.log("The result is: " + result); // the result will be 52