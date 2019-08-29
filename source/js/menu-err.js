var menuErr = document.querySelector(".main-nav");
var buttonHidden = menuErr.querySelector(".main-nav__toggle");

var jsErr = function() {
  menuErr.classList.remove("main-nav--err");
  buttonHidden.classList.remove("main-nav__toggle--err");
};

jsErr();
