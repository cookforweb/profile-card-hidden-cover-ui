( function ($) {

    console.log('Ate');

    $('#trigger-cover-mode').on('click', function() {

        $('.profile-card-wrapper').toggleClass('cover');
    })

})(jQuery)
