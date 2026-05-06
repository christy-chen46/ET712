console.log("Christy Chen")

/**
 * window's events
 */
// collect buttons
const btnright = document.querySelector('.btnright')
const btnleft = document.querySelector('.btnleft')

// define a function to scroll the images
function scrollimage(scrollpexels){
    let gallerycontainer = document.querySelector('section.gallerycontainer')
    gallerycontainer.scrollBy({
        left: scrollpexels,
        behavior: "smooth"
    })
}

// add a click event for each button
btnright.addEventListener("click", function(){
    scrollimage(500)
})
btnleft.addEventListener("click", function(){
    scrollimage(-500)
})

// resize
// collect elements
const heightpx = document.querySelector(".heightpx")
const widthpx = document.querySelector(".widthpx")

// add an resize event to the browser
window.addEventListener("resize", function(){
    let heightwindow = window.innerHeight
    let widthwindow = window.innerWidth

    heightpx.textContent = `Height pixels = ${heightwindow}`
    widthpx.textContent = `Width pixels = ${widthwindow}`
})

// EXERCISE