$(function(){
    /*
    //대메뉴에 마우스를 올리면, 소메뉴가 내려옴
    $('.global-menu > li').on('mouseenter',()=>{
        $('.sub-menu').stop().slideDown();
    })
    $('.global-menu > li').on('mouseleave',()=>{
        $('.sub-menu').stop().slideUp();
    })
    */

    /*
    $('.global-menu > li').on({
        'mouseenter':()=>{
            $('.sub-menu').stop().slideDown();
        },
        'mouseleave':()=>{
            $('.sub-menu').stop().slideUp();
        }
    })
    */

    $('.global-menu > li').on({
        'mouseenter':(e)=>{
        // $(e.target).next().stop().slideDown();
        $('.sub-menu').stop().slideDown();
        },
        'mouseleave':()=>{
            $('.sub-menu').stop().slideUp();
            }
    })

    
})