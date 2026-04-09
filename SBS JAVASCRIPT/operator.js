// <h1>Operators</h1>
    // <p>Operators are symbols that perform actions on values (called operands)</p>
    // numbers in an arithmetic operator is called OPERANDS
    // <p>Think of them like sign in maths: +, -, *, /.</p>

    // TYPES OF OPERATORS IN JS
// 1. ARITHMETIC OPERATORS - USED FOR BASIC MATHS
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b); //remainder or modulus
console.log(a**b); //exponentiation - raised to b

//2. ASSIGNMENT OPERATORS (=) - USED TO ASSIGN VALUES
let x = 5
x += 3

// 3. COMPARISON OPERATORS - USED TO COMPARE VALUES (IT RETURNS TRUE/FALSE)
console.log(a == b); //equal to
console.log(a != b); //not equal
console.log(a > b); //greater than
console.log(a < b); //less than
console.log(a >= b); //greater or equals
console.log(a <=  b); // less than or equal
console.log(a === b); //strict equality, checks data type
console.log(a !== b); // strict not equal because type is different

// 4. LOGICAL OPERATORS - USED TO COMBINE CONDITIONS (AND, OR, NOT)
let age = 19;
let hasId = true;
console.log(age > 18 && hasId); //both must be true
console.log(age > 18 || hasId); //atleast one is true
console.log(!hasId); //reverses true or false


// 5. INCREMENT / DECREMENT OPERATOR
let n = 5
console.log(n++); //post-increment - shows first, then adds 1
console.log(++n); //pre-increment - adds 1, then shows
console.log(n--); //post-decrement 
console.log(--n); //pre-decrement













