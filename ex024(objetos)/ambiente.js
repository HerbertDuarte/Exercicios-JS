//objetos são variaveis compostas como arrays
//porem podem receber key-values com valores definidos, funções ou até mesmo outro objeto

let celular = {

  // valores
  marca: 'google pixel',
  bateria : 100,
  cpu: 'snapdragon',
  // object
  tela: {
    altura:1280,
    largura:720
  },
  // function
  ligar : ()=> console.log('ligando...')
}

console.log(celular.tela.altura)
celular.ligar()
