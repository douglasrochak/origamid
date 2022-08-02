// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// meu codigo
// function mudaCor(){
//   let toggle = true
//   const body = document.querySelector('body');
//   setInterval(()=>{
//     if(toggle)
//       body.style.backgroundColor = 'red'
//     else
//       body.style.backgroundColor = 'blue'
//     toggle = !toggle
//   },2000)
// }
// mudaCor()

//outra opcao
// function mudarCor(){
//   document.querySelector('body').classList.toggle('ativo')
// }

// setInterval(()  => mudarCor(),2000 )


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar)


const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let contador = 0;
let timer;


function iniciarTempo(){
  timer = setInterval(()=> {
    tempo.innerText = contador++
  },100)
  iniciar.setAttribute('disabled','')

}

function pausarTempo(){
  clearInterval(timer)
  iniciar.removeAttribute('disabled','')
}

function resetarTempo(){
  tempo.innerText = 0;
  contador = 0;
  
}