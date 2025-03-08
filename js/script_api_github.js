document.addEventListener("DOMContentLoaded", function() {
    const filterTags = document.querySelectorAll(".filter-tag");
    const projectCards = document.querySelectorAll(".project-card");
    
    filterTags.forEach(tag => {
        tag.addEventListener("click", function() {
            filterTags.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            this.blur(); // Remove outline after click
            
            const filter = this.getAttribute("data-filter");
            
            projectCards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
function showNotification(message) {
    alert(message);
}


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-tag");
    const experienceCards = document.querySelectorAll(".experience-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            // Get filter category from the button
            const filterCategory = this.getAttribute("data-filter");

            // Loop through experience cards and show/hide based on the filter
            experienceCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filterCategory === "all" || category === filterCategory) {
                    card.style.display = "block"; // Show matching cards
                } else {
                    card.style.display = "none"; // Hide non-matching cards
                }
            });
        });
    });
});
