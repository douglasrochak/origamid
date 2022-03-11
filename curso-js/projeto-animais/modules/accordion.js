export default function initAccordionList(){
  const accordionList = document.querySelector('[data-accordion="list"]');
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