//Навигация
let back=document.querySelector('.js-back-button-step-2')
back.onclick=function(){
    document.location.href='../step1/indexCalc.html';
}
document.querySelector('.js-drink-cocktail-div').style='display:none';

//скрытие блока по выбору коктейля для всех инпутов кроме коктейля
let coctail=document.querySelector('#Cocktail');
coctail.addEventListener('click',function(){
    document.querySelector('.js-drink-cocktail-div').style='display:block'
    document.querySelector('.js-drink-strength-custom-div').style='display:none'
    document.querySelector('.js-drink-size-custom-ml-div').style='display:none'
})
//Движения при нажатии кнопок блока с типом напитка
let beer=document.querySelector('#Beer');
let wine=document.querySelector('#Wine');
let cider=document.querySelector('#Cider');
let spirits=document.querySelector('#Spirits');
let custom=document.querySelector('#Custom');

beer.addEventListener('click',function(){
    document.querySelector('.js-drink-cocktail-div').style='display:none'
    document.querySelector('.js-drink-strength-custom-div').style='display:block'
    document.querySelector('.js-drink-size-custom-ml-div').style='display:block'
})

wine.addEventListener('click',function(){
    document.querySelector('.js-drink-cocktail-div').style='display:none'
    document.querySelector('.js-drink-strength-custom-div').style='display:block'
    document.querySelector('.js-drink-size-custom-ml-div').style='display:block'
})

cider.addEventListener('click',function(){
    document.querySelector('.js-drink-cocktail-div').style='display:none'
    document.querySelector('.js-drink-strength-custom-div').style='display:block'
    document.querySelector('.js-drink-size-custom-ml-div').style='display:block'
})

spirits.addEventListener('click',function(){
    document.querySelector('.js-drink-cocktail-div').style='display:none'
    document.querySelector('.js-drink-strength-custom-div').style='display:block'
    document.querySelector('.js-drink-size-custom-ml-div').style='display:block'
})
custom.addEventListener('click',function(){
    document.querySelector('.js-drink-cocktail-div').style='display:none'
    document.querySelector('.js-drink-strength-custom-div').style='display:block'
    document.querySelector('.js-drink-size-custom-ml-div').style='display:block'
})

//по умолчанию скрываем список выбранных напитков
document.querySelector('.js-drinks-container').style='display:none';

//По умолчанию тип напитка 
localStorage.setItem('typeOfSpirits','Beer');
let drink='Beer'

//вытаскиваем в переменную выбранный напиток
let coctailType='';
let degrees='';
let hunger ='0.94';
let checked = document.getElementsByClassName('flex')[0].addEventListener('input', function(e){
            drink=e.target.value
    })
// let rew=localStorage.getItem('typeOfSpirits')

let coct=document.querySelector('.coctails_num').addEventListener('input', function(e){
                coctailType=e.target.nextElementSibling.innerHTML
                degrees=e.target.value;    
        }) 

document.querySelector('.flex.js-hunger').addEventListener('input', function(e){   
    hunger=1-e.target.value/100;

})

//открываем блок

let btnAdd=document.querySelector('.js-add-drink-button');

//Проверка, что пользователь ввёл размер напитка
let sizeCustomML=document.getElementById('alcoholSizeCustomML')
sizeCustomML.addEventListener('input',function() { 
    let sizeCustomMLValue  = sizeCustomML.value;
    let sizeCustomMLError= document.querySelector(".error-size");
    if (sizeCustomMLValue == ""||sizeCustomMLValue <= 0) {
        sizeCustomMLError.classList.add('error-mes-size')
        sizeCustomML.focus();
      return false;
    }
    else {
        sizeCustomMLError.classList.remove('error-mes-size')
        return true;
    }
});

function sizeCustomMLisValid(){
    let sizeCustomMLValue  = sizeCustomML.value;
    let sizeCustomMLError= document.querySelector(".error-size");
    if (sizeCustomMLValue == ""||sizeCustomMLValue <= 0) {
        sizeCustomMLError.classList.add('error-mes-size')
      return false;
    }
    else {
        sizeCustomMLError.classList.remove('error-mes-size')
        return true;
    }
}

sizeCustomML.addEventListener('blur', sizeCustomMLisValid);

//Проверка что пользователь ввёл крепость напитка
let alcoholStrength=document.getElementById('alcoholStrengthCustom')
alcoholStrength.addEventListener('input',function() { 
    let alcoholStrengthValue  = alcoholStrength.value;
    let alcoholStrengthError= document.querySelector(".error-size2");
    if (alcoholStrengthValue === ""||alcoholStrengthValue < 0) {
        alcoholStrengthError.classList.add('error-mes-size2')
        alcoholStrength.focus();
      return false;
    }
    else {
        alcoholStrengthError.classList.remove('error-mes-size2')
        return true;
    }
});

