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
    if (scroll>'box1') {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
})


//해당박스로 부드러운 이동

//모바일 토글버튼

