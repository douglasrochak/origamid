export default function initModal(){
  
  function query(selector){
    return document.querySelector(selector);
  }
  const modal = query('[data-modal="show"]');
  const btnLogin = query('[data-modal="login"]');
  const btnClose = query('[data-modal="close"]');
  
  btnLogin.text = 'login'
  btnLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    modal.classList.add('ativo')
  })

  btnClose.addEventListener('click',(e)=>{
    modal.classList.remove('ativo')
  })
}