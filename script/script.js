

let back=document.querySelector('.back-button')
back.onclick=function(){
    document.location.href='../MainPage/mainPage.html';
}
let formInform=document.forms.gender;
let weight = formInform.elements.weight;
let height = formInform.elements.height;
console.log(weight)
function setLocal(){
    localStorage.setItem('weight',weight.value);
    localStorage.setItem('height',height.value)
}
// let selectGender=document.querySelector()
// localStorage.setItem('test', 1);
document.querySelector('.flex').addEventListener('input', function(e){
localStorage.setItem('gender',e.target.value)
})
 

//переход в анкете с одной страницы на другую
let add=document.querySelector('.next-button');
add.onclick=function(){
    document.location.href='../step2/anketa.html';
    setLocal();
}
document.querySelector('#myBtn').innerHTML=sessionStorage.getItem('log');

