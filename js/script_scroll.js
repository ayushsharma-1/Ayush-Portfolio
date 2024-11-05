$(document).ready(function() {
    const sound = new Howl({
        src: ['../assets/switch_section.mp3'],
    });

    const scrollToSection = (target) => {
        sound.play();
        const navHeight = $('.navbar').outerHeight() + 45;
        const targetElement = $(target);
        const targetPosition = targetElement.offset().top - navHeight;

        $('html, body').animate({
            scrollTop: targetPosition
        }, 100);
    };

    $('.navbar-nav .nav-link').click(function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        scrollToSection(target);
    });
});
