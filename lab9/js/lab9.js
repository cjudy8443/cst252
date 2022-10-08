document.addEventListener('DOMContentLoaded', () => {

//allows button to click
let button = document.querySelector("#btn");

let handle = () => {
    console.log('you clicked');
    let titleChange = document.querySelector("#title");
    titleChange.style.border = "1px solid red";
    titleChange.style.borderRadius = "10px";
};

button.addEventListener("click", handle);

// allows hover to happen
let hoverEvent = document.querySelector("#hover");

let handle4 = () => {
    let colorEffect = document.querySelector("#hover");
    colorEffect.style.color = "purple";
    colorEffect.style.backgroundColor = "blue";
}

hoverEvent.addEventListener("mouseover", handle4);

});
