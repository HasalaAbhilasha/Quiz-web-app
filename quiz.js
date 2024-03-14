let questions = [{
  question: "1.  Who won the 10th Italian Open title in 2021?",
  answer1: {text: "Novack Djokovic", correct: false},
  answer2: {text: "Rafael Nadal", correct: true},
  answer3: {text: "Dominic Thiem", correct: false},
  answer4: {text: "Stefanos Tsitsipas", correct: false},
},
{
  question: "2.  Only three countries have won the Women’s Rugby World Cup- New Zealand, England, and who?",
  answer1: {text: "USA", correct: true},
  answer2: {text: "Argentina", correct: false},
  answer3: {text: "Romania", correct: false},
  answer4: {text: "Georgia", correct: false},
},
{
  question: "3.  The term ‘Dolphin Kick’ is associated with which of the following games?",
  answer1: {text: "Badminton", correct: false},
  answer2: {text: "Squash", correct: false},
  answer3: {text: "Swimming", correct: true},
  answer4: {text: "Golff", correct: false},
},
{
  question: "4.  After how many Year’s FIFA World Cup held?",
  answer1: {text: "2 Years", correct: false},
  answer2: {text: "3 Years", correct: false},
  answer3: {text: "4 Years", correct: true},
  answer4: {text: "Every Year", correct: false},
},
{
  question: "5.  Which country won the FIFA World Cup in 2018?",
  answer1: {text: "Germany", correct: false},
  answer2: {text: "Argentina", correct: false},
  answer3: {text: "France", correct: true},
  answer4: {text: "Brazil", correct: false},
},
{
    question: "6.  Which country has won the most Olympic gold medals in men's basketball?",
    answer1: {text: "United States", correct: true},
    answer2: {text: "Russia", correct: false},
    answer3: {text: "China", correct: false},
    answer4: {text: "Argentina", correct: false},
  },
  {
    question: "7.  Which country has won the most medals in the history of the Summer Olympics?",
    answer1: {text: "Russia", correct: false},
    answer2: {text: "Great Britain", correct: false},
    answer3: {text: "China", correct: false},
    answer4: {text: "United States", correct: true},
  },
  {
    question: "8.  Who won Sri Lanka's first Olympic medal, and in which event?",
    answer1: {text: "Susanthika Jayasinghe, 200m sprint", correct: false},
    answer2: {text: "Duncan White, 400m hurdles", correct: true},
    answer3: {text: "Anuruddha Ratnayake, boxing", correct: false},
    answer4: {text: "Julian Bolling, shooting", correct: false},
  },
  {
    question: "9.  Who is the highest run-scorer for Sri Lanka in Test cricket?",
    answer1: {text: "Sanath Jayasuriya", correct: false},
    answer2: {text: "Mahela Jayawardene", correct: false},
    answer3: {text: "Kumar Sangakkara", correct: true},
    answer4: {text: "Aravinda de Silva", correct: false},
  },
  {
    question: "10.  Who is the only Sri Lankan cricketer to score over 10,000 runs in both Test and One Day International (ODI) cricket?",
    answer1: {text: "Sanath Jayasuriya", correct: false},
    answer2: {text: "Mahela Jayawardene", correct: true},
    answer3: {text: "Kumar Sangakkara", correct: false},
    answer4: {text: "Tillakaratne Dilshan", correct: false},
  }
];

const next_btn=document.querySelector(".next_btn")
const exit_btn=document.querySelector(".exit_btn")
const nextbtn=document.querySelector(".nextbtn")
const start_btn=document.querySelector(".start_btn")
const options=document.querySelector(".options")
const correct1=document.querySelector(".option1")
const correct2=document.querySelector(".option2")
const correct3=document.querySelector(".option3")
const correct4=document.querySelector(".option4")
const start_again=document.querySelector("#start_again")
const instruct_list = document.querySelector(".instruct_list");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");

let que_count=0;
let correct_value=false;
let wrong_ans=0;
let correct_ans=0;
let score_percentage=0;
let total_time=0;
let second=0;
let counter;
let ans_count=0;


start_btn.onclick = function() {
que_count=0;
  start_btn.classList.add("hidestart")
  quiz_box.classList.add("showquiz")
  time_countdown();
  showQuestions();
  startTimer();
}   

next_btn.onclick = function() {
  if(que_count!=10){
    ans_count+=1;
      showQuestions();
      correct1.classList.remove("green")
      correct2.classList.remove("green")
      correct3.classList.remove("green")
      correct4.classList.remove("green")
      correct1.classList.remove("red")
      correct2.classList.remove("red")
      correct3.classList.remove("red")
      correct4.classList.remove("red")
      options.classList.remove("pointer")
  }else{
      stopTimer();
      document.getElementById("corr").innerHTML = correct_ans;
      document.getElementById("wrong").innerHTML = 10-correct_ans;
      result_box.classList.add("showresult")
      quiz_box.classList.remove("showquiz")
  } 
}

