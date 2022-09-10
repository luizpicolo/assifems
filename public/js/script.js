const returnMenu = document.getElementById("return");
const options = document.getElementById("more_options");
const icon = document.querySelector(".icon_arrow");
const hamburger = document.getElementById("hamburger");
var visibility = true;

function showMenu() {
  if (visibility) {
    options.style.display = "flex";
    icon.style.cssText = `
    transform: rotateX(180deg);
    transition: 500ms;
    `;
    visibility = false;
  } else {
    options.style.display = "none";
    icon.style.cssText = `
    transform: rotateX(0deg);
    transition: 500ms;
    `;
    visibility = true;
  }
  console.log(visibility);
}

function Menu() {
  if (options.style.visibility == "hidden") {
    options.style.visibility = "visible";
 
  } else{
    options.style.visibility = "hidden"
  }
}

returnMenu.addEventListener('click', showMenu);

