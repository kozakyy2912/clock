var hoursHand = document.querySelector('.hour-hand'),
    minutesHand = document.querySelector('.min-hand'),
    secondsHand = document.querySelector('.second-hand');

function setDate() {
    var now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    var hoursDegrees = ((hours / 12) * 360) + 90;;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}     
setInterval(setDate, 500);