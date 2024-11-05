$(document).ready(function() {
    const container = $('#certification-container');
    
    let scrollDirection = 'down'; // To track the current scrolling direction
    const scrollAmount = 1; // Adjust this value for scroll speed
    const intervalDuration = 20; // Adjust this value for the interval duration
    let scrollInterval;

    // Function to start scrolling
    function startScrolling() {
        scrollInterval = setInterval(function() {
            // Determine the direction and scroll accordingly
            if (scrollDirection === 'down') {
                container.scrollTop(container.scrollTop() + scrollAmount);
                // Check if reached the bottom
                if (container[0].scrollHeight - container.scrollTop() <= container.outerHeight()) {
                    scrollDirection = 'up'; // Change direction to up
                }
            } else if (scrollDirection === 'up') {
                container.scrollTop(container.scrollTop() - scrollAmount);
                // Check if reached the top
                if (container.scrollTop() <= 0) {
                    scrollDirection = 'down'; // Change direction to down
                }
            }
        }, intervalDuration);
    }

    // Start scrolling on mouse enter
    container.on('mouseenter', function() {
        startScrolling();
    });

    // Stop scrolling on mouse leave
    container.on('mouseleave', function() {
        clearInterval(scrollInterval);
    });
});
