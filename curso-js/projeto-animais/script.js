function initTab () {
  const animaisLista = document.querySelectorAll('.animais-lista li')
  const animaisDescricao = document.querySelectorAll('.js-tabcontent section')

  if(animaisLista.length && animaisDescricao.length){
    animaisDescricao[0].classList.add('ativo')

    function activeTab (index){
      animaisDescricao.forEach((element) => {
        element.classList.remove('ativo')
      })
      animaisDescricao[index].classList.add('ativo')
    }
  
    animaisLista.forEach((element , index) => {
        element.addEventListener('click',() => {
          activeTab(index)
        })
    });
  }

}
initTab();

function initAccordionList(){
  const accordionList = document.querySelector('.js-accordion-list');
  const allDT = accordionList.querySelectorAll('dt');

  if(allDT.length){
    allDT.forEach((dtItem)=>{
      dtItem.addEventListener('click',() => {
        dtItem.nextElementSibling.classList.toggle('ativo');
        dtItem.classList.toggle('ativo');
      })
    })
  }
}
initAccordionList();

function initMenu() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  if(linksInternos.length){
    
    linksInternos.forEach((element) => {
      let sectionID = element.attributes.href.value;
      const sectionElement = document.querySelector(sectionID);
      
        element.addEventListener('click',(event)=>{
          event.preventDefault();
          sectionElement.scrollIntoView({block:'start',behavior:'smooth'});

          //Outra possibilidade
          // window.scrollTo({top:sectionElement.offsetTop,behavior:'smooth'})
        });
    });
  }
}
initMenu();

function initAnimaScroll()  {
  const scrollItens = document.querySelectorAll('.js-scroll');

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
initAnimaScroll()


// function Dom(elements) {
//   this.elements = document.querySelectorAll(elements)
//   this.addClass = function(classe){this.elements.forEach((element) => {
//     element.classList.add(classe);
//   })};
//   this.removeClass = function(classe){ this.elements.forEach((element) => {
//     element.classList.remove(classe);
//   })};
// }


// function Pessoa(nome,sobrenome,idade) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.idade = idade;

//   const prototype = Pessoa.prototype;
  
//   prototype.fullName = nome + ' ' + sobrenome;
// }

// const brenda = new Pessoa('Brenda','Caroline',24);
// console.log(brenda);
// console.log(brenda.fullName)