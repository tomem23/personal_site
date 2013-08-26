jQuery(document).ready(function ($) {

    $('body').scrollspy({target: '[role="banner"]'});

    // parallax these element's `background-image`
    parallax = $('.slide');

    parallax.each(function() {
        // if the element has a `background-image`
        if ( $(this).css('background-image') != 'none' ) {
            // and a `data-stellar-background-ratio` has not been defined
            if ( !( $(this).data('stellar-background-ratio') ) ) {
                // apply a default `data-stellar-background-ratio`
                $(this).attr('data-stellar-background-ratio', '0.5');
            }
        }
    });

    $.stellar();

    anchors = $('a[href^=#]');

    anchors.click(function(event) {

        // get ID from href
        id = $(this).attr('href');

        if ( id === '#' ) {
            // scroll to top
            $('html, body').animate({
                scrollTop: 0
            });
        } else {
            // scroll to element
            $('html, body').animate({
                scrollTop: $(id).offset().top
            });
        }

        event.preventDefault();
    });

});