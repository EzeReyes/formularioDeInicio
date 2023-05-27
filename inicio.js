const email=document.querySelector('#email');
const ojo=document.querySelector('#ojo');
const noOjo=document.querySelector('#noOjo');
const passwordField=document.querySelector('#passwordField');
const button = document.querySelector('#button');
passwordField.addEventListener("input", validarPass);
const emailError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');
const check = document.querySelector('#check');

// ESTA FUNCIÓN VALIDA QUE EL INPUT CONTENGA LOS CARACTERES CORRECTOS PARA UN EMAIL
function validarEmail () {
    const RegExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    email.onblur = () => {
        RegExp.test(email.value) ? (emailError.style.display='none',
        email.style.boxShadow="1px 1px 1px 1px rgb(0, 255, 0)", check.style.display='block') : (emailError.style.display='block',
        email.style.boxShadow="1px 1px 1px 1px red", check.style.display='none')
    }
}
validarEmail()

// ESTA FUNCIÓN VALIDA QUE EL INPUT CONTENGA LOS CARACTERES CORRECTOS PARA UN EMAIL
function validarPass () {
    const password = passwordField.value;
    password.length < 8 || !/\d/.test(password) ? (passError.style.display='block',
    passwordField.style.boxShadow="1px 1px 1px 1px red", check2.style.display='none') : (passError.style.display='none',
    passwordField.style.boxShadow="1px 1px 1px 1px rgb(0, 255, 0)", check2.style.display='block')
    }



// ESTA FUNCIÓN, NOS MUESTRA EL PASSWORD, O LO OCULTA
function verContrasenia (param1,param2,param3) {
    param1.onclick = () => {
        document.querySelector('#passwordField').type=param3;
        param1.style.display='none';
        param2.style.display="block";
    }
}
verContrasenia(ojo,noOjo,'text');
verContrasenia(noOjo,ojo,'password');



