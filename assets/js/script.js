
let userText1 = prompt("What do you want your website to say??");

var headerEl = document.createElement("h1");
headerEl.textContent = userText1;
document.body.appendChild(headerEl);

let textSize1 = prompt("What size do you want this line? (in pixels)");
headerEl.setAttribute("style", `font-size: ${textSize1}px`);

let textColor1 = prompt("What color do you want this line to be?");
headerEl.setAttribute("style", `color: ${textColor1}`);


let userText2 = prompt("What is your next line??");

var h2El = document.createElement("h2");
h2El.textContent = userText2;
document.body.appendChild(h2El);

let textSize2 = prompt("What size do you want this line? (in pixels)");
h2El.setAttribute("style", `font-size: ${textSize2}px`);

let textColor2 = prompt("What color do you want this line to be?");
h2El.setAttribute("style", `color: ${textColor2}`);

let userParagraph = prompt("Now write a paragraph to describe your subject matter.");

var paragraphEl1 = document.createElement("p");
paragraphEl1.textContent = userParagraph;
document.body.appendChild(paragraphEl1);

let textColor3 = prompt("What color do you want your paragraph to be?");
h2El.setAttribute("style", `color: ${textColor3}`);

let bgColor = prompt("What color do you want the background??");
document.body.setAttribute("style", `background-color: ${bgColor}`);
