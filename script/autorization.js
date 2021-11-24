var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal_registr')
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// открываем модальные окна

btn.addEventListener('click',()=> {
    modal.style.display = "block";
})

// закрываем модальные окна

span.onclick = function() {
    modal.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

//Проверки 

let form = document.forms.info;
let login = form.elements.login;
let password = form.elements.password;

//Проверка, что пользователь ввёл логин

login.addEventListener('input',function() { 
    let loginValue  = login.value;
    let loginError= document.querySelector(".error-none");
    if (loginValue == "") {
        loginError.classList.add('error-mes')
        login.focus();
      return false;
    }
    else {
        loginError.classList.remove('error-mes')
        return true;
    }
});

function loginIsValid(){
    let loginValue = login.value;
    let loginError= document.querySelector(".error-none");
    if (loginValue == "") {
        loginError.classList.add('error-mes')
        return false;
    }
    else {
        loginError.classList.remove('error-mes')
        return true;
    }
}

login.addEventListener('blur', loginIsValid);

//Проверка, что пользователь ввёл пароль

password.addEventListener('input',function() { 
    let passwordValue = password.value;
    let passwordError= document.querySelector(".error-none2");
    if (passwordValue == "") {
        passwordError.classList.add('error-mes2')
        password.focus();
      return false;
    }
    else {
        passwordError.classList.remove('error-mes2')
        return true;
    }
})

function passwordIsValid(){
    let passwordValue = password.value;
    let passwordError= document.querySelector(".error-none2");
    if (passwordValue == "") {
        passwordError.classList.add('error-mes2')
      return false;
    }
    else {
        passwordError.classList.remove('error-mes2')
        return true;
    }
}
password.addEventListener('blur', passwordIsValid);

//отправка формы   

form.onsubmit = function(EO) {
    EO=EO||window.event;
    let ok = true;
            ok = loginIsValid(ok) && ok;
            ok = passwordIsValid(ok) && ok;
            if(!ok) {
                EO.preventDefault();
            }
}          

// второе модальное окно

let autorization=document.getElementById('autorization');console.log(autorization)
autorization.onclick=function(){
    let modal = document.getElementById('myModal');
    let registr=document.getElementById('myModal_registr');
    modal.style.display = "none";
    registr.style.display = "block";
}

let form2 = document.forms.info2;
let nameUser = form2.elements.nameUser;
let email=form2.elements.email;
console.log(email)
let login2 = form2.elements.login;
let password2 = form2.elements.password;

//Проверка, что пользователь ввёл Имя

nameUser.addEventListener('input',function() { 
    let nameUserValue  = nameUser.value;
    let nameUserError= document.querySelector(".error-none3");
    if (nameUserValue == "") {
        nameUserError.classList.add('error-mes3')
        nameUser.focus();
      return false;
    }
    else {
        nameUserError.classList.remove('error-mes3')
        return true;
    }
});

function nameUserIsValid(qwe){
    let nameUserValue  = nameUser.value;
    let nameUserError= document.querySelector(".error-none3");
    if (nameUserValue == "") {
        nameUserError.classList.add('error-mes3')
        return false;
    }
    else {
        nameUserError.classList.remove('error-mes3')
        return true;
    }
}

nameUser.addEventListener('blur', nameUserIsValid);

//Проверка email

email.addEventListener('input',function() { 
    let emailValue = email.value;
    let emailError= document.querySelector(".error-none4");
    
    if (emailValue === "") {
        emailError.classList.add('error-mes4');
        return false;

    }else if(!emailValue.includes("@")){
        emailError.classList.add('error-mes4');
        email.focus();
        return false;
    }
    else{ 
        emailError.classList.remove('error-mes4')  
        return true;
    }
})

function emailIsValid(qwe){
    let emailValue = email.value;
    let emailError= document.querySelector(".error-none4");
    
    if (emailValue === ""||!emailValue.includes("@")) {
        emailError.classList.add('error-mes4');
        return false;
    }
    else{ 
        emailError.classList.remove('error-mes4');  
        return true;
    }
}
email.addEventListener('blur', emailIsValid);

//Проверка, что пользователь ввёл логин

login2.addEventListener('input',function() { 
    let loginValue  = login2.value;
    let loginError= document.querySelector(".error-none5");
    if (loginValue == "") {
        loginError.classList.add('error-mes5')
        login2.focus();
      return false;
    }
    else {
        loginError.classList.remove('error-mes5')
        return true;
    }
});

function loginIsValid2(qwe){
    let loginValue = login2.value;
    let loginError= document.querySelector(".error-none5");
    if (loginValue == "") {
        loginError.classList.add('error-mes5')
        return false;
    }
    else {
        loginError.classList.remove('error-mes5')
        return true;
    }
}

login2.addEventListener('blur', loginIsValid2);

//Проверка, что пользователь ввёл пароль
password2.addEventListener('input',function() { 
    let passwordValue = password2.value;
    let passwordError= document.querySelector(".error-none6");
    if (passwordValue == "") {
        passwordError.classList.add('error-mes6')
        password.focus();
      return false;
    }
    else {
        passwordError.classList.remove('error-mes6')
        return true;
    }
})

function passwordIsValid2(qwe){
    let passwordValue = password2.value;
    let passwordError= document.querySelector(".error-none6");
    if (passwordValue == "") {
        passwordError.classList.add('error-mes6')
      return false;
    }
    else {
        passwordError.classList.remove('error-mes6')
        return true;
    }
}
password2.addEventListener('blur', passwordIsValid2);

//Отправка формы
form2.onsubmit = function(EO) {
    EO=EO||window.event;
    let ok = true;
            ok = nameUserIsValid(ok) && ok;
            ok = emailIsValid(ok) && ok;
            ok = loginIsValid2(ok) && ok;
            ok = passwordIsValid2(ok) && ok;
            if(!ok) {
                EO.preventDefault();
            }
}

document.querySelector('#myBtn').innerHTML=sessionStorage.getItem('nameUser')||'Personal account';
