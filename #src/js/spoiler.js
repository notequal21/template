$(document).ready(function(){
    $('.spoiler__btn').click(function(event) {
        if($('.services__body').hasClass('one')){
            $('.spoiler__btn').not($(this)).removeClass('active');
            $('.services__item-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    }); 
});