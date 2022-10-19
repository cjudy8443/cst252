function getRandomInt() {
  return Math.floor(Math.random() * 100);
}


document.addEventListener('DOMContentLoaded', () => {
	let randomNumber = getRandomInt();
	document.querySelector('#secretNumber').textContent = randomNumber;

})
//working on it
let inputBox = document.querySelector('#inputBox')
let randomNumber = (e) => {
  console.log(event.currentTarget.value);
  let userInput=event.currentTarget.value;
  if (userInput === "Correct number!") {
  } else {
    console.log("Wrong Number");
}
};

inputBox.addEventListener('input', randomNumber);
