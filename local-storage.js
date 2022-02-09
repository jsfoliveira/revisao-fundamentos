// localStorage.getItem é para recuperar valor que está no localStorage. Ao receber dados de um servidor web, os dados são sempre uma string. Tem que usar um JSON.parse paa converter em objeto.

// localStorage.setItem é para enviar valor ao localStorage. Ao enviar dados para um servidor web, os dados devem ser uma string. Converta um objeto JavaScript em uma string com JSON.stringify().

const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');

// function criandoLi() {
//   const phrase = document.createElement('li');
//   phrase.innerText =input.innerHTML;
//   list.appendChild(phrase);
// }

function addPhraseToSessionStorage() {
  if (sessionStorage.getItem('phrases') === null) { // se não enviou nenhuma 'phrases'
    sessionStorage.setItem('phrases', JSON.stringify([])); // receba em string do servidor
  }
// Ao receber, deve transformar em objeto.
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));

// Analise os dados com JSON.parse()e os dados se tornam um objeto (array).
//   console.log(oldList); // transforma o conteúdo da lista em array
  const phraseText = input.value;
  oldList.push(phraseText);

// ENVIAR PARA O SERVIDOR
// Ao enviar dados para um servidor web, os dados devem ser uma string.
// Converta um objeto JavaScript em uma string com JSON.stringify().
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
//   criandoLi();
}

button.addEventListener('click', addPhraseToSessionStorage);
