
export default function initMenu() {
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