const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-requiresd');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

function setError(index) {
    campos[index].style.borderBottom = '2px solid #e63636 ';

}
function removeError(index) {
    campos[index].style.borderBottom = 'solid 1px #ffffff';
}

    function emailValidate(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(campos[0].value)) {
            setError(0);
        } else {
            removeError(0);
        }
    }
