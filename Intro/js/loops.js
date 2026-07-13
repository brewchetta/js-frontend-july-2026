// LOOPS //

// a loop allows us to loop over a data structure (array) and do something with each item

                        //    0    1      2      3     4        5
const shoppingCartPrices = [5.99, 7.99, 10.99, 30.99, 1.99]

let sum = 0;

// the index is the number for the item we're currently evaluating
// start with index 0 --> the first item
// go through until we are at the last index
let index = 0;

// while we have not gone past the length of the array...
// add the cart price to the sum
// and then move to the next cart price index
while (index < shoppingCartPrices.length) {
    // add price to the sum
    // index is the current index for the item we're adding
    const currentItem = shoppingCartPrices[index]
    // add the current item to the sum and that's the new sum
    sum = sum + currentItem

    console.log("INDEX:", index)
    console.log("CURRENTITEM:", currentItem)
    console.log("NEW SUM:", sum)

    // increment the index by one
    index = index + 1
}

// GENERATE AN ARRAY OF RANDOM NUMBERS

index = 0

const randomNumbersArray = []

while (index < 11) {
    // generate a new random number
    const randomNumber = Math.round( Math.random() * 10 )
    // add that to the array
    randomNumbersArray.push( randomNumber )

    // increment the index
    // index += 1
    index++
}

console.log("randomNumbersArray:", randomNumbersArray)



// FOR LOOPS //

const randomNumbersArray2 = []

// for (starting point; ending point; increment) {block}
for (let index = 0; index < 11; index++) {
    // generate a new random number
    const randomNumber = Math.round( Math.random() * 10 )
    // add that to the second random array
    randomNumbersArray2.push( randomNumber )
}

console.log("randomNumbersArray2:", randomNumbersArray2)

// counting down using a for loop
for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log("HAPPY NEW YEAR!!!")