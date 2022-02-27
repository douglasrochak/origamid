export function initAnimaScroll()  {
  const scrollItens = document.querySelectorAll('[data-anime="scroll"]');

  if(scrollItens.length){

    function animaScroll(){
      scrollItens.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const halfScreen = (elementTop < window.innerHeight*0.6);
        if(halfScreen){
          element.classList.add('ativo');
        }else
        element.classList.remove('ativo');
      });
    }
    document.addEventListener('scroll', animaScroll);
    animaScroll();
  }
}