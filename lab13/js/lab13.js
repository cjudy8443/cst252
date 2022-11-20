//changed box color to orange
//selecting box
let box = document.querySelector(".box");
    console.log(box);

//change box color property
let boxColor = () => {
    box.style.backgroundColor = "orange";
}

//change the background color to green when orange
// let boxReturn = () => {
//     box.style.backgroundColor = "green";
//     console.log(boxReturn);
// }

//change box color when box gets clicked
box.addEventListener('click', boxColor);
// box.addEventListener('click', boxReturn);



//text to hover
let textHover = document.querySelector('.textHover');
    console.log(textHover);

//font-size property change
let hoverEffect = () => {
    textHover.style.fontSize = "larger";

}
//hover effect reverse when mouse is not hovered on the text
let hoverOut = () => {
    textHover.style.fontSize = "medium";
}

//has the hover effect when the cursor is over the text
textHover.addEventListener('mouseover', hoverEffect);
textHover.addEventListener('mouseout', hoverOut);
