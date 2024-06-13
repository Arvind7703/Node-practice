let num1 = 10;
let num2 = "10";

console.log(typeof num1); // Output - number
console.log(typeof num2);// Output - string

// when we want to store a value in a prefered formate we can use type conversion

// example

let numberData = "30" // value entered by the user is in string 
let value = Number(numberData) // we can change the incoming value in a number formate

console.log(typeof value); //Output number

//Similarly for string

let strg = 100;

let stringVal = String(strg) // converting number type into string

console.log(typeof stringVal);