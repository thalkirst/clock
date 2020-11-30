function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(showTime, 1000); 

function showTime() {
    const now = new Date();
    const clock = document.querySelector('.clock');

    const hours = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());

    clock.textContent = hours + ':' + minutes + ':' + seconds;
};

showTime();


