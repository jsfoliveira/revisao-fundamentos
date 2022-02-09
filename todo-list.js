const input = document.querySelector('#texto-tarefa');
const btnAdd = document.querySelector('#criar-tarefa');
const listaOl = document.querySelector('#lista-tarefas');
const btnApaga = document.querySelector('#apaga-tudo');
const btnRemover = document.querySelector('#remover-finalizados');
const btnSalvar = document.querySelector('#salvar-tarefas');
const novoLi = document.querySelector('.novoLi');

// mudar cor ao clicar no li.
const bgLi = (event) => {
    event.target.classList.toggle('selected');
}

// botão apagar tudo.
const apagarTudo = () => {
    listaOl.innerText = '';
}

// riscar li ao dar duplo click.
const riscar = (event) => {
    // event.target = li
    // classList.toggle = se tiver completed, remova-o, caso contrário, adicione-o.
    event.target.classList.toggle('completed');
}

// apagar riscado.
const apagarRiscado = () => {
    const todosLi = document.querySelectorAll('li');
    for (let i = 0;  i < todosLi.length; i += 1){
        if (todosLi[i].classList.contains('completed')){
            todosLi[i].remove();
        }
    }
}

// adicionar li no localStorage com a chave 'Atividade'.
const addLocalStorage = () => {
    let itensTodosSalvos = [];
    let itensTodos = document.querySelectorAll('li');
    for (let i = 0; i < itensTodos.length; i += 1){
        const objeto = {
            Atividade: `${itensTodos[i].textContent}`,// não muda se colocar innerHTML ou innerText  
        };
        itensTodosSalvos.push (objeto);
    }
    localStorage.setItem('itensTodosSalvos', JSON.stringify(itensTodosSalvos));
}
// criar li
const criarLi = () => {
    if(input.value.length > 0){
        const novoLi = document.createElement('li');
        listaOl.appendChild(novoLi);
        novoLi.innerHTML = input.value;
        novoLi.className = 'novoLi';
        input.value ='';
        
        novoLi.addEventListener('click', bgLi);
        btnApaga.addEventListener('click', apagarTudo);
        novoLi.addEventListener('dblclick', riscar);
        btnRemover.addEventListener('click', apagarRiscado);
        
    }
    return novoLi;
}
btnAdd.addEventListener('click', criarLi);
btnSalvar.addEventListener('click', addLocalStorage);



// A FORMA QUE ESTÁ NO MEU PROJETO DO CURSO
// //função para mudar a cor do novoLi quando for clicado, não posso mudar a cor de mais de um li
// //tive ajuda de josé wilson
// function bgLista (event){
//     //onde está o item da lista. vou percorrer todos esses itens
//     let novoLi = document.querySelectorAll('li');
//         for (let i = 0;  i < novoLi.length; i += 1){
    
//             var listaLi = novoLi[i].innerHTML;
            
//             if (listaLi !== event.target.innerHTML){
//     //selected é uma classe que está definir o backgroundColor
//                 if(novoLi[i].className == 'selected' || novoLi[i].className == 'selected completed'){
//                     novoLi[i].classList.remove('selected');
//                 }else {
//                     event.target.classList.add('selected');
//                 }
//         } 
//     }
// }
