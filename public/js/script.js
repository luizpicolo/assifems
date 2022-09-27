//imports
const returnMenu = document.getElementById("return");
const resp_options = document.getElementById("more_options");
const icon = document.getElementById("arrow");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

//globals
var visibility = true;

function menu() {
  if (visibility) {
    resp_options.style.display = "block";
    icon.style.cssText = `
    transform: rotateX(180deg);
    transition: 500ms;
    `;
    visibility = false;
  } else {
    resp_options.style.display = "none";
    visibility = true;
    icon.style.cssText = `
    transform: rotateX(0deg);
    transition: 500ms;
    `;
  }
}
