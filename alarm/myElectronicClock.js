var hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second'),
    alarmSign = document.querySelector('.alarmSign'),
    setAlarmTime = document.querySelector('.setAlarmTime'),
    timeAlarmHour = document.querySelector('.timeAlarmHour'),
    timeAlarmMinute = document.querySelector('.timeAlarmMinute'),
    timeAlarmSecond = document.querySelector('.timeAlarmSecond'),
    myAudio = new Audio();
    myAudio.src = 'Ofenbach_-_Katchi.mp3',
    stopAlarmButton = document.querySelector('.stopAlarmButton');


alarmSign.addEventListener('click', setAlarm, false);
alarmSign.addEventListener('dblclick', deactivateAlarm, false);
stopAlarmButton.addEventListener('click', function(){ stopAlarmMusic }, false);

function setAlarm() {
    alarmSign.style.opacity = 1;
    setAlarmTime.style.display = 'block';
    timeAlarmHour.style.display = 'block';
    timeAlarmMinute.style.display = 'block';
    stopAlarmButton.style.display = 'block';
}

function deactivateAlarm() {
    alarmSign.style.opacity = 5.4;
    setAlarmTime.style.display = 'none';
    timeAlarmHour.style.display = 'none';
    timeAlarmMinute.style.display = 'none';
    stopAlarmButton.style.display = 'none';
    timeAlarmHour.value='';
    timeAlarmMinute.value='';
}


function setDate() {
    var now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

        
        if(seconds < 10) {
        	seconds = '0' + seconds;
        }
        if(minutes < 10) {
        	minutes = '0' + minutes;
        }
        if(hours < 10) {
        	hours = '0' + hours;
        }

        hourHand.innerText = hours;
        minuteHand.innerText = minutes;
        secondHand.innerText = seconds;

        if(timeAlarmHour.value==hours && timeAlarmMinute.value==minutes) {
            audioLoad();                      
        }

}

function audioLoad() {
    myAudio.play();
}

function stopAlarmMusic() {
    audioStop();
}

function audioStop() {
    myAudio.pause();
}


setInterval(setDate);