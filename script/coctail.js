
// function getCoctail(){
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
//     .then(
//         (req)=>{
//             return req.json();
//         }
//     )
//     .then(
//         (data) => {
//             console.log(data);
//             data.drinks.forEach((item)=>{
//                 for(let i=1;i<16;i++){
//                     console.log(item)
//                     if(item[`strIngredient${i}`]===null||item[`strIngredient${i}`]==''){
//                         break;
//                     }
//                 // document.querySelector('.img_coctail').src=item[`strDrinkThumb${i}`];
//                 document.querySelector('.card-title').innerHTML+=item[`strMeasure${i}`]+':'+item[`strIngredient${i}`];
//             }//надо чтобы картинка формировалась слева а инфа справа, сейчас формируется не так
//         })
//         })
//     .catch(err => {
//         console.error(err);
//     });
//     } 
//     getCoctail();

// console.log(document.querySelector('.img_coctail').src)

document.querySelector('#myBtn').innerHTML=sessionStorage.getItem('log');
console.log(document.querySelector('#myBtn').innerHTML)
let value='a';
let preloader=document.querySelector('.preloader')
function getCoctailValue(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`)
    .then(
        (req)=>{
            return req.json();
        }
    )
    .then(
        (data) => {
            console.log(data);
            displayCoctail(data)
            preloader.classList.remove('none')
        }
    )
    .catch(err => {
        console.error(err);
    });
    } 
   getCoctailValue();

   //фильтр по англ буквам
   document.querySelector('#filter').addEventListener('click',(e)=>{
    let preloader=document.querySelector('.preloader')
    preloader.classList.remove('none')
    value=e.target.innerHTML;
    let drinkSection=document.querySelector('.drink-section');
    drinkSection.innerHTML='';
    
    getCoctailValue();
    
})

    function displayCoctail(coctail){
        
        console.log(coctail.drinks)
        let drinkSection=document.querySelector('.drink-section')
        for(i=0;i<coctail.drinks.length;i++){
        let drinkName=document.createElement('h2');
        drinkName.innerHTML=coctail.drinks[i].strDrink;
        drinkSection.appendChild(drinkName);
        let container=document.createElement('div');
        container.classList.add('container');
        drinkSection.appendChild(container);
        let img=document.createElement('img');
        img.src=coctail.drinks[i].strDrinkThumb;
        container.appendChild(img);
        let preloader=document.querySelector('.preloader')
        preloader.classList.add('none')
        //список ингредиентов
        let ingredientUl=document.createElement('ons-list');
        container.appendChild(ingredientUl)
            
        for(let a=1;a<16;a++){
            if(coctail.drinks[i][`strIngredient${a}`]===null||coctail.drinks[i][`strIngredient${a}`]==''){
                break;
            }
            
            let ingredient=document.createElement('ons-list-item');
            ingredient.innerHTML='<br>'+coctail.drinks[i][`strMeasure${a}`]+':'+coctail.drinks[i][`strIngredient${a}`]+'<br>';
            console.log(coctail.drinks[i][`strIngredient${a}`]);
            ingredientUl.appendChild(ingredient)
            img.style='margin: 0 30px' ;  
        }
        let card=document.createElement('ons-card');
        card.innerHTML='<br><b>Recipe:</b> '+coctail.drinks[i].strInstructions
        ingredientUl.appendChild(card);     
    }
}

