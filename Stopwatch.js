let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function startPause() {
    if (running === false) {
        running = true;
        increment();
        document.getElementById('startPause').innerText = 'Pause';
    } else {
        running = false;
        document.getElementById('startPause').innerText = 'Resume';
        clearInterval(timer);
    }
}
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function startPause() {
    if (running === false) {
        running = true;
        increment();
        document.getElementById('startPause').innerText = 'Pause';
    } else {
        running = false;
        document.getElementById('startPause').innerText = 'Resume';
        clearInterval(timer);
    }
}

function reset() {
    running = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('startPause').innerText = 'Start';
    updateDisplay();
}

function increment() {
    timer = setInterval(function() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10);
}

function updateDisplay() {
    document.getElementById('hours').innerText = pad(hours);
    document.getElementById
function reset() {
    running = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('startPause').innerText = 'Start';
    updateDisplay();
}

function increment() {
    timer = setInterval(function() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 10);
}

function updateDisplay() {
    document.getElementById('hours').innerText = pad(hours);
    document.getElementById('minutes').innerText = pad(minutes);
    document.getElementById('seconds').innerText = pad(seconds);
    document.getElementById('milliseconds').innerText = pad(milliseconds);
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}
