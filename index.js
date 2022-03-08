var scoreOfUser = 0;
var scoreOfComputer = 0;
var options = ['rock','scissor','paper']
var name = input.value

function start(){
    var deer = new Audio("owo.mp3")
    var name = (input.value)
    you.innerText = name
    userScore.innerText = 0;
    computerScore.innerText = 0;
    input.value = ""
    scoreOfUser = 0;
    scoreOfComputer = 0;
    display.innerText ="click on any button to start"
    deer.play()     
    
}

function rock(){
    var randomeIndex =  Math.floor(Math.random()*options.length)
    var choiceOfComputer = (options[randomeIndex])
    var choiceOfUser = 'rock'
    
   if(scoreOfUser >=20 && scoreOfComputer < 20  ){
        var gender = (you.innerText)
        display.innerText  = " waw " + gender +  " win click on restart to start again"
        display.style.fontSize = "20px"
        userScore.innerText = 0;
        computerScore.innerText = 0;

    }

    else if(scoreOfComputer >=20 && scoreOfUser < 20){
        display.innerText  = " waw computer win click on restart to start again"
        display.style.fontSize = "20px"
        userScore.innerText = 0;
        computerScore.innerText = 0;
    }
    

    else if( scoreOfComputer < 20 && choiceOfComputer =="scissor"){
        display.innerText = ' Computer choose scissor You win'
        scoreOfUser ++
        userScore.innerText = scoreOfUser 
    }

    else if( scoreOfComputer < 20 && choiceOfComputer =="rock"){
        display.innerText =  "Computer choose rock it is a tie"
    }
  
    else  if( scoreOfComputer <20 && choiceOfComputer =="paper"){
        display.innerText = 'Computer choose paper you loose'
        scoreOfComputer ++
        computerScore.innerText = scoreOfComputer
    }

}
    
function pape(){
    var randomeIndex =  Math.floor(Math.random()*options.length)
    var choiceOfComputer = (options[randomeIndex])
    var choiceOfUser = 'paper'

    if(scoreOfUser >=20 && scoreOfComputer<20  ){
       
        var gender = (you.innerText)
        display.innerText  = " waw " + gender +  " win click on restart to start again"
        display.style.fontSize = "20px"
        userScore.innerText = 0;
        computerScore.innerText = 0;
    }
    else if(scoreOfComputer <20 && choiceOfComputer =="rock"){
        display.innerText =  "Computer choose rock you win"
        scoreOfUser ++
        userScore.innerText = scoreOfUser
    }
    else if(scoreOfComputer <20 && choiceOfComputer =="paper"){
        display.innerText = 'Computer choose paper it is a tie'

    }
    else if(scoreOfComputer >= 20 &&  scoreOfUser<20){
        display.innerText  = " waw computer win  click on restart to start again"
        display.style.fontSize = "20px"
        userScore.innerText = 0;
        computerScore.innerText = 0;
    }

    else if(scoreOfComputer <20 && choiceOfComputer =="scissor"){
        display.innerText = ' Computer choose scissor You loose'
        scoreOfComputer ++
        computerScore.innerText = scoreOfComputer  
    }


}
function scissor(){
    var randomeIndex =  Math.floor(Math.random()*options.length)
    var choiceOfComputer = (options[randomeIndex])
    var choiceOfUser = 'scissor'

    if(scoreOfComputer >= 20 && scoreOfUser <20){
        display.innerText  = " waw computer win click on restart to start again"
        display.style.fontSize = "20px"
        userScore.innerText = 0;
        computerScore.innerText = 0;

    }
    else if(scoreOfUser >= 20 && scoreOfComputer < 20  ){
        var gender = (you.innerText)
        display.innerText  = " waw " + gender +  " win click on restart to start again"
        display.style.fontSize = "20px"
        userScore.innerText = 0;
        computerScore.innerText = 0
    }

    else if( scoreOfComputer <20 && choiceOfComputer =="paper")  {
        display.innerText =  "Computer choose paper you win"
        scoreOfUser ++
        userScore.innerText = scoreOfUser
    }

    else if( scoreOfComputer <20 && choiceOfComputer =="rock"){ 
        display.innerText =  "Computer choose rock you loose"
        scoreOfComputer ++
        computerScore.innerText = scoreOfComputer  
    }

    else if(scoreOfComputer <20 && choiceOfComputer =="scissor"){
        display.innerText = 'Computer choose scissor it is a tie'
        
    }
}

function restart(){
    scoreOfUser= 0;
    scoreOfComputer = 0;
    computerScore.innerText =0
    userScore.innerText =0 
    display.innerText = " click  a button to start ";

}
