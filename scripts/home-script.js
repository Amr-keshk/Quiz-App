const logInData = {
  name: 'Amr keshk',
  password: 'amrkeshk010'
};


const inputName = document.querySelector('.name');
const inputpass = document.querySelector('.password');
const loginBtn = document.querySelector('.login');
const message = document.querySelector('.message');

// Show login page
document.querySelector('.admin')
.addEventListener('click', () => {
  document.querySelector('.login-page').style.display = 'initial'
})

// Verification Step
loginBtn.addEventListener('click', () => {
  const name = inputName.value;
  const password = inputpass.value
  if(name && password) {
    if(name === logInData.name && password === logInData.password) {
      window.location.href = 'admin-page.html'
    }else {
      message.textContent = 'Wrong username or password'
    }
  }else {
    message.textContent = 'Please Enter username and password'
  }
})