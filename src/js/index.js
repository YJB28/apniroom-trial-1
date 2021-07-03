console.log("welcome To ApniRoom's Console");
console.log("Work In Progress...");
window.onload = popup;

function popup() {
    alert("Work In progress...")
}

// Toggeler Button


let menulines = document.getElementById("menulines");
menulines.addEventListener("click", openNav);

function openNav() {
    console.log("openNav Fired...");
    let sideNavbar = document.getElementById("sideNavbar");
    sideNavbar.style.display = "block";

}

// let menulines = document.getElementById("menulines");
menulines.addEventListener("dblclick", closeNavbar);

function closeNavbar() {
    console.log("openNavbar Fired...");
    let sideNavbar = document.getElementById("sideNavbar");
    sideNavbar.style.display = "none";
}


let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", closeNav);

function closeNav() {
    console.log("CloseNav Fired...");

    let sideNavbar = document.getElementById("sideNavbar");
    sideNavbar.style.display = "none";
}