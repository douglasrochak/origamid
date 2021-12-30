// Duplique o menu e adicione ele em copy
const Menu = document.querySelector('.menu')
const cloneMenu = Menu.cloneNode(true)
const copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector('.faq-lista')
const firstDt = faq.children[0]

// Selecione o DD referente ao primeiro DT
const firstDd = firstDt.nextElementSibling
console.log(firstDd)

// Substitua o conteúdo html de .faq pelo de .animais
const secFaq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

secFaq.innerHTML = animais.innerHTML

