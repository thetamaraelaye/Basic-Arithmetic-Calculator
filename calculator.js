alert('Welcome to Calculator. Perform simple calculations in one go')

let x,y;

x = parseFloat(prompt("enter the first number"));
y = parseFloat(prompt("Enter the second number"));

let z = x + y;
let a = x - y;
let b = x * y;
let c = x / y;

alert("The sum of the given numbers is: " +z);
alert("The difference of the given numbers is: " +a);
alert("The product of the given numbers is: " +b);
alert("The quotient of the given numbers is: " +c);
