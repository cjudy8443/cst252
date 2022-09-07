function flowerFunction() {
	//initialize();

	//YOUR CODE GOES RIGHT HERE

	document.querySelector("#flower5 .center").textContent = document.querySelector("#flower1 .center").textContent + document.querySelector("#flower3 .center").textContent;
	document.querySelector("#flower5 .center").style.backgroundColor = "purple";
	document.querySelector("#flower5 .center").style.color = "black";//chamges the last flowers font color

	document.querySelector(`#flower1`).style.marginTop = "100px";
	document.querySelector(`#flower2`).style.marginTop = "100px";
	document.querySelector(`#flower3`).style.marginTop = "100px";
	document.querySelector(`#flower4`).style.marginTop = "100px";
	document.querySelector(`#flower5`).style.marginTop = "100px";
	//all of these codes bring the flowers on the same exact line at the top//

	document.querySelector("#flower1 .center").style.backgroundColor="orchid";
	document.querySelector("#flower2 .center").style.backgroundColor="pink";
	document.querySelector("#flower3 .center").style.backgroundColor="aquamarine";
	document.querySelector("#flower4 .center").style.backgroundColor="lawngreen";
	document.querySelector("#flower5 .center").style.backgroundColor="red";
	//These change the color of the circle//

	document.querySelector("#flower1 .center").style.color="navy";
	document.querySelector("#flower2 .center").style.color="crimson";
	document.querySelector("#flower3 .center").style.color="eggplant";
	document.querySelector("#flower4 .center").style.color="salmon";
	document.querySelector("#flower5 .center").style.color="yellow";
//These codes change the numbers inside the cirlces//
	// DO NOT PUT ANY CODE AFTER THIS POINT
}


function initialize() {
	//DO NOT CHANGE ANY OF THIS CODE
	document.querySelector("#flower1 .center").textContent = randomNumber();
	document.querySelector("#flower3 .center").textContent = randomNumber();



}


function randomNumber() {
	return Math.floor(Math.random() * 10);
}
