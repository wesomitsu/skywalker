$('[title="web"]').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".category-title:contains(Web)").offset().top - 100
    }, 2000);
});

$('[title="games"]').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".category-title:contains(Games)").offset().top - 100
    }, 2000);
});

$('[title="about"]').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about-title").offset().top - 100
    }, 2000);
});

$('[title="home"]').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 2000);
});