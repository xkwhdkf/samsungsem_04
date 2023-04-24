window.addEventListener('load', () =>{ 
const step1Btn = document.querySelectorAll(".step1>ul>li>a");

step1Btn.forEach((el,i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    for(let i=0;i<step1Btn.length;i++){
      imgChange(step1Btn[i],`url(images/ico_inquiry_0${i+1}.png)`,`transparent`,`#333`);
    }
    imgChange(el,`url(images/ico_inquiry_on_0${i+1}.png)`,`#043285`,`#fff`);
  });
});

function imgChange(){
  // 대상, 백그라운드이미지, 백그라운드 컬러, 폰트 컬러순
  arguments[0].style.backgroundImage = arguments[1];
  arguments[0].style.backgroundColor = arguments[2];
  arguments[0].style.color = arguments[3];
}
});
// function imgChange2(){
//   // 대상, 백그라운드이미지, 백그라운드 컬러, 폰트 컬러순
//   arguments[0].style.background+arguments[1] = arguments[2];
//   }