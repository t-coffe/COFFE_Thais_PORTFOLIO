import './style.css'
import './second.css'
import './tablette.css'

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const formButton = document.querySelector('button');

const regex1 = /[0-9]/g;
const regexA = /[a-z]/g;


function changeCaret(input) {
    if (input.value.length > 0) {
        input.style.caretColor = "#d9d9d9";
    }else {
        input.style.caretColor = "#d9d9d900";
    }
}

inputName.addEventListener('input', ()=> {
    changeCaret(inputName);
    if (inputName.value.length > 5 && inputName.value.search(" ")>-1 && inputName.value.search(regex1)<0) {
        inputName.style.borderBottomColor = "#4ee1a0" ;
    } else {
        inputName.style.borderBottomColor = "#ff6f5b";
    }
})

inputEmail.addEventListener('input', ()=>{
    changeCaret(inputEmail);
    let arrobase = inputEmail.value.search('@');
    if (inputEmail.value.search(regexA) === 0 && arrobase >2) {
        inputEmail.style.borderBottomColor = "#4ee1a0" ;
    } else {
        inputEmail.style.borderBottomColor = "#ff6f5b";
    }
})