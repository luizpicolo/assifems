//sw
window.onload = () => {
  "use strict";
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
  
  document.querySelector('#show').addEventListener('click', () => {
    const iconUrl = document.querySelector('select').selectedOptions[0].value;
    let imgElement = document.createElement('img');
    imgElement.src = iconUrl;
    document.querySelector('#container').appendChild(imgElement);
  });
};

//imports
const body = document.querySelector('body')
const returnMenu = document.getElementById("return");
const resp_options = document.getElementById("more_options");
const icon = document.getElementById("arrow");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");

//globals
var visibility = true;

function menu() {
  if (visibility) {
    
    if(window.outerWidth < 600){
    resp_options.style.left = 0;
    }else{
      resp_options.style.transition = 'height 1s';
      resp_options.style.height = '400px';
    }
    resp_options.style.opacity = 1;
    
    body.style.overflow = 'hidden';
    
     
    icon.style.cssText = `
    transform: rotateX(180deg);
    transition: 500ms;
    `;
    visibility = false;
  } else {
    if(window.outerWidth < 600){
      resp_options.style.left = '-100%';
      }else{
        
        resp_options.style.height = '0px';
      }
    resp_options.style.transition = '1s';
    resp_options.style.opacity = 0;
    body.style.overflow = 'unset';
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