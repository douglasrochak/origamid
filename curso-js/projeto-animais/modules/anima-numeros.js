export default function initAnimaNumeros(){

  function animaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((element)=>{
      const total = +element.innerText;
      const incremento = Math.floor(total / 100);
  
      let start = 0;
      const timer = setInterval(()=>{
        element.innerText = start
        start += incremento
  
        if(start>total){
          element.innerText = total
          clearInterval(timer)
        }
      },50*Math.random())
    });
  }

  function handleMutatiton(mutation){
    if(mutation[0].target.classList.contains('ativo')){
      observer.disconnect()
      animaNumeros()
    }
  }

  const observerTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutatiton);

  observer.observe(observerTarget, {attributes: true})

}