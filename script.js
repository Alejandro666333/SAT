// BLOQUE: JAVASCRIPT PARA EL MENÚ

// Funcionalidad del menú hamburguesa

document.addEventListener('DOMContentLoaded', function() {

const navToggle = document.getElementById('navToggle');

const navMenu = document.getElementById('navMenu');

const navTogglelines = document.querySelectorAll('.nav_toggle-line');

// Evento click para el botón hamburguesa

navToggle.addEventListener('click', function() {

});

// Alternar clase activa en el menú

navMenu.classList.toggle('nav_menu--active');

// Alternar clases activas en las líneas del hamburguesa

navToggleLines[0].classList.toggle('nav_toggle-line--top-active');

navToggleLines[1].classList.toggle('nav_toggle-line--middle-active');

navToggleLines [2].classList.toggle('nav_toggle-line--bottom-active');

});