console.log(this)

// o this sozinho se refere ao ojeto WINDOW
// pode-se notar que ele é referenciado no console.log

// Como nesse caso o this é o objeto WINDOW, podemos acessar  os métodos de window com o this (mesmo que não seja necessário pois o javascript já atribui esse objeto automaticamente aos seus métodos, como é o caso do window.alert ou o window.prompt e até mesmo as próprias variáveis)

this.alert('Olá')
var resposta = this.prompt('Tudo bem?')

//o console.log não funcionou coma variavel declarada com o LET.

console.log(resposta)

var numero = 5
console.log(this.numero)

if(resposta == 'sim'){
  window.alert('Maravilha!!!')

  //this continua sendo o objeto window aqui

  console.log(this)
}

let pessoa = {
  nome: 'Bia',
  idade : 19,
  falar : function(){
    // Aqui o THIS se refere ao OBJETO PESSOA
    // Logo, nesse escopo o this pode acessar métodos e propriedades de PESSOA
    console.log('Olá, ' + this.nome)
  },

  aniversario : function(){
    this.idade ++
  }
}

pessoa.falar()









