let item=+localStorage.getItem('result')
item=parseFloat(item.toFixed(2))
let dop=localStorage.getItem ('dop')
if(item>0){
    document.querySelector('.result').innerHTML=item+'‰';
    document.querySelector('#dop').innerHTML=`You'll be totally sober in ${dop} hours`
}else{
    document.querySelector('.result').innerHTML="You're totally sober!";
}

window.onbeforeunload = function() {
    localStorage.removeItem('result');
};

document.querySelector('#myBtn').innerHTML=sessionStorage.getItem('log')||'Personal account';