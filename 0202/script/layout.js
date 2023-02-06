$(function(){

  let gmnu = $('header .gnb > li, .m_nav > ul > li')

  // 내비게이션 클릭시 해당콘텐츠가 상단에 올라오게 함
  gmnu.click(function(){
    let n = $(this).index()+2;
    console.log(n);

    $('html, body').animate({scrollTop:$('section').eq(n).offset().top-70},500,'easeOutQuint');
    return false;
  });


  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);

// 스크롤 기능을 사용하여 header, gnb에 서식 적용하기
    if(sPos>=800){
      $('header').addClass('h_on');
      $('header .gnb a').addClass('on');
      $('header h1 img').attr('src','./images/logo-casper.png');
      $('header i.fas').css('color','#333');
    }else{
      $('header').removeClass('h_on');
      $('header .gnb a').removeClass('on');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
      $('header i.fas').css('color','#fff');
    }


  });


  //header에 마우스 오버시 로고, 내비게이션, i.fas에 서식적용하고
  $('header').hover(function(){
    $(this).addClass('h_on');
    $('header .gnb a').addClass('on');
    $('header h1 img').attr('src','./images/logo-casper.png');
    $('header i.fas').css('color','#333');
  },function(){
      //마우스 아웃시 서식제거하기
    $(this).removeClass('h_on');
    $('header .gnb a').removeClass('on');
    $('header h1 img').attr('src','./images/logo-casper-white.png');
    $('header i.fas').css('color','#fff');
  });





  //아래로 이동하기 버튼 클릭시 top콘텐츠가 상단 940높이로 올라오게 하


  $('#next_btn').click(function(){
    $('html, body').animate({scrollTop:$('#top3').offset().top-70},500,'easeOutQuint');
    return false;
  });

  // 내비게이션 클릭시 해당 콘텐츠가 상단으로 올라오게 하기
});