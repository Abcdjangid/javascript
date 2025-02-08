function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');

    navbarLinks.classList.toggle('show');
    hamburgerIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
}