function alcoholStrengthisValid(){
    let alcoholStrengthValue  = alcoholStrength.value;
    let alcoholStrengthError= document.querySelector(".error-size2");
    if (alcoholStrengthValue == ""||alcoholStrengthValue < 0) {
        alcoholStrengthError.classList.add('error-mes-size2')
      return false;
    }
    else {
        alcoholStrengthError.classList.remove('error-mes-size2')
        return true;
    }
}

alcoholStrength.addEventListener('blur', alcoholStrengthisValid);

//берем данные с шага 1 и помещаем всё в один объект
let genderInfoStep1=localStorage.getItem('gender');
let weightInfoStep1=localStorage.getItem('weight');
let heightInfoStep1=localStorage.getItem('height');


function addBtn(EO){
document.querySelector('.js-drinks-container').style='display:block';
let ul=document.querySelector('.js-drink-list-text')
let mainForm=document.forms.mainForm;
let size = mainForm.elements.alcoholSizeCustomML.value;

let qwe=size+'мл ';
let strength = mainForm.elements.alcoholStrengthCustom.value;
let time=document.querySelector('#time').value;
if(!coctailType==''){
    console.log(coctailType)
    qwe='';
    strength='';
    size='';
}
if(coctailType==''){
    coctailType='';
    degrees='';
}

EO=EO||window.event;
    let ok = true;
            ok = sizeCustomMLisValid(ok) && ok;
            ok = alcoholStrengthisValid(ok) && ok;
            if(!ok) {
                EO.preventDefault();
            }

    let date=document.querySelector('#date').value;

    ul.innerHTML+=
    `<div class="drinks-entry">
    <p>${drink}: ${coctailType} ${qwe}(${degrees}${strength}%)<span class="drinks-subtext">${time}hours passed, ${date}</span></p>
    <svg class="delete-drink-button js-delete-drink-button" height="36px" width="36px" fill="#f44336" viewBox="0 0 365.696 365.696" xmlns="http://www.w3.org/2000/svg">
    <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"></path></svg>
    </div>`
  
  
  
   //записываем в localStorage результаты
  let drinkConsumed={
    typeOfSpirits: drink,
    coctailType:coctailType,
    degrees: degrees,
    size:size||250,
    time:time,
    date:date,
    strength:strength,
    hunger:hunger,
    gender:genderInfoStep1,
    weight:weightInfoStep1,
    height:heightInfoStep1
   }
   localStorage.setItem ("drinkConsumed", JSON.stringify(drinkConsumed));

   //добавляем массив напитков и всех характеристик
   let allEntries = JSON.parse(localStorage.getItem("allEntries"));
   let drinks = JSON.parse(localStorage.getItem("drinks"));
   if(allEntries == null) allEntries = [];
   if(drinks == null) drinks = [];
   allEntries.push(drinkConsumed);
   drinks.push(drinkConsumed.typeOfSpirits);
   localStorage.setItem("allEntries", JSON.stringify(allEntries));
   localStorage.setItem("drinks", JSON.stringify(drinks));
var result=0;
let infoDrink = JSON.parse(localStorage.getItem ("allEntries"));

let sum1=0;
let sum2=0;
for(let i=0;i<infoDrink.length;i++){
    if(infoDrink[i].typeOfSpirits=='Cocktail'){
        result=(((infoDrink[i].degrees*infoDrink[i].size/100)*infoDrink[i].hunger)/(infoDrink[i].weight*infoDrink[i].gender))-infoDrink[i].time*0.15
        sum1+=result;
    }else{
        result=(((infoDrink[i].strength*infoDrink[i].size/100)*infoDrink[i].hunger)/(infoDrink[i].weight*infoDrink[i].gender))-infoDrink[i].time*0.15   
        sum2+=result;
    }
    let result_sum=sum1+sum2;
    localStorage.setItem ("result", result_sum);
    let dop=parseFloat((result_sum-0.3)/0.15);
    dop=parseFloat(dop.toFixed(0));
    localStorage.setItem ("dop", dop);
    }
    deleteSpirits()
}


// удаление чего-либо выбранного пользователем
let removes=document.getElementsByClassName('js-delete-drink-button');
function deleteSpirits(){
    for(let remove of removes){
        remove.onclick = function(){
            console.log(remove.parentElement)
            remove.parentElement.remove(); 

        }
    } 
}

//удаление всего списка
document.querySelector('.js-clear-drinks-toggle').addEventListener('click',(()=>{
  document.querySelector('.js-drink-list-text').innerHTML='';
  localStorage.removeItem('allEntries');
  localStorage.removeItem('result');
  dop='';
})
)

btnAdd.onclick=addBtn;
deleteSpirits()

document.querySelector('.js-next-button-step-2').addEventListener('click',()=>{
    localStorage.removeItem('allEntries');
    localStorage.removeItem('drinks');
    window.location.href='../result/result.html';
})


document.querySelector('#myBtn').innerHTML=sessionStorage.getItem('nameUser')||'Personal account';

