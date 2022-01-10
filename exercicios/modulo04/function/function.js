// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const allP = document.querySelectorAll('p');
// const arrayP = Array.from(allP)
// const totalCaractere = arrayP.reduce((acumulador,item) => {
//   const itemLength = +item.innerText.length
//   return acumulador + itemLength
// },0)
// console.log(totalCaractere)

const totalParagrafos = Array.prototype.reduce.call(allP,(acumulador,item)=> {
  return acumulador + Number(item.innerText.length);
},0);
// console.log(totalParagrafos);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function Dom(tag,classe,conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerText = conteudo : null;
  return elemento;
}
// const dom2 = new Dom('section','ativo','testedsadasdsadas teste');
// document.body.appendChild(dom2)
// console.log(dom2);


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1 = Dom.bind(null,'h1')

const titulo1 = h1('titulo','Meu deus do ceu');
const titulo2 = h1('titulo1','dasfhsaufhsaufsauh');
console.log(titulo1)
console.log(titulo2)
