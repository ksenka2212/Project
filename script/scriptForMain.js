let main_anketa=document.querySelector('.start-calc-button');
main_anketa.onclick=function(){
    document.location.href='../step1/indexCalc.html';
}

document.querySelector('#myBtn').innerHTML=sessionStorage.getItem('log')||'Personal account';


var collection=document.querySelector('.collection');
var collectionElem=document.querySelector('.collection-item');
collection.addEventListener('click', function(event){
if(event.target.tagName==='LI'&& event.target.classList.contains('collection-item')){
    event.target.nextElementSibling.classList.toggle('answer-item-show');
}

})
window.addEventListener("beforeunload", function() {
    sessionStorage.nameUser='Personal account';
})