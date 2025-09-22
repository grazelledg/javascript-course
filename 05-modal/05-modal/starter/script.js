// 'use strict';

// console.log('Modal project ready!');

// const modalEl = document.querySelector('.modal');

// const overlayEl = document.querySelector('.overlay');

// const btnCloseModalEl = document.querySelector('.close-modal');

// const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// console.log('Open buttons:', btnsOpenModalEl.length);

// const openModal = function () {

//   modalEl.classList.remove('hidden');


//   overlayEl.classList.remove('hidden');
// };

// const closeModal = function () {

//   modalEl.classList.add('hidden');

//   overlayEl.classList.add('hidden');
// };

// btnCloseModalEl.addEventListener('click', closeModal);
// overlayEl.addEventListener('click', closeModal);


'use strict';

// Selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');


// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// Modal Development Hour 2 - Keyboard Events & Advanced UX
'use strict';

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

// Let's start by understanding keyboard events
console.log('Keyboard events test');

// Add a basic keyboard event listener
document.addEventListener('keydown', function (e) {
  // Log the event
  // object to see what we get
  console.log('Key pressed:', e);

  // Log just the key property
  console.log('Key name:', e.key);
});

// Let's modify our event listener to be more specific
document.addEventListener('keydown', function (e) {
  // Only respond to ESC key
  if (e.key === 'Escape') {
    console.log('ESC key pressed!');
  }
});

// Add ESC key functionality to close the modal
document.addEventListener('keydown', function (e) {
  // Check if ESC key was pressed AND modal is visible
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// Enhance openModal function with focus management
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  // Move focus to the modal
  modalEl.focus();
  // Store which button opened the modal
  lastFocusedButton = document.activeElement;
};


