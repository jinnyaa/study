$(function(){

    $('.menu').on({
        'mouseenter':(e)=>{
            $(e.target).next().stop().slideDown();
        },
        'mouseleave':(e)=>{
            $(e.target).next().stop().slideUp();
        }
    })
})