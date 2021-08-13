// get today's date so we can find it
var dateStr = moment().format('ddd D MMM');
console.log(dateStr);

// find today's h1
var find   = Array.prototype.find;
var hOnes = document.querySelectorAll('h1');
var todayScheduleEl = find.call( hOnes, h1 => h1.innerText.includes(dateStr) );

console.log( todayScheduleEl);

//set the h1 id for the button
todayScheduleEl.id="today";

// try to auto scroll it into view
todayScheduleEl.scrollIntoView();

// set the button container with some nice text
var btnContainer = document.querySelector('#date-btn-cont');

btnContainer.innerHTML = `
  <h2>Today is: ${dateStr}</h2>
  <p>
    <a href="#today">
      Click here to go to today's schedule.
    </a>
  </p>
`;



