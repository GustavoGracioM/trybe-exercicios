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
        elementLi[key].addEventListener('mouseenter', function() {
            console.log(elementLi[key])
            elementLi[key].style.backgroundColor = 'green';
            elementLi[key].style.color = 'white';
        });
        elementLi[key].addEventListener('mouseout', function() {
            elementLi[key].style.backgroundColor = 'white';
            elementLi[key].style.color = '#777';
        })
    }


    
