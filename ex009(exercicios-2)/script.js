function verificar(){
    var ano = document.getElementById('ano')
    var agora = new Date()
    var anodata = agora.getFullYear()

    var idade = anodata - ano.value

    if (ano.value.lenght == 0 || ano.value > anodata){
        alert('[error 404] Verifique os dados inseridos e tente novamente')
    }
    else{
        res = document.getElementById('res')
        var sexo = document.getElementsByName('sexo')
        
        var img = document.createElement('img')
        img.setAttribute('id','imagem')

        if(sexo[0].checked){

            if(idade >=0 && idade < 12){
                img.setAttribute('src','img/menino.jpg')
                res.innerHTML = `Essa pessoa é uma criança de ${idade} anos.`
            }
            else if(idade < 24){
                img.setAttribute('src','jovem-m.png')
                res.innerHTML = `Essa pessoa é um jovem de ${idade} anos.` 
            }
            else if(idade < 50){
                img.setAttribute('src','adulto.png')
                res.innerHTML = `Essa pessoa é um adulto de ${idade} anos.`
            }            
            else{
                img.setAttribute('src','idoso.jpg')
                res.innerHTML = `Essa pessoa é um idoso de ${idade} anos.`
            }
        }

        else if(sexo[1].checked){
            if(idade >=0 && idade < 12){
                img.setAttribute('src','menina.jpg')
                res.innerHTML = `Essa pessoa é uma criança de ${idade} anos.`
            }
            else if(idade < 24){
                img.setAttribute('src','jovem-f.png')
                res.innerHTML = `Essa pessoa é uma jovem de ${idade} anos.`
            }
            else if(idade < 60){
                img.setAttribute('src','adulta.png')
                res.innerHTML = `Essa pessoa é uma adulta de ${idade} anos.`
            }
            else{
                img.setAttribute('src','idosa.jpg')
                res.innerHTML = `Essa pessoa é uma idosa de ${idade} anos.`
            }
        }

        res.appendChild(img)
    
    }
}
