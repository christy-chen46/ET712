// collect elements
let myform = document.querySelector('#myform')
let greeting = document.querySelector('.greeting')
let greetingname = document.querySelector('.greeting p span')

// form
myform.addEventListener('submit', function(event){
    event.preventDefault()
    
    let username = document.querySelector('#username')
    let usernamevalue = username.value 

    if(usernamevalue.trim() === ""){
        alert('Please enter a username!')
        return;
    }

    greeting.textContent += usernamevalue
    greeting.style.display = "block"

    username.value = ""
})

// password validation. password must be 8+ characters
let password = document.querySelector('#password')
let passwordmsg = document.querySelector('.passwordmsg')
let btnsubmit = document.querySelector('.btnsubmit')

// add an event to the password field (input)
password.addEventListener('input', function(){
    let passwordvalue = password.value
    if(passwordvalue.length < 8){
        passwordmsg.textContent = "Password must be 8+ characters"
        btnsubmit.disabled = true
    }
    else{
        passwordmsg.textContent = ""
        btnsubmit.disabled = false
        passwordvalue = ""
    }
})

// load event to disable the submit button
window.addEventListener("load",function(){
    btnsubmit.disabled = true
})