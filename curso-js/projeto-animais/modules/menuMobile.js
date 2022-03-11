import outsideClick from './clickOutSide.js';

export default function initMenuMobile(){
  const btnMenu = document.querySelector('[data-menu="button"]');
  const mobileList = document.querySelector('[data-menu="list"]');
  const eventos = ['click','touchstart']

  if(btnMenu && mobileList){
    function openMenuMobile(event){
      mobileList.classList.add('active')
      btnMenu.classList.add('active')
      outsideClick(mobileList,eventos,()=>{
        console.log('teste')
        mobileList.classList.remove('active')
        btnMenu.classList.remove('active')
      })
    }
  
    eventos.forEach((item) => btnMenu.addEventListener(item,openMenuMobile));
  }
}