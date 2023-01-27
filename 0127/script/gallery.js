
$(function(){
  //1. 변수선언
  let g_navi=$('.g_nav a');
  let g_list=$('.g_list a');
  let total_btn = $('.g_nav li:first-child a');
  let plan_btn = $('.g_nav li:nth-child(2) a');
  let de_btn = $('.g_nav li:nth-child(3) a');
  let ui_btn = $('.g_nav li:nth-child(4) a');
  let codi_btn = $('.g_nav li:last-child a');

  //2. 메뉴 클릭 이벤트

  g_navi.click(function(){
    $('.g_nav a').removeClass('act');
    $(this).addClass('act');
    return false; // 새로고침 안되게함
  });


  //3. 이미지목록에 마우스 오버시 캡션 나오게
  g_list.hover(function(){
    $(this).find('span').stop().animate({'bottom':'0px'},300);
    $(this).parent().stop().animate({'border-radius':'50px'},500);
  },function(){
    $('.g_list span').stop().animate({'bottom':'-40px'},300);
    $(this).parent().stop().animate({'border-radius':'0px'},500);
    // let src = $(this).attr('href');
    // console.log(src);
  });

  
  //4. 이미지클릭시 해당 src값을 가져와서 모달윈도 띄우기
  g_list.click(function(){
    let src = $(this).attr('href');
    let title = $(this).find('span').text(); //내용을 가져옴
    console.log(src);

    let i_num = $(this).parent().index()+1;
    console.log(i_num);
    let n = 0;


    let modal = `
    <div class="modal">
    <div class="center">
    <h3>${title}</h3>
    <img src=${src} alt="">
    <span>${i_num}/12</span>
    <i class="fas fa-times"></i>
    <i class="fas fa-angle-left"></i>
    <i class="fas fa-angle-right"></i>
    </div>
    </div>
    `

    //body의 맨 뒤에 내용 추가
    $('body').append(modal);

      //모달창 닫기버튼
  $('.modal .fa-times').click(function(){
    $('.modal').fadeOut();
  });

  //좌우버튼 클릭시 각각 해당 이미지가 나오게
  $('.modal i.fa-angle-left').click(function(){
    moveLeft();
  });
  $('.modal i.fa-angle-right').click(function(){
    moveRight();
  });

  function moveLeft(){
    if(i_num==1){
      i_num=12;
    }else{
      i_num--;
    }
    console.log(i_num);
    $('.modal h3').text($('.g_list > li').eq(i_num).find('span').text());
    $('.modal span').text(i_num+'/12');
    img_check(); //이미지체크하는 함수
  }


  function moveRight(){
    if(i_num==12){
      i_num=1;
    }else{
      i_num++;
    }
    console.log(i_num);
    $('.modal h3').text($('.g_list > li').eq(i_num).find('span').text());
    $('.modal span').text(i_num+'/12');
    img_check(); //이미지체크하는 함수
  }

  //인덱스 번호가 4,9,11일 때 확장자를 png로 교체해주는 함수
  function img_check(){
    if(i_num==4||i_num==9||i_num==11){
      $('.modal img').attr('src','./images/img'+i_num+'.png');
    }else{
      $('.modal img').attr('src','./images/img'+i_num+'.jpg');
    }
  }

    return false;
  });

  //5. 갤러리 메뉴 클릭시 각각 해당 이미지 목록만 보이게 하기

  plan_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.plan').fadeIn(); //해당 목록만 보이게 한다.
  });

  de_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.design').fadeIn(); //해당 목록만 보이게 한다.
  });

  ui_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.ui').fadeIn(); //해당 목록만 보이게 한다.
  });

  codi_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.coding').fadeIn(); //해당 목록만 보이게 한다.
  });

  total_btn.click(function(){
    $('.total').hide();
    $('.total').fadeIn();
  });
});