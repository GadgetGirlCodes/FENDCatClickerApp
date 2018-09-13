const kittyCat = document.querySelector('.kitty');
const clickyWords = document.querySelector('.clickyWords');
let numOf = 0;

function clickKitty() {
	numOf++;
	console.log(numOf);
}

function numOfClicks() {
	clickyWords.innerText = "You've clicked the kitty " + numOf + " times!";
}

kittyCat.addEventListener('click', () => {
	clickKitty();
	numOfClicks();
});