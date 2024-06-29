document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.querySelector('.rating-text');
    const submitButton = document.querySelector('.submit-btn');
    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            currentRating = star.getAttribute('data-value');
            updateRating(currentRating);
        });
    });

    submitButton.addEventListener('click', () => {
        alert(`Thank you for rating us ${currentRating} stars!`);
    });

    function updateRating(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
        ratingText.textContent = `You rated this ${rating} stars`;
    }
});
