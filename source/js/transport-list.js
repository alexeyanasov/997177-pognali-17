var itemPlane = document.querySelector(".transport-list__item--plane");
var itemBus = document.querySelector(".transport-list__item--bus");
var itemBike = document.querySelector(".transport-list__item--bike");
var itemRun = document.querySelector(".transport-list__item--run");
var buttonPlane = itemPlane.querySelector(".transport-list__item-plane");
var buttonBus = itemBus.querySelector(".transport-list__item-bus");
var buttonBike = itemBike.querySelector(".transport-list__item-bike");
var buttonRun = itemRun.querySelector(".transport-list__item-run");

itemPlane.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (buttonPlane.classList.contains("transport-list__item-plane--active")) {
    buttonPlane.classList.remove("transport-list__item-plane--active");
  } else {
    buttonPlane.classList.add("transport-list__item-plane--active");
  }
});
itemBus.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (buttonBus.classList.contains("transport-list__item-bus--active")) {
    buttonBus.classList.remove("transport-list__item-bus--active");
  } else {
    buttonBus.classList.add("transport-list__item-bus--active");
  }
});
itemBike.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (buttonBike.classList.contains("transport-list__item-bike--active")) {
    buttonBike.classList.remove("transport-list__item-bike--active");
  } else {
    buttonBike.classList.add("transport-list__item-bike--active");
  }
});
itemRun.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (buttonRun.classList.contains("transport-list__item-run--active")) {
    buttonRun.classList.remove("transport-list__item-run--active");
  } else {
    buttonRun.classList.add("transport-list__item-run--active");
  }
});
