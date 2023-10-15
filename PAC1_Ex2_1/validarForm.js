const username = document.getElementById('username');
const email = document.getElementById("mail");
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value.length <= 3){
    messages.push ('Username is too short')
    
    }

    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
    
})