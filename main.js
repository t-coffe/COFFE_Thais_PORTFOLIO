import './style.css'
import './second.css'
import './tablette.css'

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const formButton = document.querySelector('button');

function changeCaret(input) {
    if (input.value.length > 0) {
        input.style.caretColor = "#d9d9d9"
    }else {
        input.style.caretColor = "#d9d9d900"
    }
}

inputName.addEventListener('input', ()=> {
    changeCaret(inputName);
})