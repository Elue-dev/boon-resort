const hamburger = document.querySelector (".hamburger");
hamburger.addEventListener("click", () => document.querySelector(".mainmenu").classList.toggle ("active"));

const burger = document.querySelector (".fa-bars");
burger.onclick = () => {
    burger.classList.toggle ("fa-times");
}

const emailInput = document.querySelector('#email');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    if(emailInput.value === ''){
        clearAlert();
        showAlert('Please enter an email before submission...', 'error');
        e.preventDefault();
    }else{
        emailInput.value = '';
    }
})

function showAlert(message, className){
    var div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    document.querySelector(".insert").appendChild(div);
   
    setTimeout(() => div.remove(), 3000);
}

function clearAlert(){
    let currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
}