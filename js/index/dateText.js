
const dayDate = document.querySelector('#greets span:first-child');

function getDayDate() {
  const date = new Date();
  const dateToday = String(date.getDate()).padStart(2, '0');
  const dayToday = String(date.getDay());
  
  let dayText = '';

  if (dayToday === '0') {
    dayText = 'Sun';
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
  }

  console.log(dateToday);

  dayDate.innerText = `${dayText} ${dateToday}`;

}

getDayDate();