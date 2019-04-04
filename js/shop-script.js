$(document).ready(function() {

    $('#newsticker').jCarouselLite({
        vertical: true,
        hoverPause: true,
        btnNext: "#news-prev",
        btnPrev: "#news-next",
        auto: 3000,
        visible: 3,
        speed: 200
    });
});