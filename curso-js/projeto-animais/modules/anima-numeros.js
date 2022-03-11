export default function initAnimaNumeros(){
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((element)=>{
    const total = +element.innerText;

    console.log(total)

  });

}