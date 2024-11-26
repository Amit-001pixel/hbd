// Get the button and the surprise div
const button = document.getElementById('button');
const surprise = document.getElementById('surprise');

// Add an event listener to show the surprise when the button is clicked
button.addEventListener('click', function() {
    surprise.classList.remove('hidden'); // Show the surprise section
    button.style.display = 'none'; // Hide the button after it has been clicked
});
