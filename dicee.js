const randomNumber1= Math.floor(Math.random()*6+1);
const randomNumber2= Math.floor(Math.random()*6+1);
const randomDiceImage='Dice'+randomNumber1+'.png';
const randomDiceImage2='Dice'+randomNumber2+'.png';
const randomImageSource='images/'+randomDiceImage;
const randomImageSource1='images/'+randomDiceImage2;
const heading =document.querySelector('h1');

const image1 =document.querySelectorAll('img')[0];
image1.setAttribute("src", randomImageSource);
const image2 =document.querySelectorAll('img')[1];
image2.setAttribute("src",randomImageSource1);
if(randomNumber1>randomNumber2){
heading.innerHTML='Player 1 wins'
}
else if(randomNumber2>randomNumber1){
    heading.innerHTML='Player 2 wins'
}
else{
    heading.innerHTML='Draw'
}





console.log(randomImageSource);
