setInterval(setClock, 1000);

const secondHand = document.querySelector('[data-second-hand]'); //wskazówka sekundowa
const minuteHand = document.querySelector('[data-minute-hand]'); //wskazówka minutowa
const hourHand = document.querySelector('[data-hour-hand]'); //wskazówka godzinna

const secondsDig = document.querySelector('.seconds'); //sekunda cyfrowa
const minutesDig = document.querySelector('.minutes'); //minuta cyfrowa
const hoursDig = document.querySelector('.hours'); //godzina cyfrowa

const dayNumDate = document.querySelector('.dayNum'); //nr dnia tygodnia
const dayDate = document.querySelector('.days'); //nazwa dnia
const monthDate = document.querySelector('.months'); //miesiąc
const yearDate = document.querySelector('.years'); //rok

const img = document.querySelector('.clock'); //obrazek na tarczy
const modal = document.querySelector('.modal');

const currentDate = new Date(); //data dzisiejsza

function setClock() {
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / 60; //każda sekunda podzielona przez 60 skoków na tarczy zegara otrzymujemy ratio dla sekundy potem będzie to mnożone przez 360 i wyjdzie o jaki kąt ma się przesunąć wskazówka
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

	secondsDig.textContent = ('0' + currentDate.getSeconds()).slice(-2); //slice wycina wszystko i zostawia 2 znaki z końca łańcucha tutaj cyfry
	minutesDig.textContent = ('0' + currentDate.getMinutes()).slice(-2);
	hoursDig.textContent = ('0' + currentDate.getHours()).slice(-2);

	dayNumDate.textContent = currentDate.getDate();
	yearDate.textContent = currentDate.getFullYear();

	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360);
}

function setDay() {
	switch (currentDate.getDay()) {
		case 0:
			dayDate.textContent = 'Niedziela';
			break;
		case 1:
			dayDate.textContent = 'Poniedziałek';
			break;
		case 2:
			dayDate.textContent = 'Wtorek';
			break;
		case 3:
			dayDate.textContent = 'Środa';
			break;
		case 4:
			dayDate.textContent = 'Czwartek';
			break;
		case 5:
			dayDate.textContent = 'Piątek';
			break;
		case 6:
			dayDate.textContent = 'Sobota';
			break;
	}
}

function setMonth() {
	switch (currentDate.getMonth()) {
		case 0:
			monthDate.textContent = 'Styczeń';
			break;
		case 1:
			monthDate.textContent = 'Luty';
			break;
		case 2:
			monthDate.textContent = 'Marzec';
			break;
		case 3:
			monthDate.textContent = 'Kwiecień';
			break;
		case 4:
			monthDate.textContent = 'Maj';
			break;
		case 5:
			monthDate.textContent = 'Czerwiec';
			break;
		case 6:
			monthDate.textContent = 'Lipiec';
			break;
		case 7:
			monthDate.textContent = 'Sierpień';
			break;
		case 8:
			monthDate.textContent = 'Wrzesień';
			break;
		case 9:
			monthDate.textContent = 'Październik';
			break;
		case 10:
			monthDate.textContent = 'Listopad';
			break;
		case 11:
			monthDate.textContent = 'Grudzień';
			break;
	}
}
const imgArr = [
	'img/watch.jpg',
	'img/girl.jpg',
	'img/mountain.jpg',
	'img/cat.jpg',
	'img/sunset.jpg',
	'img/mountains.jpg',
];

let index = 0;
function changeImg() {
	index++;
	if (index === imgArr.length) index = 0;
	img.style.backgroundImage = `url(${imgArr[index]})`;
	localStorage.setItem('img', imgArr[index]);
	localStorage.setItem('index', index);
}

img.addEventListener('click', changeImg);

function setImg() {
	const getImg = localStorage.getItem('img');
	img.style.backgroundImage = `url(${getImg})`;
	const currentIndex = localStorage.getItem('index');
	index = currentIndex;
}

img.addEventListener('mouseover', () => {
	modal.classList.add('active');
});

img.addEventListener('mouseleave', () => {
	modal.classList.remove('active');
});

setImg();
setClock();
setDay();
setMonth();
