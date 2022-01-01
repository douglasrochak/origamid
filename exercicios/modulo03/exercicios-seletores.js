// Retorne no console todas as imagens do site
const allImgs = document.querySelectorAll('img');
console.log(allImgs);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsAnimals = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgsAnimals);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos)
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);
// Selecione o último p do site
const allP = document.querySelectorAll('p');
const lastP = allP[allP.length-1];
console.log(lastP);
