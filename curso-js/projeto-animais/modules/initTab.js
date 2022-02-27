export default function initTab () {
  const animaisLista = document.querySelectorAll('[data-tab="menu"] li')
  const animaisDescricao = document.querySelectorAll('[data-tab="content"] section')

  if(animaisLista.length && animaisDescricao.length){
    animaisDescricao[0].classList.add('ativo')

    function activeTab (index){
      animaisDescricao.forEach((element) => {
        element.classList.remove('ativo')
      })
      const direcao = animaisDescricao[index].dataset.anime
      animaisDescricao[index].classList.add('ativo',direcao)
    }
  
    animaisLista.forEach((element , index) => {
        element.addEventListener('click',() => {
          activeTab(index)
        })
    });
  }

}