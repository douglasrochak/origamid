export default function initTooltip(){

  const tooltips = document.querySelectorAll('[data-tooltip]');
  
  tooltips.forEach((element)=>{
    element.addEventListener('mouseover',onMouseOver)
  })
  
  function createTooltipBox(element){
    const tooltipDiv = document.createElement('div');
    tooltipDiv.classList.add('tooltip');
    tooltipDiv.textContent = element.getAttribute('aria-label');
    return tooltipDiv;
  }
  
  function onMouseOver(event){
    const toolTipBox = createTooltipBox(this);
    toolTipBox.style.top = event.pageY + 30 + 'px';
    toolTipBox.style.left = event.pageX+ 30 + 'px';
    document.body.appendChild(toolTipBox);
    this.addEventListener('mouseleave',onMouseLeave)
    this.addEventListener('mousemove',onMouseMove)
    onMouseLeave.toolTipBox = toolTipBox;
    onMouseMove.toolTipBox = toolTipBox;
  }

  const onMouseLeave = {
    handleEvent(){
      this.toolTipBox.remove();
      event.target.removeEventListener('mouseleave',onMouseLeave);
      event.target.removeEventListener('mousemove',onMouseMove);
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 30 + 'px'
      this.toolTipBox.style.left = event.pageX+ 30 + 'px'
    }
  }


  // mapa.addEventListener("mouseenter",(event)=>{
  //   console.log(event.pageX)
  //   
  //   tooltipDiv.style = `top:${event.pageY}px; left:${event.pageX}px`
    
  // })

  // mapa.addEventListener("mouseout",(event)=>{
  //   console.log('saiu do elemento')
  //   tooltipDiv.remove()
    
  // })
};