start_again.onclick = function() {
  result_box.classList.remove("showresult");
  start_btn.classList.remove("hidestart");
  location.reload(); 
}

function choose(){
  if(ans_count == 0 ){
      correct2.classList.add("green")
  }else if(ans_count == 1 ){
      correct1.classList.add("green")
  }else if(ans_count == 2  ){
      correct3.classList.add("green")
  }else if(ans_count == 3 ){
      correct3.classList.add("green")
  }else if(ans_count == 4  ){
      correct3.classList.add("green")
  }else if(ans_count == 5 ){
      correct1.classList.add("green")
  }else if(ans_count == 6  ){
      correct4.classList.add("green")
  }else if(ans_count == 7 ){
      correct2.classList.add("green")
  }else if(ans_count == 8  ){
      correct3.classList.add("green")
  }else if(ans_count == 9 ){
      correct2.classList.add("green")
  }
}

correct1.onclick = function (){
  correct_value=questions[ans_count].answer1.correct;
  if(correct_value==true){
      correct1.classList.add("green")
      options.classList.add("pointer")
      correct_ans+=1;
  }else{
      correct1.classList.add("red")
      choose();
      options.classList.add("pointer")
  }
}

correct2.onclick = function(){
  correct_value=questions[ans_count].answer2.correct;
  if(correct_value==true){
      correct2.classList.add("green")
      options.classList.add("pointer")
      correct_ans+=1;
  }else{
      correct2.classList.add("red")
      choose();
      options.classList.add("pointer")
  }
}

correct3.onclick = function(){
  correct_value=questions[ans_count].answer3.correct;
  if(correct_value==true){
      correct3.classList.add("green")
      options.classList.add("pointer")
      correct_ans+=1;
  }else{
      correct3.classList.add("red")
      choose();
      options.classList.add("pointer")
  }
}

correct4.onclick = function(){
  correct_value=questions[ans_count].answer4.correct;
  if(correct_value==true){
      correct4.classList.add("green")
      options.classList.add("pointer")
      correct_ans+=1;
  }else{
      correct4.classList.add("red")
      choose();
      options.classList.add("pointer")
  }
}

function showQuestions(){
  document.getElementById("question").innerHTML = questions[que_count].question;
  document.getElementById("answer1").innerHTML = questions[que_count].answer1.text;
  document.getElementById("answer2").innerHTML = questions[que_count].answer2.text;
  document.getElementById("answer3").innerHTML = questions[que_count].answer3.text;
  document.getElementById("answer4").innerHTML = questions[que_count].answer4.text;
  document.getElementById("final").innerHTML = que_count+1;
  document.getElementById("time_take").innerHTML = total_time;
  score_percentage=correct_ans*10;
  que_count+=1;
  document.getElementById("score").innerHTML = score_percentage+"%";
  if(score_percentage<=50){
      grade.classList.add("green2")
      document.getElementById("grade").innerHTML = "Improve your knowladge about sports";
  }else if(score_percentage<=80){
      grade.classList.add("green2")
      document.getElementById("grade").innerHTML = "Keep working";
  }else{
      grade.classList.add("green2")
      document.getElementById("grade").innerHTML = "Good work";
  }
}

function time_countdown() {
let timeLeft = 60;
const countdown = document.getElementById("timer_count");

function updateCountdown() {
  timeLeft--;
  countdown.innerHTML = timeLeft;
  if (timeLeft == 0) {
    ans_count+=1;
    stopTimer();
    document.getElementById("time_take").innerHTML = total_time;
    document.getElementById("score").innerHTML = score_percentage+"%";
    options.classList.remove("pointer")
    document.getElementById("corr").innerHTML = correct_ans;
    document.getElementById("wrong").innerHTML = 10-correct_ans;
    result_box.classList.add("showresult")
    quiz_box.classList.remove("showquiz")  
  }
}

counter = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
clearInterval(counter);
}

let secondsCount = 0;

function startTimer() {
setInterval(function() {
  secondsCount++;
  console.log(secondsCount);
}, 1000);
}

function stopTimer() {
clearInterval();
}

let countSecond = 0;
    let intervalId;

    function startTimer() {
      intervalId = setInterval(function() {
          countSecond++;
        total_time+=1;
      }, 1000);
    }

    function stopTimer() {
      clearInterval(intervalId);
    }

  
  