const yesElement = document.getElementById('yes');
const resultElement = document.getElementById('result');
const noElement = document.getElementById('no');

const gifDiff = document.getElementById('gif');

start = 1;

yesElement.addEventListener('click', onYesClick);
function onYesClick() {
	resultElement.textContent = 'TAAAAK!!!!Wiedziałem że się zgodzisz<333';
	gifDiff.src = 'so-excited-minions.gif';
}

noElement.addEventListener('click', onNoCick);
function onNoCick() {
	start += 0.6;
	yesElement.style.transform = 'scale(' + start + ')';
}
