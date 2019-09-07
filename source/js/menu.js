var link = document.querySelector(".header__show-menu");
var menu = document.querySelector(".main-nav--hidden");
var close = menu.querySelector(".main-nav__toggle");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("main-nav--show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.remove("main-nav--show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (menu.classList.contains("main-nav--show")) {
            menu.classList.remove("main-nav--show");
        }
    }
});
