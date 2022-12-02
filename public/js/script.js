//sw
// window.onload = () => {
//   "use strict";
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("sw.js");
//   }
// };

const body = document.querySelector("body");
const returnMenu = document.getElementById("return");
const resp_options = document.getElementById("more_options");
const icon = document.getElementById("arrow");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

function showMenu() {
  if (resp_options.style.opacity == 0) {
    if (window.innerWidth < 600) {
      resp_options.style.left = 0;
      body.style.overflow = "hidden";
    } else {
      resp_options.style.transition = "height 500ms";
      resp_options.style.height = "400px";
      resp_options.style.left = "unset";
      resp_options.style.right = 0;
    }
    resp_options.style.opacity = 1;

    icon.style.cssText = `
    transform: rotateX(180deg);
    transition: 500ms;
    `;
  } else {
    if (window.innerWidth < 600) {
      resp_options.style.left = "-100%";
      body.style.overflow = "unset";
    } else {
      resp_options.style.left = "inherit";
      resp_options.style.right = 0;
      resp_options.style.height = "0px";
    }
    resp_options.style.transition = "500ms";
    resp_options.style.opacity = 0;

    icon.style.cssText = `
    transform: rotateX(0deg);
    transition: 500ms;
    `;
  }
}

function openFilterMenu() {
  if (
    filter_options.style.display === "none" ||
    filter_options.style.display === ""
  ) {
    filter_options.style.display = "block";
  } else {
    filter_options.style.display = "none";
  }
}

function search() {
  var input, filter, container, card, name, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  card = document.getElementsByClassName("card");

  for (i = 0; i < card.length; i++) {
    name = card[i].getElementsByTagName("h1")[0];
    txtValue = name.textContent || name.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}

function clearCategories() {
  const checkedInputs = document.querySelectorAll("input:checked");
  checkedInputs.forEach((input) => {
    input.checked = false;
  });
}
