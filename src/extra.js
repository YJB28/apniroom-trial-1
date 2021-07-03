/*
Problem1: You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.


*/

let item = "Welcome To First Class";
console.log(item);

let div = document.createElement("div");
div.style.border = "2px solid red";
div.innerHTML = "<h1> Hello Yogesh!! </h1>";

div.style.margin = "auto";
div.style.padding = "1% 10%";
div.style.display = "inline-flex";


let body = document.getElementById(`body`);
body.appendChild(div);

div.addEventListener("click", function() {
    div.setAttribute("contentEditable", "true");




});
let store = function() { localStorage.setItem("Heading", div.innerText) };

div.addEventListener("blur", store);
console.log(div);
localStorage.removeItem("Note");
console.log(body);