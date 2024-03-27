'use strict';
//SELECTING AND MANIPULATING EVENTS//
/* document.querySelector('.score').textContent = 23;

// console.log(document.querySelector('.score').textContent);  // this is selecting an element from the class of the html to change and manipulate them ; here it is habdeled by document.querySelector().textContent and the classes will be in "" with a dot at begining;

// // for the input value : as we have taken an input box in html to check or to assign value in that using dom js we'll use the .value:

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value)

// // HANDLING CLICK EVENTS:
//  events are something that  happen in the webpage to handel them we use onclick mousehandeler etc*/
/*---------------------------------------------------------------------------------------------------*/
//EVENT HANDELING

// document.querySelector('.check').addEventListener('click' , function(){
//     console.log(document.querySelector('.guess').value);
// }); // the addEvemtListener takes two attributes 1st one is the action or event needed for the element for which you have called and second one here is taken as a function;we haven't call the function; we only declare it and javascript engine called it when the event is occured i.e. click;


let score = 20 ; // that we have taken in html for the game;
let secretnumber = Math.trunc(Math.random() * 20) + 1; // trunc will eliminate the decimal digits and give a whole num so and it will reach upto 19 sol+1; as we have decided 1 to 20;
let highScore = 0 ; // take a minimal as maxi mini like this for highScore;


const disPlay = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', 
function(){
const val = Number(document.querySelector('.guess').value);

if(!val){
    //document.querySelector('.message').textContent = '🖐No Number!! ';// this is the 1st scenario where assume that the number is not assiggned;
    disPlay('🖐No Number!! ');
}
else if(val === secretnumber){
    //document.querySelector('.message').textContent = '👲Yaa this is the Number!! ';
    disPlay('👲Yaa this is the Number!! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
    
} else if(val !== secretnumber){
    if(score > 1){
        //document.querySelector('.message').textContent = val > secretnumber ?'Too high>>> ' : 'Too low<<< ';
        disPlay(val > secretnumber ?'Too high>>> ' : 'Too low<<< ');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
           // document.querySelector('.message').textContent = 'You Lost 😓 ';
            disPlay('You Lost 😓 ');
            document.querySelector('.score').textContent = '0';
        }
}
// else if ( val > secretnumber){
//     if(score > 1){
//     document.querySelector('.message').textContent = 'Too high>>> ';
//     score--;
//     document.querySelector('.score').textContent = score;
//     }
//     else{
//         document.querySelector('.message').textContent = 'You Lost 😓 ';
//         document.querySelector('.score').textContent = '0';
//     }
// }
// else if(val < secretnumber){
//     if(score > 1){
//         document.querySelector('.message').textContent = 'Too low<<< ';
//         score--;
//         document.querySelector('.score').textContent = score;
//         }
//         else{
//             document.querySelector('.message').textContent = 'You Lost 😓 ';
//             document.querySelector('.score').textContent = '0';
//         }
// }
}); 
document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.message').textContent = 'Start guessing...';
    disPlay('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
