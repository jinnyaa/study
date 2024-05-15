//로고 클릭시 맨 위로 이동
$('.title strong').on('click',()=>{
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})

//스크롤에 따른 header 변화
// addEventListener('scroll',()=>{})
$(window).on('scroll',()=>{
    const box1=$('.box1').offset().top;
    console.log(box1)
    const headerHt=$('header').outerHeight();
    console.log(headerHt);
    console.log($('header').height());

    if (scroll>'box1') {
        $('header').addClass('active');
        $('article').css({height:`cale(100vh-${headerHt}px)`});

    } else {
        $('header').removeClass('active');
        $('article').css({height:`cale(100vh-${headerHt}px)`});
    }
})


// 해당 박스로 부드러운 이동
        /*
        $('.global-menu li:nth-child(1) a').on('click', (e) => {
        e.preventDefault();

        scrollTo({
            top: $('.box1').offset().top - $('header').height(),
            behavior: 'smooth'
        })
        });

        여러 요소의 순회
        JS :
        array.forEach(elem => {});
        [a[0],a[1],a[2],a[3]].forEach(a => {});

        jQuery : 
        $.each(배열 혹은 객체, 콜백함수);
        배열인 경우 인덱스, 값 순서로 인자를 받음
        $.each((index, vaule) => {});
        */

//.each는 for each처럼 여러 요소를 순차적으로 순환
//첫번째 a가 functiong함수로 들어감
$('.global-menu a').each(function(idx, elem){
    // console.log(`index:${idx},value:${elem}`)
    $(elem).on('click',(e)=>{
        e.preventDefault();

        const getArticle=$('article').eq(idx).offset().top-$('header').height()
        scrollTo({
            top:getArticle,
            behavior:'smooth'
        })
    })
});




//모바일 토글버튼
$('.mobile-button').on('click',(e)=>{
    $(e.target).toggleClass('toggle-btn');
    $('.global-menu').toggleClass('show-menu');

    //클릭시 창 닫기
    $('.global-menu li').each((idx,li)=>{
        $(li).on('click',()=>{
            $('.global-menu').removeClass('show-menu');
            $('.mobile-button').removeClass('toggle-btn');
        })
    })
})


