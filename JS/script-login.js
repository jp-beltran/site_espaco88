const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); // Corrigido o nome da classe
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate();
    mainPasswordValidate();
    comparePassword(); 
});

function setError(index) {
    campos[index].style.borderBottom = '1px solid #e63636';
    spans[index].style.display = 'inline'; 
}

function removeError(index) {
    campos[index].style.borderBottom = 'solid 1px #ffffff';
    spans[index].style.display = 'none'; 
}



function emailValidate(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(campos[0].value)) {
            setError(0);
        } else {
            removeError(0);
        }
    }

function mainPasswordValidate() {
    if(campos[1].value.length < 8){
        setError(1);
    }
    else {
        removeError(1);
        comparePassword();
    }

}
function comparePassword() {
    if(campos[1].value == campos [2].value && campos[2].value.length >=8 ) {
        removeError(2);
    } 
    else {
        setError(2)
    }
}