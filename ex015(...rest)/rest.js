somar = (...valores) =>{
    let res = 0

    for(v of valores){

    // "v" vai receber todos os valores do array tipo REST "...valores" e vai execultar o bloco do for que soma "v" ao let "res"
 
        res += v
    }
    return res
}

let x = somar(5,4,3)

console.log(x)