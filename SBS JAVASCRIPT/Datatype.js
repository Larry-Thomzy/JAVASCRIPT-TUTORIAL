console.log("Hello from practice.js");
console.log("My first JS practice");

// variables
let age = 25;
console.log(age);

const salary = 8000;
console.log(salary);

//DATA TYPES

//strings
const language = "JavaScript";
const channel = "codevolution";
const name = `Brownson`;

//number
const total = 3;
const PI = 3.14;

//boolean
const isPrimaryUser = true;
const isNewUser = false;

//undefined
let result;
console.log(result);

//null
const emptyOrUnknownValue = null;

//object
const person = {
  firstName: "Joy",
  lastName: "Brownson",
  age: 21,
};

console.log(person.firstName)

//OPERATOR

//assignment operator
let x = 10;
let y = 5;
console.log(x*y)
console.log(x % y)
console.log(++y)
console.log(--x)

//comparison operator
console.log(x == y)
console.log(x != y)
console.log(x === y)
console.log(x !== y)
console.log(x>y)
console.log(x<y)
console.log(x>=y)

let age1 = 17;
if(age1 >= 18){
  console.log("You are an adult");
}
else if(age1 >= 16){
  console.log("You are a teenager.");
}
else{
  console.log("You are a minor.");
}

// Switch 
let value = 42;
switch (typeof value){
  case "number":
    console.log("number")
    break;

    case "string":
    console.log("string")
    break;

    case "boolean":
    console.log("boolean")
    break;
    default:
      console.log("Other")
      breaks;
}


let dayName = 2;
switch (dayName) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break; 
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;       

  default:
    dayName = "Invalid day number";
    break;
}
console.log("The day is: " + dayName)


// Ternary Operator
// Condition ? value_if_true : value_if_false
let age2 = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor.";
console.log(message);

//For Loop
let coding = ["JavaScript", "Python", "CPP"]
for (let i = 0; i < coding.length; i++) {
  console.log(coding[i]); 
}

for (let i = 0; i < 5; i++) {
  console.log(i);

  for (let j = 0; j < 3; j++) {
    console.log("Inner loop " + j);
    
  }
  
}

//while loop
let i = 0;
while (i <= 10) {
  console.log(i)
  i++;
}

//do.....while loop
let z = 1
do{
console.log(i)
z++;
}while (i <= 5) {
  
}

// break / continue  : used to terminate the loop immediately
for (let i = 0; i < 5; i++) {
  if(i == 3)
    break;
  console.log(i);
  }