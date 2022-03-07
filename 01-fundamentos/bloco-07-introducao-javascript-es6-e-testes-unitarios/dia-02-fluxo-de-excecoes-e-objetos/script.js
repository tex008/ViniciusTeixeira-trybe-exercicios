function validateInput (value1,value2){
  if (value1 === '' || value2 === ''){
    throw new Error ('Ambos os campos precisam ser preenchidos');
  }
  if(isNaN(value1) || isNaN(value2)){
    throw new Error ('Insira apenas números')
  }
}


function sum() {
  try {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  validateInput(value1,value2);
  const result = parseInt(value1) + parseInt(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(xablau){
    document.getElementById('result').innerHTML = `Erro: ${xablau.message}`;
  } finally {
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}