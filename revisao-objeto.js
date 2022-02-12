const valor1 = document.querySelector('.value1');
const valor2 = document.querySelector('.value2');
const result = document.querySelector('#result');

function sum() {
const resultado = parseInt(value1.value) + parseInt(value2.value);

result.innerHTML = resultado;
document.getElementById('value1').value = '';
document.getElementById('value2').value = '';

}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
