// Selecting element to work the event
let button = document.querySelector(".itembox");
let button2 = document.querySelector(".itembox2");
var image = document.querySelector(".courseimage");

//all updated information for when the button is clicked on
let buttonPress = () => {
    infopanel.style.display = "block";
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.innerHTML = "CST 252 Scripting for Multimedia";
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.innerHTML = "A course about learning javaScript";
    image.src = "images/cst252.jpg";
    console.log(image);
};

//all updated information for when the button is clicked on
let buttonPress2 = () => {
    infopanel.style.display = "block";
    let courseInfo = document.querySelector(".descriptionitem")
    courseInfo.innerHTML = "CST 351 Web Design";
    let courseDesc = document.querySelector("#courseDescription");
    courseDesc.innerHTML = "A course about learning web development";
    image.src = "images/cst351.jpg";
};

// trigeer event when clicked
button.addEventListener("click", buttonPress);
button2.addEventListener("click", buttonPress2);

let exitButton = document.querySelector("#exitbutton");
let infopanel = document.querySelector("#infopanel");


// doesn't show infor panel when clicked
let exitClick = () => {
    infopanel.style.display = "none";
}

// thin border after mouse moves away from button
let out = () => {
    button.style.border = "thin grey solid";
}

//thin border when mouse moves towards button
let inside = () => {
    button.style.border = "5px solid black";
}
let out2 = () => {
    button2.style.border = "thin grey solid";
}
let inside2 = () => {
    button2.style.border = "5px solid black";
}

button.addEventListener("mouseout", out);
button.addEventListener("mouseover", inside);
button2.addEventListener("mouseout", out2);
button2.addEventListener("mouseover", inside2);

exitButton.addEventListener("click", exitClick, out);
