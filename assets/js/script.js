const decrementButton = document.createElement('button');
decrementButton.textContent = '-';
decrementButton.classList.add('button');

const countDisplay = document.createElement('span');
countDisplay.textContent = '0';
countDisplay.classList.add('span');

const incrementButton = document.createElement('button');
incrementButton.textContent = '+';
incrementButton.classList.add('button')

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.classList.add('resetButton');

 /*Button with JS*/
document.body.appendChild(decrementButton);
document.body.appendChild(countDisplay);
document.body.appendChild(incrementButton);
document.body.appendChild(resetButton);

/*Sound*/
const audio = new Audio('audio/click-stop.mp3');


let count = 0;


function updateDisplay() {
    countDisplay.textContent = count;

/*Number color*/
    if (count < 0) {
        countDisplay.style.color = 'red';
    } else if (count > 0) {
        countDisplay.style.color = 'green';
    } else {
        countDisplay.style.color = 'black';
    }

    audio.play();
}

/*Event*/
decrementButton.addEventListener('click', function () {
    count--;
    updateDisplay();
});


incrementButton.addEventListener('click', function () {
    count++;
    updateDisplay();
});


resetButton.addEventListener('click', function () {
    count = 0;
    updateDisplay();
});

updateDisplay();

