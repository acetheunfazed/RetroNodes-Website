document.addEventListener('DOMContentLoaded', function() {
    // Show the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    const loader = document.querySelector('.loader');
    loadingScreen.style.display = 'flex'; // or 'block'

    // Initially set opacity to 0 for smooth fade-in
    setTimeout(function() {
        loadingScreen.style.opacity = 0;
        loader.classList.add('hidden'); // Hide the loader
    }, 1500); // Fade in for 1.5 seconds

    // Function to hide loading screen
    function hideLoadingScreen() {
        loadingScreen.classList.add('hidden');
        loader.classList.add('hidden'); // Hide the loader
    }

    // Hide loading screen after initial fade-in
    setTimeout(hideLoadingScreen, 4000); // Wait 4 seconds before hiding

    // Listen for transition end to remove the loading screen from the DOM
    loadingScreen.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'opacity' && parseFloat(window.getComputedStyle(this).opacity) === 0) {
            loadingScreen.style.display = 'none';
            loadingScreen.classList.remove('hidden'); // Ensure the class is removed for future use
            loader.classList.remove('hidden'); // Ensure the class is removed for future use
        }
    });
});