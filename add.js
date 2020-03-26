// Run this code in your browser

let multiply = (a, b) => a * b;
let getNumber = text => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');
console.log(multiply(number1, number2));