// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 +1) + 1050) ;
// console.log(aleatorio);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
// console.log(Math.max(...numeros.split(', ')))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

// function limpaPrecos(array){
//   let listaPrecosLimpo = Array();

//   array.forEach((item,index) => {
//     listaPrecosLimpo[index] = parseFloat(item.toLowerCase()
//     .replace('r$','').trim().replace(',','.')).toFixed(2);
//   });

//   let total = 0;
//   listaPrecosLimpo.forEach((item)=>{
//     total += parseFloat(item);
//   })
  
//   return console.log(total);
// }

// console.log(limpaPrecos(listaPrecos));

function limpaPreco(preco){
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
  preco = preco.toFixed(2)
  return +preco
}

let total = 0;

listaPrecos.forEach((item) => {
  total += limpaPreco(item)
})

console.log(total)