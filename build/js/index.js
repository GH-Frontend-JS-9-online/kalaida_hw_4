let openMenuBtn = document.querySelector('.header--burger'),
  openMenu = document.querySelector('.burger'),
  menuOpenBtnIcon = document.querySelector('#menuOpenBtnIcon'),
  openMenuNumber = 0;

openMenuBtn.addEventListener('click', function () {
  openMenu.classList.toggle('active');

  if(openMenuNumber === 0) {
    menuOpenBtnIcon.className = 'fa fa-times';
    openMenuNumber = 1;
  } else if(openMenuNumber === 1) {
    menuOpenBtnIcon.className = 'fa fa-bars';
    openMenuNumber = 0;
  }
});