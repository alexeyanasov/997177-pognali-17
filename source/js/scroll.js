var nav = document.querySelector("#nav");
var topOfNav = nav.offsetTop;
var navy = document.querySelector(".header");

function fixNav() {
  if(window.scrollY >= topOfNav) {
    //document.body.style.paddingTop =  nav.offsetHeight + "px";
    navy.classList.add("fixed-nav");
  } else {
    //document.body.style.paddingTop =  0;
    navy.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);
