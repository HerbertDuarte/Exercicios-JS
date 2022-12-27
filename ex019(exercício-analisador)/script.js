var num = []
var i = 0
 

function add(){
    let res = document.getElementById('resultado')

    var elemento = Number(document.getElementById('numero').value)
    res.innerHTML = '' 


    if(elemento.length == 0 || elemento > 100 || elemento < 0){
        alert('Digite apenas números de 0 a 100')
    }else{
        var seltab = document.getElementById('seltab')
        if (i == 0){
            seltab.innerHTML = ''
        }
        
        if (num.indexOf(elemento) == -1){
            
            num[i] = elemento
            i++
            
            var op = document.createElement('option')
            var select = document.querySelector('select')
            
            op.innerText = `Número ${elemento} adicionado`
            select.appendChild(op)

        }else{
            alert('Esse número já foi adicionado.')
        }
        document.getElementById('numero').value = ''
    }

}


function finalizar(){
    
    num.sort((a,b) => {
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })

    let menor = num[0]
    let maior = num[num.length-1]
    
    var soma = 0

    for(v of num){
        soma+=v
    }

    let media = soma/(num.length)

    let res = document.getElementById('resultado')
    console.log(num)
    res.innerHTML = `Ao todo, foram cadastrados ${num.length} números <br>`
    res.innerHTML += `O menor número foi ${menor} <br>`
    res.innerHTML += `O maior número foi ${maior} <br>`
    res.innerHTML += `A soma dos números é ${soma} <br>`
    res.innerHTML += `A média dos números é ${media}`
}

