const laterBtn = document.querySelector('.later');
const sendBtn = document.querySelector('.send');
const starterLayer = document.querySelector('.layer');
const startBtn = document.querySelector('.start');
const wrong = document.querySelector('.wrong');
const correct = document.querySelector('.correct');
let correctCount = 0;
let wrongCount = 0;
import { data } from './data.js';

sendBtn.disabled = true;

startBtn.addEventListener('click', () => {
  correct.innerHTML = `<i class="fa-regular fa-circle-check"></i> ${correctCount} correct`;
  wrong.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> ${wrongCount} wrong`;
  starterLayer.classList.remove('show-layer');
  laterBtn.disabled = false;
});
let index = 0;
let answer ;
let ref ;

function startQuiz() {

  if(index >= data.length) {
    laterBtn.disabled = true;
    sendBtn.disabled = true;
    document.querySelector('section').innerHTML = "<h3>Quiz Completed!</h3>";
    return;
  }

  
  const quizHTML = `

    <h3 class="questions-number">
      Question ${index + 1} (${data.length - (index + 1)} remaining)
    </h3>

    <p class="question">
      ${data[index].question}
    </p>

    <h3 class="answer-option">
      Answer options
    </h3>
  
    <div class="option-a js-option">
      ${data[index].answers.a}
    </div>

    <div class="option-b js-option">
      ${data[index].answers.b}
    </div>

    <div class="option-c js-option">
      ${data[index].answers.c}
    </div>
  `;
  
  document.querySelector('section').innerHTML = quizHTML;


  document.querySelectorAll('.js-option').forEach(option => {
    option.addEventListener('click', () => {
      answer = option.textContent.trim();
      ref = data[index].ref;
      sendBtn.disabled = false;
      console.log(answer, ref)
    });
  });

};

sendBtn.addEventListener('click', () => {
  isCorrect(answer, ref);
  sendBtn.disabled = true;
  index += 1;
  startQuiz();
});


startQuiz();
function isCorrect (answer, ref) {
  if(answer == ref) {
    correctCount += 1;
    correct.innerHTML = `<i class="fa-regular fa-circle-check"></i> ${correctCount} correct`;
  }else {
    wrongCount += 1;
    wrong.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> ${wrongCount} wrong`;
  };
};
