
//1. 변수
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const prev_btn = document.getElementById('prev');
const next_btn = document.getElementById('next');

const img_n = slide_img.length;
console.log(img_n);

const img_w = 100;
const m = 0;
const s_con = 1;

let count = 0;

slide.style.width=(img_w+m)*img_n-m+'%';

function mslide(n){
  slide.style.left=(img_w+m)*-n+'%';
  count = n;
  console.log(slide.style.left);
  console.log(count);
}

prev_btn.addEventListener('click',function(){
  if(count>0){
    mslide(count-1);
  }else{
    mslide(img_n-s_con);
  }
  clearInterval(Timer); //클릭했을 때 멈춤
});

next_btn.addEventListener('click',function(){
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
}, 4000);

prev_btn.addEventListener('mouseout',function(){
  Timer = setInterval(function(){
    if(count<img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
  }, 3000);

});

next_btn.addEventListener('mouseout',function(){
  Timer = setInterval(function(){
    if(count<img_n-s_con){
      mslide(count+1);
    }else{
      mslide(0);
    }
  }, 3000);

});