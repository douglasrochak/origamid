// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img');
// console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const allImages = document.querySelectorAll('img');
const widthAllImages = (imgs) => {
  let soma = 0
  imgs.forEach((element) => {
    soma += element.offsetWidth
  });
  return soma
};

window.onload = () => {
  // console.log(widthAllImages(allImages))
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a');
const verifyLinks = (arrElements) => {
  arrElements.forEach((e) => {
    if(e.offsetWidth < 48 && e.offsetHeight < 48) {
      // console.log('Menor que o minimo recomendado')
      // console.log('Width '+e.offsetWidth,'Height '+e.offsetHeight)
      // console.log(e)
      return `${e} Não passou no teste`
    }else{
      // console.log('passou')
    }
  });
  return 'Todos itens passaram no teste'
}
// console.log(verifyLinks(allLinks))

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const mathMedia = window.matchMedia('(max-width: 720px)').matches
// console.log(mathMedia)
const nav = document.querySelector('.menu')
if(mathMedia)nav.classList.add('menu-mobile')