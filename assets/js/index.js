'use strict';

// major styles
var sideMenu = document.querySelector('.side-menu');
var overlay = document.querySelector('.overlay-blur');
var hamburger = document.querySelector('.hamburger');

// minor styles
var about = document.querySelector('.about-side-li');
var skills = document.querySelector('.skills-side-li');
var projects = document.querySelector('.projects-side-li');
var contact = document.querySelector('.contact-side-li');

hamburger.addEventListener('click', function() {
    sideMenu.style.display = 'flex';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function() {
    sideMenu.style.display = 'none';
    overlay.style.display = 'none';
});

about.addEventListener('click', function() {
    sideMenu.style.display = 'none';
    overlay.style.display = 'none';
});

skills.addEventListener('click', function() {
    sideMenu.style.display = 'none';
    overlay.style.display = 'none';
});

projects.addEventListener('click', function() {
    sideMenu.style.display = 'none';
    overlay.style.display = 'none';
});

contact.addEventListener('click', function() {
    sideMenu.style.display = 'none';
    overlay.style.display = 'none';
});