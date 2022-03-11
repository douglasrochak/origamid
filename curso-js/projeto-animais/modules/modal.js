export default function initModal(){
  
  function query(selector){
    return document.querySelector(selector);
  }
  const modal = query('[data-modal="container"]');
  const btnLogin = query('[data-modal="login"]');
  const btnClose = query('[data-modal="close"]');

  if(modal && btnLogin && btnClose){
  
    btnLogin.text = 'login'
    btnLogin.addEventListener('click',toggleModal)
    btnClose.addEventListener('click',toggleModal)
    modal.addEventListener('click', clickOutModal)
    
      function toggleModal(event){
        event.preventDefault();
        modal.classList.toggle('ativo');
        
      }
  
      function clickOutModal(event){
        console.log(event.target)
        console.log(this)
        if(event.target === this){
          
          toggleModal(event)
        }
      }
  
    }
  
  }
  