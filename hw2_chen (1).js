/*
Student's full name
Homework 2 - functions, loops, and conditional statement
*/

console.log("EXERCISE 1: name_counting() function")

let names =["Ann", "Peter", "Patricia", "Sam", "Katerina"]      // array comes before function

function name_counting(len){                                    // len is placeholder for names.length
    let count = 0

    for (let i = 0; i < len; i++) {
        if (names[i].length < 5)                                // checks length of the index within array
            count++
}
    return count                                                // returns total count
}
console.log(`Number of names with less than 5 characters is ${name_counting(names.length)}`)

console.log("\nEXERCISE 2: checkNum() function")

function checkNum(){
    while (true){
        let input = prompt("Enter a number: ")
        num = input
        if (isNaN(num) || num === "")                       // isNaN = not a number !isNaN = is a number
            console.log("Please enter a valid number!")
        else if (num % 2 === 0) 
            return true
        else
            return false
    }
}
alert(checkNum())
