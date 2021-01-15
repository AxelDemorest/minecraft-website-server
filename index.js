$(document).ready(function () {
    $(".body-content").hover(
        function () { $(".img-required").addClass('rotating'); },
        function () { $(".img-required").removeClass('rotating'); }
    );
});