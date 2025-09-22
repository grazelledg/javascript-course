'use strict';

console.log('Modal project ready!');

const modalEl = document.querySelector('.modal');

const overlayEl = document.querySelector('.overlay');

const btnCloseModalEl = document.querySelector('.close-modal');

const btnsOpenModalEl = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalEl.length);

const openModal = function () {

  modalEl.classList.remove('hidden');


  overlayEl.classList.remove('hidden');
};

const closeModal = function () {

  modalEl.classList.add('hidden');

  overlayEl.classList.add('hidden');
};

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
