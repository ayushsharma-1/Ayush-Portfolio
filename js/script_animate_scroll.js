// Allows you to add animations to DOM elements triggered on the scroll.
// https://scrollrevealjs.org/
$(document).ready(function() {
    ScrollReveal().reveal('#header .sr-header', { 
        reset: false,
        interval: 100,
        origin: 'bottom',
        distance: '100px',
    });
    ScrollReveal().reveal('#skills .sr-skills', { 
        reset: false,
        interval: 50,
        origin: 'bottom',
        distance: '100px',
    });
});