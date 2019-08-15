const navToggle = document.querySelector('.header__btn-toggle');
const header = document.querySelector('.header');

const popupBtn = document.querySelector('.popup-btn');
const closeBtn = document.querySelector('.popup-close');
const popup = document.querySelector('.rates-popup');

const filterBtn = document.querySelector('.country-filters__toggle');
const filterCloseBtn = document.querySelector('.country-filters__btn');
const filter = document.querySelector('.country-filters');
const filterTitle = document.querySelector('.country-filters__title');

const filterFormItems = document.querySelectorAll('.search-mate__item');
let windowWidth = window.innerWidth;

const tabletWidth = 768;
const desktopWidth = 1024;

header.classList.remove('header--nojs')

navToggle.addEventListener('click', function() {
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
});

if (popupBtn) {
  popupBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup-show');
  });
}


if (closeBtn) {
  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup-show');
  });
}

if (filterBtn) {
  filter.classList.remove(('country-filters--nojs'));
  filterBtn.textContent = 'Показать все';

  if (windowWidth < tabletWidth) {
    filterBtn.textContent = '';
  }

  if (windowWidth > tabletWidth) {
    filterTitle.textContent = 'Фильтрация по странам:';
  }

  filterBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (filter.classList.contains('country-filters--expand')) {
      filter.classList.remove('country-filters--expand');
      filterBtn.textContent = '';
      filterBtn.textContent = 'Показать все';
    } else {
      filter.classList.add('country-filters--expand');
      filterBtn.textContent = '';
      filterBtn.textContent = 'Свернуть';
    }
  });
}

if (filterCloseBtn) {
  filterCloseBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    filter.classList.remove('country-filters--expand');
  });
}

if (filterFormItems) {
  for (let i = 0; i < filterFormItems.length; i++) {
    filterFormItems[i].addEventListener('click', function () {
      this.classList.toggle('search-mate__item--expand');
    })
  }
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    // if (popup.classList.contains('popup-show')) {
    //   popup.classList.remove('popup-show');
    // }
    popup.classList.toggle('popup-show');

    // if (filter.classList.contains('country-filters--expand')) {
    //   filter.classList.remove('country-filters--expand');
    // }
    popup.classList.toggle('country-filters--expand');
  }
});
