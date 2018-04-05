var h = document.getElementById('hours'),
    m = document.getElementById('min'),
    s = document.getElementById('sec'),
    dateDiv = document.getElementById('Date'),
    monthsNames = [ "Января", "Февраля", "Мартa", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря" ],
    daysNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function dateView() {
    var currentDate = new Date();
    dateDiv.innerText = daysNames[currentDate.getDay()] + ", " + currentDate.getDate() + " " + monthsNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
};

function clockView() {    
    var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds();
    
    hours = checkZero(hours);
    minutes = checkZero(minutes);
    seconds = checkZero(seconds);
    
    h.innerText = hours + ':';
    m.innerText = minutes + ':';
    s.innerText = seconds;
};

function checkZero(i) {
    if(i < 10) {
        i = '0' + i;
    }
    return i;
};

dateView();
setInterval(clockView, 1000);