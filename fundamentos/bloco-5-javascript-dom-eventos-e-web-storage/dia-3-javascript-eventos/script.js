function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
// Exercicio 1
let daysLi = document.getElementById('days');
for (let key = 0; key < dezDaysList.length; key += 1) {
    let valueLi = document.createElement('li');
    valueLi.className = 'day';
    if (dezDaysList[key] === 24 || dezDaysList[key] === 25 || dezDaysList[key] === 31) {
        valueLi.className += ' holiday';
    }
    if (dezDaysList[key] === 4 || dezDaysList[key] === 11 || dezDaysList[key] === 18 || dezDaysList[key] === 25) {
        valueLi.className += ' friday';
    }
    valueLi.innerText = dezDaysList[key];
    daysLi.appendChild(valueLi);
}

// Exercicio 2
let buttonsContainer = document.querySelector('.buttons-container');
function createButton(Feriados) {
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerText = Feriados;
    buttonsContainer.appendChild(button)
}
createButton('Feriados');

// Exercicio 3
let buttonCreate = document.getElementById('btn-holiday');

buttonCreate.addEventListener('click', holiday);

let backgroondCalend = document.querySelectorAll('.holiday');
let contador = 0;
function holiday() {
    if (contador === 0) {
        for (let key = 0; key < backgroondCalend.length; key += 1) {
            let value = backgroondCalend[key];
            value.style.color = 'red';
            contador = 1;
        }
    }else {
        for (let key = 0; key < backgroondCalend.length; key += 1) {
            let value = backgroondCalend[key];
            value.style.color = '#777';
            contador = 0;
            
        }
    }
}

// Exercicio 4
function createButtonFriday(Feriados) {
    let button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerText = Feriados;
    buttonsContainer.appendChild(button)
}
createButtonFriday('Sexta-feira');

// Exercicio 5
let buttonCreateFriday = document.getElementById('btn-friday');
buttonCreateFriday.addEventListener('click', friday);
let backgroondFriday = document.querySelectorAll('.friday');
let contador1 = 0;
function reutilizar() {
    let array = [];
    for (let key = 0; key < backgroondFriday.length; key += 1) {
        array.push(backgroondFriday[key].innerText);
    }
    return array
}
let array = reutilizar();
function friday() { 
    if (contador1 === 1) {
        for (let key = 0; key < backgroondFriday.length; key += 1) {
            let value = backgroondFriday[key];
            value.innerText = array[key];
            contador1 = 0;
        }
    }else {
        for (let key = 0; key < backgroondFriday.length; key += 1) {
            let value = backgroondFriday[key];
            value.innerText = 'SEXTA';
            contador1 = 1;
        }
    }
}

// Exercicio 6
let elementLi = document.querySelectorAll('.day');
    for (let key = 0; key < elementLi.length; key += 1) {
        elementLi[key].addEventListener('mouseenter', function(event) {
            console.log(elementLi[key])

            event.target.style.fontSize = '25px';
            event.target.style.fontWeight = '550';
        });
        elementLi[key].addEventListener('mouseout', function(event) {
            event.target.style.fontWeight = '150';
            event.target.style.fontSize = '20px';
        })
    }

// Exercicio 7
let cozinhar = document.querySelector('.my-tasks');
function cozinharFunction(string) {
    let span = document.createElement('span');
    span.innerText = string;
    cozinhar.appendChild(span);
}
cozinharFunction('cozinhar');

// Exercicio 8
function taskColor(cor) {
    let tasks = document.querySelector('.my-tasks');
    let colorTask = document.createElement('div');
  
    colorTask.className = 'task';
    colorTask.style.backgroundColor = cor;
    tasks.appendChild(colorTask);
}
taskColor('green');

// Exercicio 9
function selectedTask() {
    let selected = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    
    myTasks.addEventListener('click', function(event) {
        console.log(selected.length);
      if (selected.length === 0) {
          
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  selectedTask();

// Exercicio 10
function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();