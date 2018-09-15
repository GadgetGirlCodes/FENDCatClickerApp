const kittyCatOne = document.querySelector('#one');
const kittyCatTwo = document.querySelector('#two');
const clickyWordsOne = document.querySelector('.clickyWordsOne');
const clickyWordsTwo = document.querySelector('.clickyWordsTwo');
let numOfOne = 0;
let numOfTwo = 0;

function clickKittyOne() {
	numOfOne++;
	console.log("kitty one: " + numOfOne);
}

function clickKittyTwo() {
	numOfTwo++;
	console.log("kitty two: " + numOfTwo);
}

function numOfClicksOne() {
	clickyWordsOne.innerText = "You've clicked this kitty " + numOfOne + " times!";
}

function numOfClicksTwo() {
	clickyWordsTwo.innerText = "You've clicked this kitty " + numOfTwo + " times!";
}

kittyCatOne.addEventListener('click', () => {
	clickKittyOne();
	numOfClicksOne();
});

kittyCatTwo.addEventListener('click', () => {
	clickKittyTwo();
	numOfClicksTwo();
});