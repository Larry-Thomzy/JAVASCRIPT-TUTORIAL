let hasMembership = false;
let sigedIn = true;

if (hasMembership === true){
    console.log('show user the video');
}
else if(signedIn === true){
    console.log('tell user to sign in');
}
else{
    console.log('tell user to log in');
}


let age = 19;

if (age > 18){
    console.log(`you're ${age} may enter the club`);
}
else if (age === 18){
    console.log('you just turned 18, welcome');
}
else{
    console.log(`you're are ${age} years old. Too young, get outta here!`);
}

//Logical Operators
//&&
let age1 = 18;
let hasId1 = true;

if (age1 >= 18 && hasId1 === true){
    console.log('you may enter the club');
}

// || checks if either its left or right side are true

//FALSEY VALUES
//A falsey value is considered true when converted into a boolean

//TERNARY OPERATORS
//A shortcut to write an if else statement
let isRaining = true;

isRaining ? console.log('it is raining') : console.log('it is nott raining');

let age2 = 19;
let hasId = true;
let str = age >= 18 && hasId ? "you may enter" : "you may not enter";
console.log(str);