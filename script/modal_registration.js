// const getData = () =>{
//     fetch('http:localhost:3000/autorization')
//     .then(
//         (req)=>{
//             return req.json();
//         }
//     )
//     .then(
//         (data) => {
//             console.log(data);
//             let user = document.querySelector('#user');
//             let loginUser = document.querySelector('#loginUser');
//             let emailUser = document.querySelector('.emailUser');
//             data.forEach((item)=>{
//                 user.innerHTML = `${item.nameUser}`;
//                 sessionStorage.setItem('nameUser', `${item.nameUser}`)
//                 localStorage.nameUser=`${item.nameUser}`;
//                 loginUser.innerHTML =`${item.login}`;
//                 document.querySelector('.email_none').classList.add('block')
//                 emailUser.innerHTML =`${item.email}`;
//             })
//             sessionStorage.log=loginUser.innerHTML;
            
//             emailUser.innerHTML=sessionStorage.setItem('email')
//             user.innerHTML=sessionStorage.setItem('log');

//         }
//     )
//     .catch( 
//         err =>{
//             console.log(err);
//         }
//         )
// }
// document.querySelector('#validation').addEventListener('click',()=>{
// getData();
// })

document.querySelector('#loginUser').innerHTML=sessionStorage.log;
document.querySelector('#user').innerHTML=sessionStorage.log;
