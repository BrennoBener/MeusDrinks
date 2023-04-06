// Get all the buttons
const buttons = document.querySelectorAll('.button');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the description for the button
    const description = button.dataset.description;

    // Get the container element
    const container = document.querySelector('.container');

    // Set the container innerHTML to the description and the back button
    container.innerHTML = `
      <p class="description">${description}</p>
      <button class="back-button">Back to Buttons</button>
    `;

    // Get the back button element
const backButton = document.getElementById("back-button");

// Set the href attribute of the button to the URL of your initial page
backButton.setAttribute("onclick", "window.location.href = 'index.html'");
      });
    });
  });
});
