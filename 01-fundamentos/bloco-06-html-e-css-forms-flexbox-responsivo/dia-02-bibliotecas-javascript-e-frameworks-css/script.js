document.getElementById('date').DatePickerX.init();
document.getElementById('date').DatePickerX.setValue();

window.onload = function () {
  const submitBtn = document.querySelector('#submit')
  submitBtn.addEventListener('click', preventSubmit);
  const eraseButton = document.getElementById('erase-button');
  eraseButton.addEventListener('click', clearInputs);
  const agreementCheck = document.querySelector('#agree-2');
  agreementCheck.addEventListener('change', enableSubmit);
}

//declaração das variáveis
const formText = document.getElementById('form-content');
const inputName = document.getElementById('nome-completo');
const inputEmail = document.getElementById('email');

//função que ativa o botão de submit
function enableSubmit() {
  const submitButton = document.querySelector('#sumbit');
  const agreement = document.querySelector('#agree-2');
  submitButton.disabled = !agreement.checked;
}

//função enable default do botão submit
function preventSubmit (event) {
  event.preventDefault();
}

//função para limpar os dados do forumlário
function clearInputs () {
  const formData = document.querySelectorAll('input');
  const textarea = document.querySelector('textarea');
  for (let index = 0; index < formData.length; index +=1) {
    const userImput = formData[index];
    userImput.value = '';
    userImput.checked = false;
  }
  textarea.value = '';
}

