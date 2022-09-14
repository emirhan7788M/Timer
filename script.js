const placeForDay = document.querySelector(`.day`)
const paceForHaur = document.querySelector(`.hour`)
const placeForMinute = document.querySelector(`.min`)
const placeForSecund = document.querySelector(`.sec`)

const holyday = new Date(2023, 04, 18)

const secund = 1000;
const minute = 60 * secund;
const hour = 60 * minute;
const day = 24 * hour;


const timer = function () {
    const currentTime = new Date();
    const distance = holyday - currentTime;

    const daysLeft = Math.floor(distance / day);
    const hoursLeft = Math.floor((distance % day) / hour);
    const minutesLeft = Math.floor((distance % hour) / minute);
    const secundsLeft = Math.floor((distance % minute) / secund)

    placeForDay.textContent = daysLeft;
    paceForHaur.textContent = hoursLeft;
    placeForMinute.textContent = minutesLeft;
    placeForSecund.textContent = secundsLeft;

}

setInterval( timer, 1000 )