

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
let score,initialScore,activePlayer,scoreBoard,playing;


// initail function
let init = function(){
score=0,initialScore=0;activePlayer=0;
scoreBoard=[0,0];
playing=true;

score0El.textContent=0;
score1El.textContent=0;
currentScore0.textContent=0;
currentScore1.textContent=0;
diceEl.classList.add('hidden');
}
init();

// Function to roll the dice
btnRoll.addEventListener('click',function(){
    if(playing){
    //  1. Generate a random number

    score=Math.trunc(Math.random()*6)+1;

    // 2. Display of dice
    diceEl.classList.remove('hidden');
    diceEl.src=`./Imgs/dice-${score}.png`;

    // Condition to check whether dice roll score is 1 or not
   
   if(score!==1){
       initialScore+=score
       document.getElementById(`current--${activePlayer}`).textContent=initialScore;
   }else{
      
      swap();
   }
}

});


// Function to hold the score

 btnHold.addEventListener('click',function(){
    if(playing){

    scoreBoard[activePlayer] += initialScore;
    document.getElementById(`score--${activePlayer}`).textContent=scoreBoard[activePlayer];
   
    if(scoreBoard[activePlayer]>=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing=false;
       
    }else{

    swap();
    }
}
});


// Function to switch between players

 let swap = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    score=0;
    initialScore=0;
    activePlayer = activePlayer===0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
 }
 
 // Function to reset the game

btnNew.addEventListener('click',function(){
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    init();
})





