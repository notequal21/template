
// ---- native JS
@@include('animate.js')
@@include('amount.js')
@@include('anchors.js')
@@include('burgerJS.js')
@@include('filter.js')
@@include('mobileFix.js')
@@include('parallax.js')
@@include('sticky.js')
@@include('tabs.js')
@@include('upButton.js')


// ---- JQuery
@@include('burger.js')
@@include('bPopup.min.js')
@@include('lazyLoad.js')
@@include('modal.js')
@@include('slick.min.js')
@@include('slider.js')
@@include('spoiler.js')



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});