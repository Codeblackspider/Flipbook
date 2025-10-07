$(document).ready(function() {
    // Initialize the flipbook
    $(".flipbook").turn({
        width: '100%',
        height: '100%',
        autoCenter: true,
        duration: 1000,
        gradients: true,
        acceleration: true
    });
    
    // Update page counter
    function updatePageCounter() {
        const currentPage = $('.flipbook').turn('page');
        const totalPages = $('.flipbook').turn('pages');
        $('#page-counter').text(`Page ${currentPage} of ${totalPages}`);
    }
    
    // Navigation buttons
    $('#prev-btn').click(function() {
        $('.flipbook').turn('previous');
    });
    
    $('#next-btn').click(function() {
        $('.flipbook').turn('next');
    });
    
    // Keyboard navigation
    $(document).keydown(function(e) {
        if (e.keyCode == 37) { // Left arrow
            $('.flipbook').turn('previous');
        } else if (e.keyCode == 39) { // Right arrow
            $('.flipbook').turn('next');
        }
    });
    
    // Update counter on page turn
    $('.flipbook').bind('turned', function(event, page) {
        updatePageCounter();
    });
    
    // Initial page counter update
    updatePageCounter();
    
    // Handle window resize
    let resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $('.flipbook').turn('size', $('.flipbook').width(), $('.flipbook').height());
        }, 100);
    });
    
    // Handle touch events for mobile
    if ('ontouchstart' in window) {
        $('.flipbook').addClass('touch-enabled');
    }
});