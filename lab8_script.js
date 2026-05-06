console.log("Full name: Christy Chen")

// select the first paragraph from the document
let allparagraphs = document.querySelectorAll('p')
console.log(allparagraphs)

// set the font color to green for all selected paragraphs
for(let i = 0; i < 2; i++){
    allparagraphs[i].style.color = "green"
}

console.log(allparagraphs[2])
allparagraphs[2].style.color = "orange"

// set the font-size (camel case = fontSize) of the second paragraph
allparagraphs[1].style.fontSize = "30px"

// change the text content of an element
// select the element first
let college_paragraph = document.querySelector('.college')      // .college is the class
college_paragraph.innerHTML = "Hunter - <em> CUNY </em>"

// add the class .colorblue to an element with id = city
// select the element with 
let city = document.querySelector("#city")
city.className = "colorblue"

let linkqcc = document.querySelector('.linkqcc')
let linkmsg = document.querySelector('.linkmsg')

linkqcc.onmouseover = function(){
    linkmsg.innerHTML = "QCC link was hovered"
    linkmsg.className = "hovercolor"
}
linkqcc.onmouseout = function(){
    linkmsg.innerHTML = "Mouse was removed"
    linkmsg.className = "mouseoutcolor"
}

let square = document.querySelector('.square')
let colorsquarebtn = document.querySelector('.colorsquarebtn')

colorsquarebtn.addEventListener("click", function(){
    square.style.backgroundColor = `rgb(${colorrandom()},${colorrandom()},${colorrandom()}`
})

const colorrandom = function(){
    return Math.floor(Math.random()*255)
}

const circle = document.querySelector('.circle')
let counter = document.querySelector('.counter')
let resetbtn = document.querySelector('.resetbtn') 
let count = 0;

circle.addEventListener("click", function() {
    count++;
    counter.textContent = count;
  })

resetbtn.addEventListener("click", function() {
    counter.textContent = 0;
  })