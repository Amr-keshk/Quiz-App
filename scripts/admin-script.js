import { data } from './data.js'

const timeBtn = document.querySelector('.enter-time')

timeBtn.addEventListener('click', () => {
  document.querySelector('.container').innerHTML = `
    <div class="message">All fields are required</div>
    <div>
      <label for="input-time">Input Exam Time in minutes</label>
      <input id="input-time" type="text" class="input-time">
    </div>

    <button class="quiz-page">Go to Quiz page</button>
  `;

  // move to quiz page
  const quizPageBtn = document.querySelector('.quiz-page');
  quizPageBtn.addEventListener('click', () => {
    const time = Number(document.querySelector('.input-time').value);
    if(time <= 0) {
      document.querySelector('.message').style.opacity = 1;
    }else {
      localStorage.setItem('time', JSON.stringify(time));
      window.location.href = 'quiz-page.html';
    }
  });

});

// Collect data

const enterBtn = document.querySelector('.enter-btn');
const inputs = document.querySelectorAll('input');

enterBtn.addEventListener('click', () => {
  const values = [];
  let valid = true;
  let id = generateId();
  inputs.forEach(input => {
    const value = input.value;
    values.push(value);
  });
  
  values.forEach(value => {
    if(!value) {
      valid = false;
      document.querySelector('.message').style.opacity = 1;
    };
  });
  
  if(valid) {
    data.push({
      questionId: id,
      question: values[0],
      answers: {
        a: values[1],
        b: values[2],
        c: values[3],
      },
      ref: values[4],
    });
  
  };
  
  localStorage.setItem('data', JSON.stringify(data));
});

function generateId() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  const length = 10;
  let id = '';

  for(let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    id += characters[randomNumber];
  };
;
  data.forEach(item => {
    if (item.questionId === id) {
      generateId();
      return;
    };
  });

  return id;
};