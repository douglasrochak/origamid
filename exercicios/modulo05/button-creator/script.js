const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change',handleChange);

const obj = {}

const handleStyle = {
  element: btn,

  texto(value){
    this.element.innerText = value;
  },
  color(value){
    this.element.style.color = value;
  },
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value+'px';
  },
  width(value){
    this.element.style.width = value+'px';
  },
  border(value){
    this.element.style.border = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value+'px';
  },
  fontSize(value){
    this.element.style.fontSize = value+'rem';
  },
  fontFamily(value){
    this.element.style.fontFamily = value;
  }
}

function handleChange(event){
  obj[event.target.name] = event.target.value
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name,value);
  showCss()
}

function init(){
  const properties = Object.keys(localStorage);

  for(let key of properties){
    const value = localStorage[key];
    controles.elements[key].value = value;
    handleStyle[key](value);
  }
 
  showCss();
}

init()

function saveValues(name,value){
  localStorage[name] = value;
}

function showCss(){
  cssText.innerHTML = '<span>'+btn.style.cssText.split(';').join('</span><span>')
}