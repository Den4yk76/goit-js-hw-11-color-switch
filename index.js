const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyEl: document.querySelector('body'),
};
let intervalId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    intervalId = setInterval(() => {
        randomIntegerFromInterval(colors.indexOf(colors[0]), colors.length - 1);
        refs.bodyEl.style.backgroundColor = colors[index];
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function onStopBtnClick() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}

function randomIntegerFromInterval(min, max) {
    index = Math.floor(Math.random() * (max - min + 1) + min);
    return index;
}
