
const day = document.querySelector('#greets span:first-child');
const date = document.querySelector('#greets span:nth-child(2)');

function getDayDate() {
  const dateNow = new Date();
  const dateToday = String(dateNow.getDate()).padStart(2, '0');
  const dayToday = String(dateNow.getDay());
  
  let dayText = '';

  if (dayToday === '0') {
    dayText = 'Sun';
    day.classList.add('textRed');
  } else if (dayToday === '1') {
    dayText = 'Mon';
  } else if (dayToday === '2') {
    dayText = 'Tue';
  } else if (dayToday === '3') {
    dayText = 'Wed';
  } else if (dayToday === '4') {
    dayText = 'Thu';
  } else if (dayToday === '5') {
    dayText = 'Fri';
  } else if (dayToday === '6') {
    dayText = 'Sat';
    day.classList.add('textBlue');
  }

  day.innerText = `${dayText} `;
  date.innerText = `${dateToday}`;
}

getDayDate();