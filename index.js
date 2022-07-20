var readlineSync = require("readline-sync");
var score=0;
function welcome(){
  var name= readlineSync.question("Please enter your name! ");
  console.log("Hi! " + name + " Welcome!"); 
}

var questions=[
  {
    question:"What is my nickname?",
    answer:"Swati"
  },
  {
    question:"Who is my favourite K-pop idol?",
    answer:"Jungkook"
  },
  {
    question:"Do I like to study? ",
    answer:"No"
  },
  {
    question:"What is my hobby? ",
    answer:"singing"
  },
];

function game(question, answer){
  var userAns= readlineSync.question(question);
  if(userAns.toUpperCase()===answer.toUpperCase()){
    console.log("Correct! ");
    score+=5;
  }
  else{
    console.log("Wrong! ");
    score-=1;
  }

}

function play(){
  for(var i=0; i<questions.length; i++)
    {
      var currentQues=questions[i];
      game(currentQues.question, currentQues.answer);
    }
}
welcome();
play();
 console.log("Congratulations! You scored: " + score);
