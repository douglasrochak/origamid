
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if(item.descricao.includes('Taxa')){
    taxaTotal += numeroLimpo;
  }else if (item.descricao.includes('Recebimento')){
    recebimentoTotal += numeroLimpo;
  }
});

// console.log(taxaTotal);
// console.log(recebimentoTotal);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';')
// console.log(transportesArray0)


// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
html = html.split('span').join('a');
// console.log(html);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
// console.log(frase.charAt(frase.length - 1));
//or
// console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxa = 0;
transacoes2.forEach((item) => {
  if(item.toLowerCase().includes('taxa'))
    totalTaxa++;
});
// console.log(totalTaxa);



function funcao(letter,sentence){
  return sentence.split(letter).length -1;
}

console.log(funcao('a','eu amo banana'))