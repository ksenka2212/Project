
//функция при регистрации добавляет пользователя
const userPush=()=>{
    let form2 = document.forms.info2;
    let userName=form2.elements.nameUser.value;
    let emailUser=form2.elements.email.value;
    let login=form2.elements.login.value;
    let password=form2.elements.password.value;

    fetch('http:localhost:3000/autorization',
    {
        method:'POST',
        body:JSON.stringify(
            {
                "nameUser":userName, 
                "email":emailUser, 
                "login":login, 
                "password":password, 
            }
        ),
        headers:{
            "Content-type":"application/json; charset=utf-8"
        }
    }
    )
    .then(
        (response)=>{
            return response.json();
        }
    )
    .then(
        (data)=>{
            console.log(data);
            // window.location.href='../userAccount/userAccount.html'
        }
    )
}


let validation=document.querySelector('#validation');
console.log(validation)
validation.addEventListener('click',()=>{
    userPush();
    
} )



