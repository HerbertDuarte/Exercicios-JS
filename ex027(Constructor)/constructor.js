//camel case - umDoisTreêsQuatro
//pascal case - UmDoisTrêsQuatro
function Celular(marca,tela,bateria){
  this.marca = marca,
  this.tela = tela,
  this.bateria = bateria,
  this.ligar = ()=> {
    return console.log(('ligando...'))
  }
}

//deve-se usar o NEW antes da função para indicar a criação de um novo objeto a partir dela.

const zenfone = new Celular('ASUS', 5.5,4000)
console.log(zenfone)