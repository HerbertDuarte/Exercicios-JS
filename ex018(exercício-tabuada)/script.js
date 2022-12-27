function gerar(){
    let num = document.getElementById('numero')
    let seltab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('ERRO (Valor inválido)')
    }else{
        let n = Number(num.value)
        let c = 1
        seltab.innerHTML = ''

        while(c <= 10){
            let item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n*c}`
            seltab.appendChild(item)
            c++
        }
    }
}