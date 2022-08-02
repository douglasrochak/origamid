export default function initFuncionameno(){

}

// const agora = new Date();
// agora;
// // Semana Mês Dia Ano HH:MM:SS GMT
// agora.getDate() // Dia
// agora.getDay() // Dia da Semana ex: 5 = Fri
// agora.getMonth() // Número dia mês
// agora.getFullYear() // Ano
// agora.getHours() // Hora
// agora.getMinutes() // Minutos
// agora.getTime() // ms desde 1970
// agora.getUTCHours() - 3 // Brasília

// const agora = new Date();
// const futuro = new Date('Mar 23 2022 01:39')

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(transformarDias(diasFuturo - diasAgora))

// function transformarDias(tempo){
//   return tempo / (24 * 60 * 60 * 1000)
// }

const funcionameno = document.querySelector('[data-semana]');
const diasSemana = funcionameno.dataset.semana.split(',').map(Number)
const horarioSemana = funcionameno.dataset.horario.split(',').map(Number)

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1] )

if(semanaAberto && horarioAberto ){
  funcionameno.classList.add('aberto')
}
// console.log(horarioAberto)
