document.addEventListener('DOMContentLoaded', () =>{
    const hamburger = document.querySelector('.hamburger-bar');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('fa-bars');
        hamburger.classList.toggle('fa-times');
    });
});


