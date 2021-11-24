window.addEventListener('DOMContentLoaded', function () {

    function rollDice () {

        var diceSide1 = document.querySelector('.first-face');
        var diceSide2 = document.querySelector('.second-face');
        var diceSide3 = document.querySelector('.third-face');
        var diceSide4 = document.querySelector('.fourth-face');
        var diceSide5 = document.querySelector('.fifth-face');
        var diceSide6 = document.querySelector('.sixth-face');
console.log(diceSide2)
        var status = document.getElementById('status');

        var side_result= Math.floor( Math.random() * 6 ) + 1;

        if (side_result===2){
            diceSide2.classList.add('apper');
            diceSide1.classList.remove('apper');
            diceSide3.classList.remove('apper');
            diceSide4.classList.remove('apper');
            diceSide5.classList.remove('apper');
            diceSide6.classList.remove('apper');

        }
        if (side_result===3){
            diceSide3.classList.add('apper')
            diceSide1.classList.remove('apper');
            diceSide2.classList.remove('apper');
            diceSide4.classList.remove('apper');
            diceSide5.classList.remove('apper');
            diceSide6.classList.remove('apper');
        }
        if (side_result===4){
            diceSide4.classList.add('apper')
            diceSide1.classList.remove('apper');
            diceSide3.classList.remove('apper');
            diceSide2.classList.remove('apper');
            diceSide5.classList.remove('apper');
            diceSide6.classList.remove('apper');
        }
        if (side_result===5){
            diceSide5.classList.add('apper')
            diceSide1.classList.remove('apper');
            diceSide3.classList.remove('apper');
            diceSide4.classList.remove('apper');
            diceSide2.classList.remove('apper');
            diceSide6.classList.remove('apper');
        }
        if (side_result===6){
            diceSide6.classList.add('apper')
            diceSide1.classList.remove('apper');
            diceSide3.classList.remove('apper');
            diceSide4.classList.remove('apper');
            diceSide5.classList.remove('apper');
            diceSide2.classList.remove('apper');
        }
        else if(side_result===1){
            diceSide1.classList.add('apper');
            diceSide3.classList.remove('apper');
            diceSide4.classList.remove('apper');
            diceSide5.classList.remove('apper');
            diceSide2.classList.remove('apper');
            diceSide6.classList.remove('apper');
        }
        
        

        status.innerHTML = 'Ваш результат ' + side_result + '.';

        
    }

    var buttonRollDice = document.querySelector('.dice-roll');
    buttonRollDice.addEventListener('click', rollDice, false);

}, false);

//генератор случайного коктейля
function getRandomCoctail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
        (req)=>{
            return req.json();
        }
    )
    .then(
        (data) => {
            console.log(data);
            displayRandomCoctail(data)
        }
    )
    .catch(err => {
        console.error(err);
    });
    } 
    getRandomCoctail();
    
    function displayRandomCoctail(coctail){
        console.log(coctail.drinks[0])
        let drinkSection=document.querySelector('#drink-section')
        // document.getElementById('drink-section').innerHTML='';
        let drinkName=document.createElement('h2');
        drinkName.innerHTML=coctail.drinks[0].strDrink;
        drinkSection.appendChild(drinkName);
        let container=document.createElement('div');
        container.classList.add('container');
        drinkSection.appendChild(container);
        let img=document.createElement('img');
        img.src=coctail.drinks[0].strDrinkThumb;
        container.appendChild(img);
        let button=document.createElement('button');
        button.classList.add('dice-roll')
        button.classList.add('button-container')
        button.innerHTML='Ингредиенты/рецепт';
        drinkSection.appendChild(button);
        let ingredientUl=document.createElement('ons-list');
        container.appendChild(ingredientUl)
            button.onclick=function(){
        for(let i=1;i<16;i++){
            if(coctail.drinks[0][`strIngredient${i}`]===null||coctail.drinks[0][`strIngredient${i}`]==''){
                break;
            }
            
            let ingredient=document.createElement('ons-list-item');
            ingredient.innerHTML=coctail.drinks[0][`strMeasure${i}`]+':'+coctail.drinks[0][`strIngredient${i}`];
            console.log(coctail.drinks[0][`strIngredient${i}`]);
            ingredientUl.appendChild(ingredient)
            img.style='margin: 0 30px' ;  
            button.style='display:none'
        }
        let ingredient=document.querySelector('ons-list');
        let card=document.createElement('ons-card');
        card.innerHTML='Recipe: '+coctail.drinks[0].strInstructions
        ingredient.appendChild(card); 
        
    }
       
   
        
    }
    function deleteItems(){
        document.getElementById('drink-section').innerHTML='';
    }
        document.querySelector('#randomize').addEventListener('click',()=>{
            // console.log(document.getElementById('drink-section').innerHTML)
            // document.getElementById('drink-section').innerHTML='';
            deleteItems()
            getRandomCoctail(); 
        })

        document.querySelector('#myBtn').innerHTML=sessionStorage.getItem('log')||'Personal account';