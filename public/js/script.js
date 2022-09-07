const returnMenu = document.getElementById("return");
const options = document.getElementById("more_options");
const icon = document.querySelector(".icon_arrow");
var visibility = true;

function showMenu() {
  if (visibility) {
    options.style.display = "flex";
    icon.style.cssText = `
    transform: rotateX(180deg)
    `;
    visibility = false;
  } else {
    options.style.display = "none";
    icon.style.cssText = `
    transform: rotateX(0deg)
    `;
    visibility = true;
  }
  console.log(visibility);
}

returnMenu.addEventListener("click", showMenu);
