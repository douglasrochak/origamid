// function myFunction(n) {
//   if(n%2)
//      return true
//   else
//      return false
// }

// function myFunction(input){
//   return input % 2 === 0
// }

// console.log(myFunction(-4))

// function myFunction(letter,sentence) {
//   let count = 0;
//   const teste = sentence.toLowerCase()
//    for(let i = 0; i < teste.length ; i++){
//      if(teste[i] === letter)
//       count++;
//    }
//   return count;
// }

function myFunction(char, string) {
  return string.toLowerCase().split(char).length - 1
}

console.log(myFunction('h', 'How many times does the character occur in this sentence?'));