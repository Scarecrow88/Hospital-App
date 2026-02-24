document.querySelectorAll ('.star-rating').forEach (starRating => {
    const range = starRating.querySelector ('input[type="range"]');
    const stars = starRating.querySelectorAll ('.star');
    function updateStars (value) {
        stars.forEach ((star, index) => {
            if (index < value) {
                star.classList.add ('star-filled');
            } 
            else {
                star.classList.remove ('star-filled');
            }
        });
    }
    // Inicializar estrellas al valor inicial del input
    updateStars (range.value);
    // Escuchar cambios del input de rango
    range.addEventListener ('input', () => {
        updateStars (range.value);
    });
});