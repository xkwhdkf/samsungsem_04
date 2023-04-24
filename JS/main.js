// main.js
window.addEventListener('load', () =>{


  // 주메뉴
  const menu = document.querySelectorAll(".gnb>ul>li");
  const header = document.querySelector(".header_wrap");
  // let height = document.querySelectorAll(".gnb>ul>li>div");
  menu.forEach((el,i) =>{
    el.addEventListener("mouseenter", e=>{
      e.preventDefault();
      activation(menu,i,"on");
      getHeight(el.children[1],100);
    });
    el.children[0].addEventListener("focus", e=>{
      e.preventDefault();
      activation(menu,i,"on");
      getHeight(el.children[1],100);
    });
    header.addEventListener("mouseleave", e=>{
      for(let el of menu) el.classList.remove("on");
      header.style.height = 70+"px";
    });
    el.children[0].addEventListener("blur", e=>{
      for(let el of menu) el.classList.remove("on");
      header.style.height = 70+"px";
    });
  });
  // 검색박스
  const btnSrch = document.querySelector(".btn_srch");
  const srchWrap = document.querySelector(".srch_wrap");
  const btnSrchClose = document.querySelector(".btn_srch_close");
  
  btnSrch.addEventListener("click", e=>{
    e.preventDefault();
    srchWrap.classList.add("on");
  });
  btnSrchClose.addEventListener("click", e=>{
    e.preventDefault();
    srchWrap.classList.remove("on");
  });
  // 슬라이드
  const slideBtn = document.querySelectorAll(".slide_arr>a");
  const slide = document.querySelectorAll(".slide");
  const slideRollList = document.querySelectorAll(".slide_roll>ul>li");
  let slideIdx = 0;
  // 좌우 화살표
  slideBtn.forEach((el,i) =>{
    el.addEventListener("click", e =>{
      e.preventDefault();
      if(i == 0) slideIdx==0 ? slideIdx=slide.length-1 : slideIdx--;
      // i==0 > prev 버튼 클릭시
      else slideIdx==slide.length-1 ? slideIdx=0 : slideIdx++;
      activation(slide,slideIdx,"active");
      activation(slideRollList,slideIdx,"on");
      clearTimeout(autoBnn);
      autoBnn = setTimeout(autoBanner, 5000);
    });
  });
  let autoBnn = setTimeout(autoBanner, 5000);
  // 슬라이드 자동 전환
  const playBtn = document.querySelector(".btn_play");
  playBtn.addEventListener("click", e =>{
    e.preventDefault();
    playBtn.classList.toggle("on");
    if(playBtn.classList.contains("on")) clearTimeout(autoBnn);
    // playBtn.className == "btn_play on" 과 playBtn.classList[0] == "on" 의 조건값이 같음. 
    // contains 쓰면 됨.
    else autoBnn = setTimeout(autoBanner, 5000);
  });
  // 네비게이터 클릭
  for(let i=0;i<slideRollList.length;i++){
    slideRollList[i].children[0].addEventListener("click", e =>{
      e.preventDefault();
      activation(slide,i,"active");
      activation(slideRollList,i,"on");
      slideIdx = i;
      clearTimeout(autoBnn);
      if(playBtn.classList.contains("on") == false) autoBnn = setTimeout(autoBanner, 5000);
    });
  }
  
  // top
  // 클릭하면 스크롤이 0 
  const toTop = document.querySelector("#footer .btns");
  console.log(toTop.children[1])
  toTop.children[1].addEventListener("click", e=>{
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  });
  
  window.addEventListener("scroll", e=>{
    var scroll = window.pageYOffset;
    if(scroll <= 0) toTop.classList.remove("on","ab");
    else if(scroll >= 2700) {
      toTop.classList.add("ab","on");
      //2개를 확실하게 추가/제거 하기. 
    }
    else {
      toTop.classList.add("on");
      toTop.classList.remove("ab");  
    }
  });
  
  // function
  function activation(aa, idx, name){
    for(let el of aa) el.classList.remove(name);
    aa[idx].classList.add(name);
  }
  function getHeight(aa,i){
    let height = aa.offsetHeight;
    header.style.height = height+i+"px";
  }
  function autoBanner(){
    slideIdx==slide.length-1 ? slideIdx=0 : slideIdx++;
    activation(slide,slideIdx,"active");
    activation(slideRollList,slideIdx,"on");
    autobnn = setTimeout(autoBanner, 5000);
   
  }
  });
  