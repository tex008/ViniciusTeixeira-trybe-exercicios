function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//exercicio 1

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfMonth() {
  //1 onde colocar o elemento
  let getDaysList = document.querySelector('#days');
  // console.log(getDaysList);
  //2 criar
  for (index = 0; index < dezDaysList.length; index +=1){
    let dayItem = document.createElement('li');
    let day = dezDaysList[index];
    dayItem.innerHTML = day;
    dayItem.className = 'day';
    getDaysList.appendChild(dayItem);
  
  //verificando feriados
    if (day === 24 || day === 31){
      dayItem.className = 'day holiday';
    } else if (day ===4 || day === 11 || day === 18){
        dayItem.className = 'day friday';
    } else if (day === 25){
      dayItem.className = 'day holiday friday'
    }
  }
}

createDaysOfMonth();

// exericio 2
function createHollidayButton(btnName){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = btnName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
}
createHollidayButton('Feriados');

//exercícios 3

function changeHolidayColor(){
  let getButtonHoliday = document.querySelector('#btn-holiday');
  let holidayDays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let originalColor = 'white';

  getButtonHoliday.addEventListener('click',function(){
    for (let index = 0; index < holidayDays.length; index +=1){
      if (holidayDays[index].style.backgroundColor === originalColor ){
        holidayDays[index].style.backgroundColor = backgroundColor;
      } else {holidayDays[index].style.backgroundColor = originalColor;
      }
    }
  })
}

changeHolidayColor()

//exercicio 4

function createFridayButton(day) {
  let implementButtonInHTML = document.querySelector('.buttons-container');
  let newButtonID = 'btn-friday';

//criar um botão
  let newButton = document.createElement('button');
//crie o conteúdo do botão
  newButton.innerHTML = day;
//colocar um id no botao
  newButton.id = newButtonID;
//adicionar o botão no HTML
  implementButtonInHTML.appendChild(newButton);
}

createFridayButton('Sexta-feira');

// exercicio 5