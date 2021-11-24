//функция для кнопки войти, проверяем есть ли данные в data

const getEnter = () =>{
    fetch('http:localhost:3000/autorization')
    .then(
        (req)=>{
            return req.json();
        }
    )
    .then(
        (data) => {
            console.log(data);
            let log = document.querySelector('#log');
            let password=document.querySelector('#password');
            data.forEach((item)=>{
                console.log(item.login)
                if (item.login==log.value && item.password==password.value){
                    console.log(item.email)
                    sessionStorage.setItem('log',log.value)
                    sessionStorage.setItem('password',password.value)
                document.location.href='../userAccount/userAccount.html'
            }
          
            //     user.innerHTML = `${item.nameUser}`;
            //     loginUser.innerHTML =`${item.login}`;
            //     emailUser.innerHTML =`${item.email}`;
            })
        }
    )
    .catch( 
        err =>{
            console.log(err);
        }
        
        )
}

//функция для Войти
let enter=document.querySelector('#submit');
enter.addEventListener('click',()=>{
    getEnter();
})


