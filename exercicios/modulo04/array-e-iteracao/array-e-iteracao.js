// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos);
const cursosLista = cursosArray.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;
  return {titulo:titulo, descricao:descricao, aulas:aulas, horas:horas}
})
// console.log(cursosLista)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaior100 = numeros.filter(item => item > 100);
// const numerosMaior100 = numeros.filter((item) => {
//   return item > 100});
// console.log(numerosMaior100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const baixo = instrumentos.some(item => item === 'Baixo');
// console.log(baixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador, item) => {
  item.preco = +item.preco.slice(3).replace(',','.');
  // precoLimpo = +item.preco.slice(3).replace(',','.');
  return acumulador + item.preco
  
},0)

console.log(totalCompras)
