'use strict';

var sideMenu = document.querySelector('.side-menu');
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    sideMenu.style.display = 'flex';
});