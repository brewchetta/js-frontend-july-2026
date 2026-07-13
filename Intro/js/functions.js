// FUNCTIONS //

// a function is a repeatable block of code which can be activated whenever we feel like activating them

// define a function
// the fn needs a name
function sayHello() {
    console.log("SAY HELLO HAS BE CALLED")
}
// the curly brackets {} define the code that runs whenever we activate or "call" the fn

// creating / defining a function is NOT the same as activating or calling it

// calling the function:
sayHello()
// adding the parentheses actually calls the fn

function createRandomNumbers() {
    const randomNumbersArray2 = []

    for (let index = 0; index < 11; index++) {
        const randomNumber = Math.round( Math.random() * 10 )
        randomNumbersArray2.push( randomNumber )
    }

    // console.log() will not return anything but will show it on the console
    console.log(randomNumbersArray2)
    
    // return outputs the value from the function
    // --> allows the value to be accessed after the function is completed
    return randomNumbersArray2
}

const randNums = createRandomNumbers()

// more than one return doesn't do anything
function multipleReturns() {
    return "I am the first return"
    // return will END the fn --> code after it is dead code
    return "I am the second return"
    return "I am the third return"
    // the other returns won't happen!
}

// addNums takes two arguments
// whenever we call the fn we can give two numbers
// numberOne and numberTwo are parameters --> placeholders until we know what they are when we call the fn
function addNums(numberOne, numberTwo) { 
    // numberOne & numberTwo are INPUT
    const additionResult = numberOne + numberTwo
    return additionResult // OUTPUT
}

// calling the code with ARGUMENTS
// ARGUMENTS --> the values we put into the fn
addNums(15,20) // 35


// CONDITIONALS //

1 > 0 // true
5 < 4 // false
5 > 5 // false

5 >= 5 //true

6 === 6 // true
7 === 6 // false

6 !== 6 // false
7 !== 6 // true


function isDivisibleByTwo(num) {
    const remainder = num % 2
    // check to see: if (something is true)
    if (remainder === 0) {
        // if it is true do this
        return "IT IS DIVISIBLE BY TWO"
    } else {
        // else if it is false do this
        return "NOT DIVISIBLE BY TWO"
    }
}

// loosely equal
2 == "2" // true
2 == "3" // false

// strictly equal
2 === "2" // false
2 === "3" // false
2 === 2 // true
