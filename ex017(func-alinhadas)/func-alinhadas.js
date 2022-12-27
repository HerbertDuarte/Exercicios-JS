//  FUNÇÕES ALINHADAS DENTRO UM DA OUTRA

// const somar = (...valores) =>{
//     const soma = (val) =>{
//         let res = 0
//         for(v of val){
//             res +=v
//         }
//         return res
//     }
//     return soma(valores)
// }

// FUNÇÕES ALINHADAS NO CORPO DO SCRIPT

const soma = (val) => {

    // val não
    let cx = 0
    for (v of val){
        cx += v
    }
    return cx
}

const somar = (...valores) =>{
    return soma(valores)
}

let x = somar(3,4,5,6,7,5)

console.log(x)