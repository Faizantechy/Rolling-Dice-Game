const rollBtn=document.querySelector('.rollBtn')
const h1=document.querySelector('.h1')
let image=document.querySelectorAll('img')[0]



rollBtn.addEventListener('click', function(){

    new Audio('sound.mp3').play();


    let randomNum=Math.floor(Math.random()*6)+1;

let imageSrc='dice'+randomNum+'.png';

image.style.transition = 'transform 0.5s';
image.style.transform='rotate(360deg)'





setTimeout(function() {
    image.style.transform = 'rotate(0deg)';
    image.setAttribute('src', imageSrc);

}, 500); 

h1.textContent = 'You rolled a ' + randomNum;



    //logical Conditions:

if(randomNum==6){

    h1.textContent = 'You Won 🏆 🏆 ';
    new Audio('win.mp3').play();

    setTimeout(function(){
        new Audio('firework.mp3').play();


    },1000);


}
    

})




