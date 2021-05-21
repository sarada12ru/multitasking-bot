$( '#technologies_link' ).click( () => {

    scrollTo('#technologies');

})

$( '#contact_link' ).click( () => {

    scrollTo('#contact');

})

$( '#about_link' ).click( () => {

    scrollTo('#about');

})

function scrollTo(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000);
    return false;
}