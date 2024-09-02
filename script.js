document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const message = document.getElementById('message');
    const startBtn = document.getElementById('start-btn');
    const inputContainer = document.getElementById('input-container');
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const boomImage = document.getElementById('boom-image');
    const boomSound = document.getElementById('boom-sound');
    
    let boomNumber;

    function generateNumbers() {
        gameBoard.innerHTML = ''; // Clear previous numbers
        const numbers = [];
        const totalNumbers = 10; // Total numbers to display

        // Generate numbers from 1 to 10
        for (let i = 1; i <= totalNumbers; i++) {
            numbers.push(i);
        }

        // Shuffle numbers
        numbers.sort(() => Math.random() - 0.5);

        // Create number elements
        numbers.forEach(num => {
            const numberDiv = document.createElement('div');
            numberDiv.textContent = num;
            numberDiv.className = 'number';
            gameBoard.appendChild(numberDiv);
        });

        // Randomly select the boom number
        boomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        inputContainer.classList.remove('d-none'); // Show the input container
    }

    function checkNumber() {
        const userNumber = parseInt(userInput.value, 10);
        if (userNumber === boomNumber) {
            message.textContent = 'Boom! Anda menemukan angka boom!';
            boomImage.style.display = 'block'; // Show the boom image
            boomSound.play(); // Play the boom sound
            inputContainer.classList.add('d-none'); // Hide the input container
        } else {
            message.textContent = 'Angka salah. Coba lagi!';
        }
    }

    startBtn.addEventListener('click', generateNumbers);
    checkBtn.addEventListener('click', checkNumber);
});
