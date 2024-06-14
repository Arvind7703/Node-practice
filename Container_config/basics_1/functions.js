// Define a function that takes two parameters and returns their sum.
function sum (num1,num2){
    return num1+num2
}
console.log(sum(2,5));

// Write a function that checks if a number is even or odd.

function odd(num){
    if(num % 2 === 0){
        return(`${num} is odd`);
    }
    else{
        return(`${num} is even`);
    }
}
console.log(odd(12));

// Implement a function that reverses a string.
function stringReverse (strg){
    let letter = strg.split("");
    let reverseLetter = letter.reverse();
    let reversedStrg = reverseLetter.join("");
    return reversedStrg
}
console.log(stringReverse("Arvind"));
