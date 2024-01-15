const score = JSON.parse(localStorage.getItem('score'))
||{
  wins:0,
  losses:0,
  ties:0
}
;
// if(!score) {
//     score={
//         wins:0,
//         losses:0,
//         ties:0
//     };
// }

updateScore();
let isAutoplay=false;
// let playerMove;
let intervalId;

function autoplay() {
    if(!isAutoplay){
     intervalId=setInterval(()=> {
     const playerMove=pickComputerMove();
    //  playerMove;
        playGame(playerMove);
    },1500);
    isAutoplay=true;
    }   
    else {
        clearInterval(intervalId);
        isAutoplay=false;
    }
}

function resetValues() {
score.losses=0;
score.ties=0;
score.wins=0;
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});

document.querySelector('.js-scissor-button').addEventListener('click',()=>{
    playGame('scissor');
});

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'|| event.key==='R'){
        playGame('rock');
    }
    else if (event.key==='P'|| event.key==='p'){
        playGame('paper');
    }
    else if(event.key==='s'|| event.key==='S') {
        playGame('scissor');
        // playGame('scissor');
    }
})

function playGame(pickedMove){
let computerMove=pickComputerMove();
let result;
if(pickedMove==='scissor'){
    if(computerMove==='scissor'){
        result='Tie.';
    }
    else if(computerMove==='paper') {
   result='You won.';
   
    }
  else if(computerMove==='rock'){
     result='You lose.';
    //  score.losses=score.losses+1;
   }
}
else if(pickedMove==='rock'){
    if(computerMove==='rock'){
        result='Tie.';
    }
    else if(computerMove==='scissor') {
   result='You won.';
//    score.wins=score.wins+1;
    }
  else if (computerMove==='paper'){
     result='You lose.';
     
   }
}
else if(pickedMove==='paper'){
    if(computerMove==='paper'){
        result='Tie.';
    }
    else if(computerMove==='rock') {
   result='You won.';
   
    }
  else if(computerMove==='scissor'){
     result='You lose.';
   
   }
}
if(result==='You won.'){
    score.wins+=1;
}
else if(result==='You lose.'){
    score.losses+=1;
}
else {
    score.ties+=1;
}


localStorage.setItem('score',JSON.stringify(score));

updateScore();
document.querySelector('.js-result').innerHTML= `${result}`;

document.querySelector('.js-moves').innerHTML= `Kaddu-Aryan-Vaibhav
<img src="./images/${pickedMove}-emoji.png" class="move-icon" id="icon" alt="pickedMove">

<img src="./images/${computerMove}-emoji.png" class="move-icon " id="icon" alt="">
Groot-Ishu`;

// alert(`you picked ${pickedMove}.computer picked ${computerMove}.${result}
// Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
}

function updateScore() {
document.querySelector('.js-score').innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

}

function pickComputerMove() {
let computerMove;
const randomNumber=Math.random();

if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
    
}
else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
    
}
else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='scissor';
    
}
return computerMove;
}