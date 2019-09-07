var buttonAdd = document.querySelector(".trip-step__choose-list-add");
var countryList = document.querySelector(".country-list");
var buttonDelete = countryList.querySelector(".country-list__close");
//var buttonHidden = document.querySelector(".trip-step__choose-list-button");

buttonAdd.addEventListener("click", function(evt) {
  evt.preventDefault();
  countryList.classList.add("country-list--show");
  //buttonHidden.classList.add("trip-step__choose-list-button--hide");
});

buttonDelete.addEventListener("click", function(evt) {
  evt.preventDefault();
  countryList.classList.remove("country-list--show");
  //buttonHidden.classList.remove("trip-step__choose-list-button--hide");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (countryList.classList.contains("country-list--show")) {
            countryList.classList.remove("country-list--show");
            //buttonHidden.classList.remove("trip-step__choose-list-button--hide");
        }
    }
});
