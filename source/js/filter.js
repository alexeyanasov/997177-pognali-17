var buttonOpen = document.querySelector(".travellers-form__list-button--music");
var filterMenu = document.querySelector(".checkbox-list--music");
var item = document.querySelector(".travellers-form__list-item--music");
var buttonClose = document.querySelector(".travellers-form__list-button--close");


buttonOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  filterMenu.classList.remove("checkbox-list--hidden");
  item.classList.remove("travellers-form__list-item--hidden");
  buttonClose.classList.add("travellers-form__list-button-close--show");
  buttonOpen.classList.add("travellers-form__list-button--music--hide");
});

buttonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  filterMenu.classList.add("checkbox-list--hidden");
  item.classList.add("travellers-form__list-item--hidden");
  buttonClose.classList.remove("travellers-form__list-button-close--show");
  buttonOpen.classList.remove("travellers-form__list-button--music--hide");
});
