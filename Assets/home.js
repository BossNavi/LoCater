
const btn = document.querySelector('#signup-submit');

btn.addEventListener('click',  (e) => {
    e.preventDefault();
    const form = {
        username: document.querySelector('#signup-username').value,
        email: document.querySelector('#signup-email').value,
        password: document.querySelector('#signup-password').value,
        confirmPassword: document.querySelector('#signup-confirm-password').value,

    }
    fetch("http://localhost:3000/auth/register", {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.username,
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword
        })
        
    })
    .then(response => response.json())
    .then(data => validation(data))
})

function validation(data){
    
    const signup = document.querySelector("#signup");

    signup.children[1].innerHTML = `<span>${data.message}</span>`;
    return;
}
