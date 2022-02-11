const weekDaysList = document.querySelector('.week-days');
const container = document.querySelector('.input-container');
const myTask = document.querySelector('.my-tasks');
const input = document.querySelector('#task-input');
const btnAdd = document.querySelector('#btn-add');

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      weekDaysList.appendChild(dayListItem);
      dayListItem.innerHTML = days;
    };
};
createDaysOfTheWeek();
  
const criarDias = () => {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let i = 0; i < dezDaysList.length; i += 1) {
        const dias = dezDaysList[i];
        const diasLi = document.createElement('li');
        diasLi.innerHTML = dias;
        weekDaysList.appendChild(diasLi);
        if (dias === 24 || dias === 25 || dias === 31) {
            diasLi.className = "day holiday";
        } else if (dias === 4 ||dias === 11 || dias === 18 || dias === 25) {
            diasLi.className = "day friday";
        } else {
            diasLi.className = "day";
        }
    }
}
criarDias();
const getHolidays = document.querySelectorAll('.holiday');
const getFriday = document.querySelectorAll('.friday');
const getDay = document.querySelectorAll('.day');
console.log(getDay);
const pintar = (event) => {
    event.target.style.fontSize = '28px';
}

const zoomout = (event) => {
    event.target.style.fontSize = '16px';
}

for(let i = 0; i < getDay.length; i += 1){
    getDay[i].addEventListener('mouseover', pintar)
    getDay[i].addEventListener('mouseout', zoomout)
}


const botoes = () => {
    const btnFeriado = document.createElement('button');
    btnFeriado.id = "btn-holiday";
    btnFeriado.innerHTML = 'Feriado';
    container.appendChild(btnFeriado);

    const btnSexta = document.createElement('button');
    btnSexta.id = "btn-friday";
    btnSexta.innerHTML = 'Sexta-feira';
    container.appendChild(btnSexta);
}
botoes();


const mudarFeriado = () => {
    for (let i = 0; i < getHolidays.length; i += 1){
        if(getHolidays[i].style.backgroundColor === 'white'){
            getHolidays[i].style.backgroundColor = 'red';
        } else {
            getHolidays[i].style.backgroundColor = 'white';
        }       
    }
}
mudarFeriado();
document.querySelector('#btn-holiday').addEventListener('click', mudarFeriado);

function textoSexta(fridaysArray) {
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    document.querySelector('#btn-friday').addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  textoSexta(dezFridays);

  const criarTarefa = () => {
    const tarefa = document.createElement('span');
    myTask.appendChild(tarefa);
    tarefa.className = 'task';
    tarefa.style.display = 'block';
    
    tarefa.innerHTML = input.value;
    input.value = '';
};
criarTarefa();
btnAdd.addEventListener('click', criarTarefa);

const myTasks = document.querySelector('.task');

const pegarCorTarefa = () => {
    let selectedTask = document.getElementsByClassName('task selected');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
pegarCorTarefa();

const pintarli = (event) => {
    event.target.classList.toggle('selected');
}

for(let i = 0; i < getDay.length; i += 1){
    getDay[i].addEventListener('click', pintarli)
}