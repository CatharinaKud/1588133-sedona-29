let form = document.querySelector('.search-form-container');
let themeButton = document.querySelector('.hotels-search');
let formReservation = document.querySelector('.info-form');
let arrivalDate = document.querySelector('.date-arrive');
let dateDeparture = document.querySelector('.date-depart');
let adultsGuests = document.querySelector('.amount1');
let childrenGuests = document.querySelector('.amount2');
let blockReservation = document.querySelector('.search-form-container');

let isStorageSupport = true;
let storageAdultsGuests = "";
let storageChildrenGuests = "";

try {
  storageAdultsGuests = localStorage.getItem('adultsGuests');
  adultsGuests.value = storageAdultsGuests;
  storageChildrenGuests = localStorage.getItem('childrenGuests');
  childrenGuests.value = storageChildrenGuests;
} catch (err) {
  isStorageSupport = false;
}


themeButton.addEventListener('click', function() {
  form.classList.toggle('search-form-container-hidden');
});

formReservation.addEventListener('submit', function(evt) {
  if (
    !arrivalDate.value ||
    !dateDeparture.value ||
    !adultsGuests.value ||
    !childrenGuests.value
  ) {
    evt.preventDefault();
    blockReservation.classList.add('modal-error');
    setTimeout(function() {
      blockReservation.classList.remove('modal-error');
    }, 1000);
  } else {
    if (isStorageSupport) {
      localStorage.setItem('adultsGuests', adultsGuests.value);
      localStorage.setItem('childrenGuests', childrenGuests.value);
    }
  }
});
