
$(function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const slide = document.querySelector('.e_slide');
  const slide_img = document.querySelectorAll('.e_slide li');
  const ebtn_l = document.querySelector('.e_btn_l');
  const ebtn_r = document.querySelector('.e_btn_r');
  let ebtn_c = document.querySelectorAll('.e_c_btn');
  
  const img_n = slide_img.length;
  console.log(img_n);

  const img_w = 1200;
  const s_con = 1;

  let count = 0;

  slide.style.width=img_w*img_n+'px';

  function mslide(n){
    slide.style.left=img_w*-n+'px';
    count = n;
    console.log(slide.style.left);
    console.log(count);
  }

  ebtn_l.addEventListener('click',function(){
    if(count > 0){
      mslide(count-1);
    }else{
      mslide(img_n-s_con);
    }
    clearInterval(Timer);
  });

  ebtn_r.addEventListener('click',function(){
    if(count<img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
    clearInterval(Timer); //클릭했을 때 멈춤
  });

  let Timer = setInterval(function(){
    if(count<img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
  }, 3000);


  ebtn_l.addEventListener('mouseout',function(){
    Timer = setInterval(function(){
      if(count<img_n-s_con){
        mslide(count+1);
      }else{
        mslide(0);
      }
    }, 3000);
  
  });

  ebtn_r.addEventListener('mouseout',function(){
    Timer = setInterval(function(){
      if(count<img_n-s_con){
        mslide(count+1);
      }else{
        mslide(0);
      }
    }, 3000);
  });



  //모달만들기

  let modal = 
  `<div class="modal">
    <div class="m_inner">
      <img src="./images/20230203.jpg" alt="모달배너">
      <p><input type="checkbox" id="ch"><label for="ch">일주일간 열지 않음</label><a href="#" title="닫기">닫기</a></p>
    </div>
  </div>`;

  $('body').append(modal);

  //쿠키생성하기
  let ch = $('.modal #ch'); //체크박스 변수

  //쿠키파일이 현재 브라우저에 존재하면 모달창ㅇ ㅣ안나오도록 한다.
  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }
//쿠키존재여부를 체크하여 쿠키를 생성하거나 모달을 숨긴다.
  function closeModal(){
    if(ch.is(':checked')){ //체크박스를 체크한 경우
      //쿠키를 생성하고
      $.cookie('popup','none',{expires:7, path:'/'});
    }
    $('.modal').hide();
  }

//닫기버튼 클릭하면 closeModal함수를 동작하게 한다.
  $('.modal a').click(function(){
    closeModal();
  });

});