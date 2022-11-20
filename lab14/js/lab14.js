document.addEventListener("DOMContentLoaded", () => {
//spelling Loaded is fixed

	//putting input box into a variable
	let inputBox = document.querySelector('.guessingBox'); //fix quertySelector and add "." to guessingBox

	//input event - what should happen:
	//check if they entered the right number
	//if so
	//create a new div
	//set the div to have a message "you won!"
	let inputHandler = (number) => {
		if (+number.currentTarget.value === 6) {
			let newBox = document.createElement('div');
			newBox.classList.add('box');
			newBox.textContent = 'You won!';
			document.body.appendChild(newBox);
		}
	}
	inputBox.addEventListener('input', inputHandler); //changed  function to be inputHandler, not inputBox
});
