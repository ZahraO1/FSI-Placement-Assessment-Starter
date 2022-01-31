// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Jane Doe" // HINT: Replace this with your own name!
yourName = "Zahra Masroor"

// We'll use these variables to track the counts of each cookie type
let gb = 0  // Gingerbread
let cc = 0 // Chocolate Chip
let ss = 0 // Sugar Sprinkle
let total = 0 //total number of cookies

//Linking to the quantity values
let gbValue = document.querySelector("#qty-gb")
let ccValue = document.querySelector("#qty-cc")
let ssValue = document.querySelector("#qty-sugar")
let totalValue = document.querySelector("#qty-total")

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb

//Gingerbread
const gbPlusBtn = document.querySelector('#add-gb')    //this button adds a Gingerbread cookie
const gbMinusBtn = document.querySelector("#minus-gb") //this button removes a gingerbread cookie

//Chocolate chips
const ccPlusBtn = document.querySelector("#add-cc")    //Chocolate chip add button
const ccMinusBtn = document.querySelector("#minus-cc")  //Chocolate chip minus button

//Sugar Sprinkle
const ssPlusBtn = document.querySelector("#add-sugar")    //Sugar cookie add button
const ssMinusBtn = document.querySelector("#minus-sugar") //Sugar cookie minus button


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb += 1
    gbValue.textContent = gb
    total = gb + cc + ss
    totalValue.textContent = total
})

gbMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread - button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    if (gb == 0)
        gb == 0
    else
        gb -= 1
    gbValue.textContent = gb
    total = gb + cc + ss
    totalValue.textContent = total
})

ccPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Choco chip + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    cc += 1
    ccValue.textContent = cc
    total = gb + cc + ss
    totalValue.textContent = total
})

ccMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Choco chip - button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    if (cc == 0)
        cc == 0
    else
        cc -= 1
    ccValue.textContent = cc
    total = gb + cc + ss
    totalValue.textContent = total
})

ssPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar sprinkle + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    ss += 1
    ssValue.textContent = ss
    total = gb + cc + ss
    totalValue.textContent = total
})

ssMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar sprinkle - button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    if (ss == 0)
        ss == 0
    else
        ss -= 1
    ssValue.textContent = ss
    total = gb + cc + ss
    totalValue.textContent = total
})

// TODO: Hook up event listeners for the rest of the buttons