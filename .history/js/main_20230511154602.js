// Grab elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new Error(`Something went, make sure that ${selector} exists or is
  typed correctly.`);
};
//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if(this.scrollY >= 15) {
    headerElement.classList.add('activated');
  }else {
    headerElement.classList.remove('activated');
  }
};

window.addEventListener('scroll', scrollHeader)
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mob
}
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper