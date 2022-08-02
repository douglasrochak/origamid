// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
let teste = {}

const form = document.forms.exercicio
const inputCep = form.cep
const btn = form.btn
const divResultado = document.getElementById('resultadoCep')
btn.addEventListener('click',handleClick)

function handleClick(event){
  event.preventDefault()
  const cep = inputCep.value
  buscaCep(cep)
  
}

function buscaCep(cep){

  const endereco = fetch(`https://viacep.com.br/ws/${cep}/json/`)
  return endereco
  .then(response => response.text())
  .then(text => divResultado.innerText = text)
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const textBtc = document.getElementById('bitcoin')

function fethBtcPrice(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(json => textBtc.innerHTML = 
    `BTC buy price: ${json.BRL.buy}`)
}
setInterval(fethBtcPrice, 30000)

fethBtcPrice()

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnPiada = document.getElementById('btnPiada')
const piadaResult = document.querySelector('#piadaResult')

btnPiada.addEventListener('click',handleClickPiada)

async function handleClickPiada(event){
  event.preventDefault()
  const piadaObj = await fetchPiada()
  piadaResult.innerHTML = piadaObj.value
}

async function fetchPiada(){
  return fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
}