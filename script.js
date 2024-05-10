window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    parallax.forEach(function(el) {
        let offset = window.pageYOffset;
        el.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
