let navbar = document.querySelector(".navbar")
let loginForm = document.querySelector(".login-form")
let notif = document.querySelector(".notif")
let chat = document.querySelector(".chat")

// hide elements show
let signUp = document.querySelector("#signup")
let signIn = document.querySelector("#signin")
let inbox = document.querySelector(".inbox")
let convo = document.querySelector(".convo")

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    loginForm.classList.remove('active')
    notif.classList.remove('active')
    chat.classList.remove('active')
}

document.querySelector('#login-btn').onclick = () => {
    navbar.classList.remove('active')
    loginForm.classList.toggle('active')
    notif.classList.remove('active')
    chat.classList.remove('active')
}

document.querySelector('#notif-btn').onclick = () => {
    navbar.classList.remove('active')
    chat.classList.remove('active')
    loginForm.classList.remove('active')
    notif.classList.toggle('active')
}

document.querySelector('#message-btn').onclick = () => {
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
    notif.classList.remove('active')
    chat.classList.toggle('active')
}

document.querySelector('#signup-btn').onclick = () => {
    signUp.classList.remove('hide')
    signIn.classList.add('hide')
}

document.querySelector('#signin-btn').onclick = () => {
    signUp.classList.add('hide')
    signIn.classList.remove('hide')
}

document.querySelector('#user-id').onclick = () => {
    inbox.classList.add('hide')
    convo.classList.remove('hide')
}

document.querySelector('#back-inbox').onclick = () => {
    inbox.classList.remove('hide')
    convo.classList.add('hide')
}

// active form close onscroll event
window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    chat.classList.remove('active');
}


