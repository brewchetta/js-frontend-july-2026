// VARIABLE
// it is being stored for later
// variables can be manipulated and some of them can be changed
let alertMessage = "hello stranger";
// var means we are declaring a variable

// use the value of the variable in the alert
console.log("alertMessage:", alertMessage);

// we can alter the variable without var
alertMessage = "This will be the last alert...";

console.log("alertMessage:", alertMessage);

// CONSTANT
// when we define a constant it CANNOT BE CHANGED
const pi = 3.14159;

console.log(pi);

// we are not allowed to change pi... so JS errors out
// pi = 3.1415927;

// CAMELCASE - JAVASCRIPT
// alertMessage
// helloWorld
// myNumberPi

// KEBAB CASE - HTML
// alert-message
// hello-world
// my-number-pi

// SNAKE CASE - Python
// alert_message
// hello_world
// my_number_pi

// DATA TYPES //

// --- STRINGS ---
// a string is text
const stringOne = "!@#$%^&*()";
const stringTwo = 'I am "letters and quotes" and spaces';
const stringThree = `1029384756`;

// concatenation where we add two strings together to form a larger string
const combinedStrings = stringTwo + stringOne;

console.warn(combinedStrings)

// interpolation allows us to plug things into a string
// interpolation ONLY WORK WITH ``
const interpolatedString = `These are special characters: ${stringOne}`;

console.error(interpolatedString);

// console.log/warn/error will print to the console in the dev tools

// --- NUMBERS --- //

const one = 1;
const addition = 1 + 1;
const subtraction = 2 - 1;
const multiplication = 2 * 2;
const division = 4 / 2;

const exponent = 4 ** 2;

const modulo = 4 % 2;
// finds the remainder from division

console.log(
    one, 
    addition, 
    subtraction, 
    multiplication, 
    division, 
    exponent, 
    modulo
);

const addNumberToString = "12" + 14;


// --- BOOLEANS --- //

console.log("Is 1 greater than 2?", 1 > 2);
// false

console.log("Is 2 greater than 1?", 1 < 2);
// true

// --- NULL / UNDEFINED --- //

// undefined is that the value does not yet exist for us
let nonExistent;
console.log(nonExistent);

nonExistent = null;
console.log(nonExistent);

// --- OBJECTS --- //

// complex values -- data structure
// this piece of data can hold OTHER pieces of data... in fact that's it's intended purpose

const person = { 
    // KEY  :  VALUE
    firstName: "Chett", // string value
    lastName: "Tiller", // string value
    age: 21,            // number value
    favoriteSoda: null,  // null value
    // cat: { // nested object
    //     name: "Octavia",
    //     age: 15,
    //     favoriteToy: "little plush mouse",
    //     rivalCat: {
    //         name: "Ursula",
    //         age: 15,
    //         favoriteToy: "keyboard"
    //     }
    // } // the value is ANOTHER OBJECT
    // cats: [cat1, cat2]
}

// we can access information in the object using dot notation:
person.firstName
person.age

// if we have keys that don't exist we get back undefined
person.doesntExist // undefined

// changing a value
person.age = 22;
person.favoriteSoda = "Canada Dry Ginger Ale";


// --- ARRAYS --- //

// another data structure --> it's meant to collect data - multiple pieces of data can go inside of it

// most often this will be a collection of similar items

// arrays are often a list of things
const favoriteSodas = [
    "Coke",         // 0
    "Mtn Dew",      // 1
    "Pepsi",        // 2
    "Canada Dry"    // 3
]

const multiplesOfTwo = [2, 4, 8, 16, 32, 64]

// JS starts counting at 0 for array
favoriteSodas[0]

// INDEX --> this is the position in the array started at 0

// getting the third item (accessing by index 2):
favoriteSodas[2]

// getting the fourth item:
favoriteSodas[3]

// getting the 100th item:
favoriteSodas[99]

// change values by index
favoriteSodas[0] = "Schweppes"

// to add to the end of the array:
favoriteSodas.push("Baja Blast")

// to remove from the end of the array:
favoriteSodas.pop() // remove "Baja Blast"

// add to the beginning
favoriteSodas.unshift("Coke") 

// remove from the beginning
favoriteSodas.shift() 