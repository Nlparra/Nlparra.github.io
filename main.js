let navBar = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click',function() {
    navBar.classList.toggle('thisishow');
});