/**
 * Christy Chen
 * lab 5, js objects and try-catch
 * Feb 24, 2026
 */
console.log("Christy Chen")
console.log("\n---- example 1: spread ...")
// use spread to iterate through each value in an array
let numbers = [10, 20, -15, 6, 31]
let max_numbers = Math.max(...numbers)          // need ... or it will return NaN
console.log(max_numbers)

console.log("\n---- example 2: spread different arrays")
let colors = ['yellow', 'red', 'pink']
let animals = ['dog', 'cat']

// combine two arrays using spread
// let combineArray = colors + animals
let combineArray = [...colors, ...animals]
console.log(combineArray)

console.log("\n---- example 3: exception handling")
function yell(){
    msg = prompt('Enter a message: ')
    console.log(msg.toUpperCase().repeat(3))
}

function checkNumber(number){
    dbnumber = number/2                       
    console.log(dbnumber)
}


function divide(a,b){
    try{
        if(b === 0){
            throw new Error("Must enter a number that is not zero")
        }
        if(isNaN(a) || isNaN(b)){
            throw new Error("Must enter a number")
        }
        return a/b
    }catch(error){
        console.error(`An error occured: ${error.message}`)
        return 0;
    }finally{
        console.log("Execution completed!")
    }
}

console.log("\n---- example 4: exception handling in an array")
function getArrayElement(arr,index){
    return arr[index]
}
cities = ['NYC', 'Boston', 'Miami', 'Seattle', 'Chicago']
try{
    console.log(getArrayElement(cities, 3))
    console.log(getArrayElement(cities, 8))
} catch(error){
    if (error instanceof RangeError){
        console.error("Range Error: ", error.message)
    }
    else{
        console.log("An unexpected error occurred: ", error)
    }
}finally{
        console.error("Array access operation completed")
}

console.log("\n---- example 5: objects and properties in JS")
// object = car
const car = {
    // properties
    type: "Flat",
    model: "500",
    color: "white"
}

// to access to the value of an object
console.log(car.color)

console.log("\n---- example 6: properties and methods of an object")
// create an object
const person = {
    // properties
    firstname: "Peter",
    lastname: "Pan",
    id: 1234,

    //method
    fullname: function(){
        return this.firstname + " " + this.lastname
    }
}
// access to a property of an object
console.log(person.id)

// access to a method of an object
console.log(person.fullname())

console.log("\n---- example 7: this accessor in an object")
const hen = {
    name: "Helen",
    id: 12,
    eggcount: 0,
    lay_an_egg: function(){
        this.eggcount ++
        return "LAY AN EGG"
    }
}

console.log("\n---- example 8: object constructor template")
// create an object with initial values
function course(title, instructor, code, session, students){
    this.t = title,
    this.i = instructor,
    this.c = code,
    this.s = session,
    this.number_students = students
}

// create an object for the function
let course1 = new course("C++", "Prof. An", "ET575", "12345", 20)
let course2 = new course("Javascript", "Prof. Wu", "ET712", "54332", 6)

// accessing the data of the object function
console.log(course1.i)
console.log(course2.number_students)

console.log("\n---- EXERCISE 1 ")
const mycalculator = {
    message: "Welcome to your Calculator!",             // comma after each property/method
    side: 2,

    area_square: function(){
        return Math.pow(this.side, 2)                   // call property using this.propertyname
    },

    volume_cube: function(){
        return Math.pow(this.side, 3) 
        
    }
}
console.log(mycalculator.message)
console.log(`Area = ${mycalculator.area_square()}`)
console.log(`Volume = ${mycalculator.volume_cube()}`)

console.log("\n---- EXERCISE 2 ")
const obj = {                                           // assign object and property first
    prop: "nintendo switch"
}
function readProperty(obj, prop){       
    try{
        if (obj === null || obj === "") {               // error message when undefined or null
            throw new Error("Error accessing property")
        }
        return obj[prop]                                // otherwise returns the property
    } catch (error) {
        return error.message                            // error message displayed
    }
}
console.log(readProperty(obj,"prop"))                   // parameter of obj set to obj, null, or ""
console.log(readProperty(null,"prop"))
console.log(readProperty("","prop"))