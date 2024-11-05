// Replaces all elements that have a data-eva attribute with SVG markup
// https://github.com/akveo/eva-icons
$(document).ready(function() {
    eva.replace({
        fill: '#A3BE8C',
        width: 30,
        height: 30,
        animation: {
            type: 'shake',
            hover: true,
            infinite: false,
        }
    });
});