const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
  const body = document.body;
  const logo = document.querySelector('.logo img');

  if (themeSelector.value === 'dark') {
    // Add dark class to body
    body.classList.add('dark');

    // Change logo to white version
    logo.src = 'logo-white.png'; // Make sure this file exists!
  } else {
    // Remove dark class from body
    body.classList.remove('dark');

    // Change logo to blue version
    logo.src = 'logo.jpg'; // Original blue logo
  }
}

// Attach change event listener to the select element
themeSelector.addEventListener('change', changeTheme);
