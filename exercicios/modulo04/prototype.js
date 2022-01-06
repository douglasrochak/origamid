// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome,sobrenome,idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  const prototype = Pessoa.prototype;

  prototype.fullName = function(){
    return `${this.nome} ${this.sobrenome}`
  }
}

const brenda = new Pessoa('Brenda','Caroline',24);
const jose = new Pessoa('Jose','Paulo',23);

// console.log(brenda.fullName())
// console.log(jose.fullName())


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype)
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(HTMLCollection.prototype)
console.log(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
// console.log(li.hidden.constructor.nameconstructor.name);