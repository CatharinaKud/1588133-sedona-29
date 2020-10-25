let form = document.querySelector('.search-form-container');
let themeButton = document.querySelector('.hotels-search');

themeButton.onclick = function() {
  form.classList.toggle('search-form-container');
  form.classList.toggle('search-form-container-hidden');
};
