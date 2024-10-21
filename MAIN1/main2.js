const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    const today = new Date();
    const dayOfWeek = today.getDay()
    
    const currentWeekStart = new Date(today);
    const currentWeekEnd = new Date(today);
    
    // Set currentWeekStart and currentWeekEnd based on which day it is
    if (dayOfWeek === 0) { // If today is Sunday
        currentWeekStart.setDate(today.getDate() - 1); // Start on Sunday
        currentWeekEnd.setDate(today.getDate());   // End on Sunday (only highlight today)
    } else if (dayOfWeek === 1) { // If today is Monday
        currentWeekStart.setDate(today.getDate() - 1); // Highlight today (Monday)
        currentWeekEnd.setDate(today.getDate() + 6); // Highlight through Sunday
    } else { // If today is Tuesday to Saturday
        currentWeekStart.setDate(today.getDate() - 1); // Start from previous Sunday
        currentWeekEnd.setDate(today.getDate() + (7 - dayOfWeek)); // Highlight through next Sunday
    }
    
    

    let datesHtml = "";

    for (let i = start; i > 0; i--) {
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        const currentDate = new Date(year, month, i);
        let className = "";

        if (currentDate >= currentWeekStart && currentDate <= currentWeekEnd) {
            className = ' class="active-week"';
        }
        if (currentDate.getTime() === today.getTime()) {
            className += ' class="today"';
        }

        datesHtml += `<li${className}>${i}</li>`;
    }

    for (let i = end; i < 6; i++) {
        datesHtml += `<li class="inactive">${i - end + 1}</li>`;
    }

    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`;

    // Call to add click listeners after rendering the calendar
    addActiveWeekClickListeners();
}

navs.forEach((nav) => {
    nav.addEventListener("click", (e) => {
        const btnId = e.target.id;

        if (btnId === "prev" && month === 0) {
            year--;
            month = 11;
        } else if (btnId === "next" && month === 11) {
            year++;
            month = 0;
        } else {
            month = btnId === "next" ? month + 1 : month - 1;
        }

        date = new Date(year, month, new Date().getDate());
        year = date.getFullYear();
        month = date.getMonth();

        renderCalendar(); // This will now also call addActiveWeekClickListeners
    });
});

renderCalendar(); 

function addActiveWeekClickListeners() {
  const activeWeekElements = document.querySelectorAll('.active-week');
  const selectionSection = document.getElementById('selection');
  const numPersonsInput = document.getElementById('num-persons');
  const nextStepButton = document.getElementById('next-step');

  activeWeekElements.forEach(element => {
      element.addEventListener('click', function() {
          const day = parseInt(this.textContent, 10);
          const selectedDate = new Date(year, month, day); // Create the selected date object

          // Check if the date is already selected
          if (this.classList.contains('selected-date')) {
              // If selected, unselect it
              clearSelectedDate();
              selectionSection.style.display = 'none'; // Hide the selection section
              localStorage.removeItem('activityDate'); // Remove date from localStorage
          } else {
              // If not selected, select it
              clearSelectedDate();
              this.classList.add('selected-date');

              // Show the selection section
              selectionSection.style.display = 'flex';
              numPersonsInput.focus();

              // Store selected date in localStorage
              localStorage.setItem('activityDate', selectedDate.toDateString()); // Store formatted date
          }
      });
  });

  function clearSelectedDate() {
      activeWeekElements.forEach(el => {
          el.classList.remove('selected-date');
      });
  }

  // Enable the next-step button when a valid number is entered
  numPersonsInput.addEventListener('input', function() {
      if (this.value > 15) {
          this.value = 15; // Cap the value at 15
      }
      nextStepButton.disabled = this.value < 1; // Enable if input is valid
  });

  nextStepButton.addEventListener('click', function() {
      if (numPersonsInput.value < 1) {
          numPersonsInput.classList.add('input-error');
          numPersonsInput.focus();
          return; // Do not proceed if input is invalid
      }

      // Store number of persons in localStorage
      localStorage.setItem('numPersons', numPersonsInput.value);

      // Redirect to registration.html
      window.location.href = 'registration.html';
  });
}



// Call this function to set up event listeners
addActiveWeekClickListeners();

renderCalendar();


