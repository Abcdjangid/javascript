// Select the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Add event listener to the button
themeToggleButton.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the body
  const isDarkMode = document.body.classList.toggle('dark-mode');
  
  // Update button text
  themeToggleButton.textContent = isDarkMode ? 'Light' : 'Dark';
  
});
