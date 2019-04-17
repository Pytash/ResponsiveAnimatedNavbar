const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
})