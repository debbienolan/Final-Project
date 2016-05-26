//adding jquery function
function myJumbotron() {
    var winHeight = $(window).height(50);
    //wrapper div for height of window
    $('.wrapper').css({
        height: winHeight
    });
    //vertically alligning jumbotron

    $('.jumbotron').css({
        marginTop: (winHeight / 2) + 'px'
    });

    //calling the ready function

    $(document).ready(function () {
        myJumbotron();
    });
}