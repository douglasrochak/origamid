// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function menuAtivo(event){
  event.preventDefault()
  links.forEach((element) => {
    element.classList.remove('ativo')
  })
  event.target.classList.add('ativo')
}

links.forEach((element) => {
  element.addEventListener('click', menuAtivo)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelector('body *')
function showElement(event){
  // console.log(event.currentTarget)
}
body.addEventListener('click', showElement)

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const body = document.querySelector('body')
function removeElement(event){
  // event.target.remove()
}
body.addEventListener('click', removeElement)

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
document.addEventListener('keydown', (event) => {
  if(event.key == 't'){
    document.documentElement.classList.toggle('maior')
  }
})
