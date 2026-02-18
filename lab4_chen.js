/**
 * Christy Chen
 * Feb 18, 2026
 * lab 4, functions
 */
console.log("Christy Chen")

// function to check if two numbers are 'snake eyes'
function snake_eyes(n1,n2){
    if(n1 === 1 && n2 === 1)
        console.log("SNAKE EYES")
    else
        console.log("NOT a snake eyes")
}

// call function snake_eyes
console.log("\n ---- example 1: snake eyes ")
snake_eyes(3,5)
snake_eyes(1,3)
snake_eyes(2,2)
snake_eyes(1,1)

// example 2: check if the temperature is greater than or equal to 75.
function checktemperature(temperature){
    if(temperature >= 75)
        return true
    else
        return false
}

// call function
console.log("\n ---- example 2: check temperature ")
t = 60
t1 = checktemperature(t)
console.log(`is temperature greater than 75? ${t1}`)

t2 = checktemperature(90)
console.log(`is temperature greater than 75? ${t2}`)

// example 3:
console.log("\n ---- example 3: JS Math object ")
n1 = 2.312
n2 = 3.655
n3 = 5
n4 = 2

console.log(`${n1} after round = ${Math.round(n1)}`)
console.log(`${n2} after round = ${Math.round(n2)}`)
console.log(`${n1} after ceil = ${Math.ceil(n1)}`)
console.log(`${n2} after ceil = ${Math.ceil(n2)}`)

// Math.pow(base,exponent)
console.log(`${n3} to the power of ${n4} is = ${Math.pow(n3,n4)}`)

// Math.random() returns a number between 0 and 1
console.log(`random number = ${Math.random()}`)

// Math.random() between -1 and 9
r = Math.ceil(Math.random()*10) - 1                        // -1 to < 9
console.log(`random number between -1 and 9 = ${r}`)

// example 4:
console.log("\n ---- example 4: pick a random color for a list of colors")
let colors = ['red', 'orange', 'pink', 'blue', 'green']

function pickcolorindex(lengthlist){
    let indexcolor = Math.floor(Math.random()*lengthlist)
    return indexcolor
}

// testing
let colorindex = pickcolorindex(colors.length)
console.log(`The picked color is = ${colors[colorindex]}`)

console.log("\nEXERCISE")
function checkName(){
    let username;
    while (true){
        username = prompt("Enter a username: ")

        if (username === "" || username === null)
            console.log("You forgot to enter a name. Enter a name again: ")
        else if (!isNaN(username))
            console.log(`${username} is invalid! Enter a name again:`)
        else
            return username.toUpperCase()
    }
}
console.log(`Welcome ${checkName()} to the class!`)