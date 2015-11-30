
$(document).ready(function() {
    $('.sidebar-toggle').on('click', function() {
        var sidebar = $('.sidebar');
        var wrapper = $('.wrapper');
        sidebar.toggleClass('open');
        wrapper.toggleClass('no-scroll');
    });
});
