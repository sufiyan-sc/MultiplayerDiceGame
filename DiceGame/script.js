

let score0El=document.getElementById('score--0');
let score1El=document.getElementById('score--1');
let diceEl=document.querySelector('.dice');
let btnNew=document.querySelector('.btn--new');
let btnRoll=document.querySelector('.btn--roll');
let btnHold=document.querySelector('.btn--hold');
let currentScore0=document.querySelector("#current--0");
let currentScore1=document.querySelector("#current--1");
let player0=document.querySelector(".player--0");
let player1=document.querySelector(".player--1");



// Declaring variables

let score=0,initialScore=0;activePlayer=0;



score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click',function(){
    //  1. Generate a random number

    score=Math.trunc(Math.random()*6)+1;
    console.log(score);

    // 2. Display of dice
    diceEl.classList.remove('hidden');
    diceEl.src=`./Imgs/dice-${score}.png`;

    // Condition to check whether dice roll score is 1 or not
   
    if(score!==1){
        initialScore+=score;
        document.getElementById(`current--${activePlayer}`).textContent=initialScore;
    }
    else{
        initialScore=0;
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer= activePlayer=== 0 ? 1 :0;
        player0.classList.toggle('player--active'); 
        player1.classList.toggle('player--active'); 
    }

      
});








