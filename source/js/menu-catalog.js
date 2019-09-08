var buttonFilter = document.querySelector(".catalog__filter-button");
var buttonTopFilter = document.querySelector(".catalog__filter-button-tablet");
var buttonShow = document.querySelector(".catalog__filter-button-container");
var filter = document.querySelector(".catalog__filter-alphabet");
var filterClose = filter.querySelector(".catalog__filter-alphabet-close-top");
var filterCloseBottom = filter.querySelector(".catalog__filter-alphabet-link");

buttonFilter.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.add("catalog__filter-alphabet--show");
  buttonFilter.classList.add("catalog__filter-button--hidden");
  buttonTopFilter.classList.add("catalog__filter-button--hidden");
  buttonShow.classList.add("catalog__filter-button--hidden");
});

filterClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.remove("catalog__filter-alphabet--show");
  buttonFilter.classList.remove("catalog__filter-button--hidden");
  buttonTopFilter.classList.remove("catalog__filter-button--hidden");
  buttonShow.classList.remove("catalog__filter-button--hidden");
});

filterCloseBottom.addEventListener("click", function(evt) {
  evt.preventDefault();
  filter.classList.remove("catalog__filter-alphabet--show");
  buttonFilter.classList.remove("catalog__filter-button--hidden");
  buttonTopFilter.classList.remove("catalog__filter-button--hidden");
  buttonShow.classList.remove("catalog__filter-button--hidden");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (filter.classList.contains("catalog__filter-alphabet--show")) {
            filter.classList.remove("catalog__filter-alphabet--show");
            buttonFilter.classList.remove("catalog__filter-button--hidden");
            buttonTopFilter.classList.remove("catalog__filter-button--hidden");
            buttonShow.classList.remove("catalog__filter-button--hidden");
        }
    }
});
