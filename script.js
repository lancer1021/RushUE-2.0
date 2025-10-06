const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// JavaScript to handle the click event
document.querySelector('.image-container').addEventListener('click', function() {
    // Remove the blur effect
    const image = document.querySelector('.blurred-image');
    const text = document.querySelector('.image-text');

    image.style.filter = 'blur(0)';
    text.style.opacity = '1'; // Show the text
});
