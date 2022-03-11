export default function initDropDownMenu (){

  const subMenus = document.querySelectorAll('[data-dropdown]');

  subMenus.forEach((element)=>{
    ['touchstart','click'].forEach((eventUser)=>{
      element.addEventListener(eventUser,handleClick)
    })
  })

  function handleClick(event){
      event.preventDefault()
      this.classList.add('ativo')
      outSideClick(this,()=>{
      this.classList.remove('ativo')
    })
  }

  function outSideClick(element, callback){
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
      html.addEventListener('click',handleOutSideClick);
      element.setAttribute(outside, '');
    }

    function handleOutSideClick(event){
      if(!element.contains(event.target)){
        html.removeEventListener('click',handleOutSideClick);
        element.removeAttribute(outside, '');
        callback()
      }
    }
  }
  
}