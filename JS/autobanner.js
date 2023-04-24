// 오토배너
const btnNext = document.querySelector('a.btn_next');
const btnPrev = document.querySelector('a.btn_prev');
const slide = document.querySelectorAll('li.slide');
const slideRoll = document.querySelectorAll('.slide_roll li');
const btnPlay = document.querySelector('a.btn_play');
let btnNum = 0;
let lastNum = document.querySelectorAll('.slide_wrap>li').length -1;

console.log(btnNext);
console.log(btnPrev);
console.log(slide);
console.log(slideRoll);
// li.slide.active
btnNext.addEventListener ('click', e => {
  e.preventDefault();
  btnNum++;
  if(btnNum>lastNum) btnNum = 0;
  activation(btnNum, slide);
  activation(btnNum, slideRoll);
  // slide.forEach(item => {
  //   item.classList.remove('active');
  // });
  // slide[btnNum].classList.add('active');
  // slideRoll.forEach(idx => {
  //   idx.classList.remove('on');
  // })
  // slideRoll[btnNum].classList.add('on')
})
// prev버튼
btnPrev.addEventListener('click', e => {
  btnNum--;
  if(btnNum<0) btnNum = lastNum;
  activation(btnNum, slide);
  activation(btnNum, slideRoll);
})
// 오토배너 5초 마다
function autoBanner() {
  btnNum++;
  if(btnNum>lastNum) btnNum = 0;
  activation(btnNum, slide);
  activation(btnNum, slideRoll);
  autoBnn = setTimeout(autoBanner,5000)
 }
 let autoBnn = setTimeout(autoBanner,5000);
 
 // function
 function activation(index,list){
   for (let el of list){
     el.classList.remove("on","active");
   }
   list[index].classList.add("on","active");
 }
 