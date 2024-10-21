document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const checkbox = document.getElementById("accept-conditions");
    const submitButton = form.querySelector("button");
    const inputFields = form.querySelectorAll(".input-box input");
  
    // Function to update button state
    function updateButtonState() {
      if (checkbox.checked) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "rgb(43, 0, 255)"; // Original color
      } else {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "gray"; // Disabled color
      }
    }
  
    // Initial check
    updateButtonState();
  
    // Event listener for checkbox change
    checkbox.addEventListener("change", updateButtonState);
  
    // Form submit event listener
    form.addEventListener("submit", function (event) {
      let firstInvalidField = null;
  
      // Check for empty fields and specific validations
      inputFields.forEach((input, index) => {
        // Check all inputs except the first one (index 0)
        if (index === 0) return; // Skip the first input
  
        // Special validation for DNI/NIF (assumed to be the 4th input)
        if (index === 3) { // DNI/NIF input
          if (input.value.length !== 9) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid length
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if valid
          }
        } else if (index === 4 || index === 5) { // Email and Confirm Email
          const emailValue = input.value;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  
          if (!emailRegex.test(emailValue)) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid email
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if valid
          }
  
          // Check if the confirmation email matches the first email
          if (index === 5 && emailValue !== inputFields[4].value) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow if it doesn't match
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          }
        } else if (index === 6) { // Phone number input
          const phoneValue = input.value;
          const phoneRegex = /^\d+$/; // Regex to check for numeric values only
  
          if (!phoneRegex.test(phoneValue)) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid phone number
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first invalid field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if valid
          }
        } else {
          // Check for empty fields
          if (!input.value) {
            input.style.boxShadow = "0 0 5px red"; // Add red box shadow
            if (!firstInvalidField) {
              firstInvalidField = input; // Set the first empty field
            }
          } else {
            input.style.boxShadow = ""; // Clear box shadow if filled
          }
        }
      });
  
      // If there are empty or invalid fields, prevent submission and focus on the first one
      if (firstInvalidField) {
        event.preventDefault(); // Prevent form submission
        firstInvalidField.focus(); // Focus on the first invalid field
        firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the invalid field
      }
    });
  });
  
  
  
  
  
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector(".form");
      const checkbox = document.getElementById("accept-conditions");
      const submitButton = form.querySelector("button");
      const inputFields = form.querySelectorAll(".input-box input");
    
      // Function to update button state
      function updateButtonState() {
        if (checkbox.checked) {
          submitButton.disabled = false;
          submitButton.style.backgroundColor = "rgb(43, 0, 255)"; // Original color
        } else {
          submitButton.disabled = true;
          submitButton.style.backgroundColor = "gray"; // Disabled color
        }
      }
    
      // Initial check
      updateButtonState();
    
      // Event listener for checkbox change
      checkbox.addEventListener("change", updateButtonState);
    
      // Form submit event listener
      form.addEventListener("submit", function (event) {
        let firstInvalidField = null;
    
        // Check for empty fields and specific validations
        inputFields.forEach((input, index) => {
          // Check all inputs except the first one (index 0)
          if (index === 0) return; // Skip the first input
    
          // Special validation for DNI/NIF (assumed to be the 4th input)
          if (index === 3) { // DNI/NIF input
            if (input.value.length !== 9) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid length
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if valid
            }
          } else if (index === 4 || index === 5) { // Email and Confirm Email
            const emailValue = input.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    
            if (!emailRegex.test(emailValue)) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid email
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if valid
            }
    
            // Check if the confirmation email matches the first email
            if (index === 5 && emailValue !== inputFields[4].value) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow if it doesn't match
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            }
          } else if (index === 6) { // Phone number input
            const phoneValue = input.value;
            const phoneRegex = /^\d+$/; // Regex to check for numeric values only
    
            if (!phoneRegex.test(phoneValue)) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow for invalid phone number
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first invalid field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if valid
            }
          } else {
            // Check for empty fields
            if (!input.value) {
              input.style.boxShadow = "0 0 5px red"; // Add red box shadow
              if (!firstInvalidField) {
                firstInvalidField = input; // Set the first empty field
              }
            } else {
              input.style.boxShadow = ""; // Clear box shadow if filled
            }
          }
        });
    
        // If there are empty or invalid fields, prevent submission and focus on the first one
        if (firstInvalidField) {
          event.preventDefault(); // Prevent form submission
          firstInvalidField.focus(); // Focus on the first invalid field
          firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the invalid field
        }
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const activityDateLabel = document.getElementById('activity-date');
        const numPersonsLabel = document.getElementById('num-persons');
    
        // Days of the week in Spanish (first three letters)
        const daysInSpanish = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    
        // Months in Spanish (first three letters)
        const monthsInSpanish = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
        // Retrieve data from local storage
        const activityDate = localStorage.getItem('activityDate');
        const numPersons = localStorage.getItem('numPersons');
    
        // Display the values
        if (activityDate) {
            const date = new Date(activityDate); // Create a Date object from the stored date
            const dayIndex = date.getDay(); // Get the day index (0-6)
            const monthIndex = date.getMonth(); // Get the month index (0-11)
            const dayInSpanish = daysInSpanish[dayIndex]; // Get the day name in Spanish
            const monthInSpanish = monthsInSpanish[monthIndex]; // Get the month name in Spanish
    
            // Get the day of the month and the year
            const dayOfMonth = date.getDate(); // Get the day of the month
            const year = date.getFullYear(); // Get the year
    
            // Update the label to include the day, month, day of the month, and year
            activityDateLabel.textContent += ` ${dayInSpanish} ${dayOfMonth} ${monthInSpanish} ${year}`; // Append the day, date, month, and year
        } else {
            activityDateLabel.textContent += " No date selected."; // Fallback if no date
        }
    
        if (numPersons) {
            numPersonsLabel.textContent += ` ${numPersons}`; // Append the number of persons
        } else {
            numPersonsLabel.textContent += " Not specified."; // Fallback if no number
        }
    });
    
    
    
    
