let choices = ['Rock', 'Paper', 'Scissor'];
const para = document.querySelector('#resultss');
const score = document.querySelector('.score');
const result = document.querySelector('.result')
const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');
const btn3 = document.querySelector('#button3');
let value = '';
let userS = 0;
let pcS = 0;



btn1.addEventListener('click', () =>{playRound('rock', getComputerChoice())})
btn2.addEventListener('click', () =>{playRound('paper', getComputerChoice())})
btn3.addEventListener('click', () =>{playRound('scissor', getComputerChoice())})

score.textContent = `User Score: ${userS}  pc Score: ${pcS}`;

   
    
    
function getComputerChoice (){
   let computerChoice = choices[Math.floor(Math.random()*3)];
   
    return computerChoice;
}



function playRound(user, pc){
    switch(user){
            case 'rock': 
            if (pc === 'Paper'){
                              
                para.textContent = 'You Lost!, he had Paper';
                
                score.textContent = `User Score: ${userS}  pc Score: ${pcS++}`;

            } else if (pc === 'Scissor'){
               
                para.textContent = 'You Won!, he had Scissor';
                 
                score.textContent = `User Score: ${userS++}  pc Score: ${pcS}`;
            } else{
               
                para.textContent = 'its a tie!, he had Rock';
                
            } break;
            case 'paper':
                if(pc === 'Scissor'){
                   
                para.textContent = 'You Lost! he had Scissor';
                 
                score.textContent = `User Score: ${userS}  pc Score: ${pcS++}`;
                } else if (pc === 'Rock'){
                   
                    para.textContent = 'You Won!, he had Rock';
                    
                    score.textContent = `User Score: ${userS++}  pc Score: ${pcS}`;
                } else {
                   
                para.textContent = 'its a tie!';
                
                } break;
            case 'scissor':
                if (pc === 'Rock'){
                   
                para.textContent = 'You Lost! he had Rock';
                 
                score.textContent = `User Score: ${userS}  pc Score: ${pcS++}`;
                } else if (pc === 'Paper'){
                   
                    para.textContent = 'You Won! he had Paper';
                    
                    score.textContent = `User Score: ${userS++}  pc Score: ${pcS}`;
                } else {
                   
                para.textContent = 'its a tie!';
                
                }   break;
                
           }
        }
        
        


        
