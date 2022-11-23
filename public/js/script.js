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

function filtrar(){
if (visibility) {
  filter_options.style.display = "block";
    visibility = false;
  } else {
    filter_options.style.display = "none";
    visibility = true;
  }
}


function search() {
  var input, filter, container, card, name, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  container = document.getElementById("container");
  card = container.getElementsByClassName("card");

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