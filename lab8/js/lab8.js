//Output div
let outputEl = document.querySelector("#output");
//creating button One and Two
let oneEl = document.createElement("button");
oneEl.innerHTML = "One";
document.body.appendChild(oneEl);

let twoEl = document.createElement("button");
twoEl.innerHTML = "Two";
document.body.appendChild(twoEl);


//changing buttone one
oneEl.style.width = '170px';
oneEl.style.height = '45px';
oneEl.style.margin = '30px';
oneEl.style.color = "green";
oneEl.style.fontSize = '18px';

//changing button 2
twoEl.style.width = '170px';
twoEl.style.height = '45px';
twoEl.style.margin = '30px';
twoEl.style.color = "blue";
twoEl.style.fontSize = '18px';
