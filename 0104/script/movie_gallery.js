
let n = 1; //초기값

const img_list = document.querySelectorAll('#lnb > li');
const lfet_btn = document.querySelector('i.fa-angle-left')
const right_btn = document.querySelector('i.fa-angle-right')

document.getElementById('page').innerHTML= n + '/10';

img_list.forEach((el,index) => { //el=li태그를 나타내는 매개변수 / index = 번호를 부여함
  el.onclick=()=>{
    console.log(index+1);
    n = index+1; //인덱스 번호에 1을 더하여 1부터 숫자가 나오게

    document.getElementById('page').innerHTML= n + '/10';
    document.getElementById('photo').src='./img3/movie_image'+n+'.jpg';
  }
});

lfet_btn.addEventListener('click',function(){
  if(n == 1){
    n=10;
  }else{
    n--;
  }
  console.log(n);
  document.getElementById('page').innerHTML= n + '/10';
  document.getElementById('photo').src='./img3/movie_image'+n+'.jpg';
})

right_btn.addEventListener('click',function(){
  if(n == 10){
    n=1;
  }else{
    n++;
  }
  console.log(n);
  document.getElementById('page').innerHTML= n + '/10';
  document.getElementById('photo').src='./img3/movie_image'+n+'.jpg';
})