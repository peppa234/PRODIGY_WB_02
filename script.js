window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector("#minutes");
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let lapBtn = document.querySelector('#lap');
    let lapContainer = document.querySelector('#lapContainer');
    let Interval;

    const startTimer = () => {
        tens++;
        if (tens < 10) {
            appendTens.innerHTML = '0' + tens;
        } else {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            tens = 0;
            appendTens.innerHTML = '00';
            if (seconds < 10) {
                appendSeconds.innerHTML = '0' + seconds;
            } else {
                appendSeconds.innerHTML = seconds;
            }
        }
        if (seconds > 59) {
            minutes++;
            seconds = 0;
            appendSeconds.innerHTML = '00';
            appendMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        }
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
        appendMinutes.innerHTML = '00';
        lapContainer.innerHTML = ''; // Clear lap times
    };

    lapBtn.onclick = () => {
        let lapTime = `${appendMinutes.innerHTML}:${appendSeconds.innerHTML}:${appendTens.innerHTML}`;
        let lapItem = document.createElement('p');
        lapItem.textContent = lapTime;
        lapContainer.appendChild(lapItem);
    };
};
