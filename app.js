document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector('.menu');
  var submenu = document.querySelector('.submenu');

  menu.addEventListener('mouseover', function() {
    submenu.style.display = 'flex';
  });

  menu.addEventListener('mouseout', function() {
    submenu.style.display = 'none';
  });
});