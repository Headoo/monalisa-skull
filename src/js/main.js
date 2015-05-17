/**
 * RESIZE EACH ROWS TO CURRENT DOCUMENT HEIGHT
 * RESIZE MEDIA TO DOCUMENT PROPORTIONS
 */
function resizeLogic () {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var mediaW = (w/2).toFixed(0);
    var mediaH = (h/2).toFixed(0);

    //Affect document height to each "row" class
    var elements = document.querySelectorAll('.row');
    for (var i=0; i < elements.length; i++) {
        elements[i].style.height = h + 'px';
    }

    //Affect document height to Jumbotron
    document.getElementsByClassName('jumbotron')[0].style.height = h + 'px';

    //Affect document height to footer
    document.getElementsByTagName('footer')[0].style.height = h + 'px';

    //Resize media canvas depending on window
    var mediasElement = document.querySelectorAll('img');
    for (var i = 0; i < mediasElement.length; i++) {
        mediasElement[i].style.width = mediaW + 'px';
        mediasElement[i].style.height = mediaH + 'px';
    }
}

//Initialize all resize
resizeLogic();

//Reset the logic on page resize
window.addEventListener('resize', function(event) {
    resizeLogic();
});