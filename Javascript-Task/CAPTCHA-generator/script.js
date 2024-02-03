// Function to generate a random alphanumeric string
function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }
    return result;
}

// Function to generate and display a new CAPTCHA
function generateCaptcha() {
    const captchaContainer = document.getElementById('captcha-container');
    const captchaInput = document.getElementById('captcha-input');

    // Generate a random 5-character string for the CAPTCHA
    const captchaText = generateRandomString(5);

    // Display the CAPTCHA to the user
    captchaContainer.textContent = captchaText;

    // Clear any previous user input
    captchaInput.value = '';
}

// Function to validate the user's input
function validateCaptcha() {
    const captchaContainer = document.getElementById('captcha-container');
    const captchaInput = document.getElementById('captcha-input');

    // Get the CAPTCHA text that was displayed
    const captchaText = captchaContainer.textContent.trim();

    // Get the user's input
    const userInput = captchaInput.value.trim();

    // Check if the user's input matches the CAPTCHA text
    if (userInput === captchaText) {
        alert('CAPTCHA verified successfully');
        // You can perform further actions here, e.g., submit a form, etc.
        generateCaptcha(); // Generate a new CAPTCHA for the next attempt
    } else {
        alert('CAPTCHA verification failed Please try again.');
        // You can handle incorrect attempts in your application logic
        generateCaptcha(); // Generate a new CAPTCHA for another attempt
    }
}

// Generate the initial CAPTCHA when the page loads
generateCaptcha();