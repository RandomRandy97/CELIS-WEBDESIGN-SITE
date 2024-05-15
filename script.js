document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    document.querySelector('.bx-cart').addEventListener('click', function() {
        // Redirect to cart page
        window.location.href = 'cart.html';
    });

    document.querySelector('.down-arrow a').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.suggested-products').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
