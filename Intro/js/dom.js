// DOCUMENT OBJECT MODEL //

// DOM vs HTML
// HTML file is blueprint
// DOM is the structure we actually build and show

// document --> this is the root of the DOM
// sort of the great grand daddy of the page

// older ways of finding items on the page
document.getElementById('first-number')
document.getElementsByClassName('number-label')
document.getElementsByTagName('input')

// querySelector -- the flexible DOM selector
document.querySelector('#first-number')
document.querySelectorAll('.number-label')
document.querySelectorAll('input')

// querySelector --> find the first item on the page that fits the selection
// querySelectorAll --> find ALL the items on the page that fit the selection

const mainHeading = document.querySelector('h1')

mainHeading.textContent = "Intro to DOM Manipulation"

// to manipulate the DOM:

// select an element

// change that element in some way

function changeHeadingToGreen() {
    mainHeading.style.color = "green"
}

function changeHeadingToRed() {
    mainHeading.style.color = "red"
}

function changeHeadingToYellow() {
    mainHeading.style.color = "yellow"
}

// state --> what is the current state / mode / position? what is this currently?

// new state var which tracks whether the chinese translation is ON / TRUE
let isChinese = false

function toggleChinese() {
    // if not currently using chinese translation
    if (isChinese === false) {
        // change the textContent for the main heading
        const translation = "欢迎来到 JavaScript"
        mainHeading.textContent = translation

        // get the translate button
        const translateButton = document.querySelector('#translate-button')
        // change the translate button so it now mentions going back to english
        translateButton.textContent = "Translate to English" 
        // change state so that isChinese is true
        isChinese = true
    } else {
        const translation = "Intro to Javascript"
        mainHeading.textContent = translation

        const translateButton = document.querySelector('#translate-button')
        translateButton.textContent = "Translate to Chinese"

        isChinese = false
    }
}

// UPPER & LOWERCASE FNS
function textToUpperCase() {
    // get the element
    const paragraph = document.querySelector('#upper-or-lower')
    // get the text in the element
    const text = paragraph.textContent
    // create uppercase text
    const uppercaseText = text.toUpperCase()
    // put the uppercase text into the element
    paragraph.textContent = uppercaseText
}

function textToLowerCase() {
    const paragraph = document.querySelector('#upper-or-lower')
    const text = paragraph.textContent
    const lowercaseText = text.toLowerCase()
    paragraph.textContent = lowercaseText
}

function handleFormSubmission() {
    // event is the submission event itself
    // preventDefault prevents the form from doing it's normal work of submitting / refreshing the page
    event.preventDefault()

    const firstInput = document.querySelector('#first-number')
    const secondInput = document.querySelector('#second-number')

    // parse the value of the inputs into a number
    // by default an input has a string / text
    const firstNumber = Number(firstInput.value)
    const secondNumber = Number(secondInput.value)

    const result = firstNumber + secondNumber

    // grab the only <p> inside the <form>
    const resultParagraph = document.querySelector('form p')
    // set the text content for the result <p>
    resultParagraph.textContent = result
}