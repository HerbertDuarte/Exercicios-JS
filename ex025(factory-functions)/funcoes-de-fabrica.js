//factory funcions criam objetos com mais facilidade e evita codigos extensons com varios objetos

let criarCelular = (marca,tela,bateria,armazenamento,processador) =>{
  return {
    marca,
    tela,
    bateria,
    armazenamento,
    processador,
    ligar : () => console.log('ligando...')
  }
}

// a função acima é a mesma coisa de fazer  : 

// let criarCelular = (marca,tela,bateria,armazenamento,processador) =>{
//   return {
//     marca : marca,
//     tela : tela,
//     bateria : bateria,
//     armazenamento : armazenamento,
//     processador : processador,
//     ligar : () => console.log('ligando...')
//   }
// }

let zenfone3 = criarCelular('asus',5.5,3000,64,'snapdragon 625')

console.log(zenfone3)