var hourHand = document.querySelector('.hour-hand'),
    minuteHand = document.querySelector('.min-hand'),
 	secondHand = document.querySelector('.second-hand');


function	setDate(){

	var now = new Date(),
	seconds = now.getSeconds(),
	minutes = now.getMinutes(),
	hours = now.getHours();


	var secondsDegrees = ((seconds/60)*360) +90;
	console.log('minutes');
	secondHand.style.transform= `rotate(${secondsDegrees}deg)`;

	var secondsDegrees = ((minutes/60)*360) +90;
	minuteHand.style.transform= `rotate(${secondsDegrees}deg)`;

	var secondsDegrees = ((hours/12)*360) +90;
	hourHand.style.transform= `rotate(${secondsDegrees}deg)`;

}
setInterval(setDate, 1000);

