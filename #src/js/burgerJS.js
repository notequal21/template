// $(document).ready(function(){
//     $('.burger-body__item-burger').click(function(event){
//         $('.burger-body__item-burger, .burger-body__item-content').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

// let burger = document.querySelector('.burger-body__item-burger');
// let content = document.querySelector('.burger-body__item-content');

document.querySelector('.burger-body__item-burger').addEventListener('click', (event) => {
    if ( document.querySelector('.burger-body__item-burger').classList.contains('active') ) {
        document.querySelector('.burger-body__item-burger').classList.remove('active');
    } else 
    {
        document.querySelector('.burger-body__item-burger').classList.add('active');
    }

    if ( document.querySelector('.burger-body__item-content').classList.contains('active') ) {
        document.querySelector('.burger-body__item-content').classList.remove('active');
    } else 
    {
        document.querySelector('.burger-body__item-content').classList.add('active');
    }
    
    if ( document.querySelector('body').classList.contains('lock') ) {
        document.querySelector('body').classList.remove('lock');
    } else 
    {
        document.querySelector('body').classList.add('lock');
    }
});