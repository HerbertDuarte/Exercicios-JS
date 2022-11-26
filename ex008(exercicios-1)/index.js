
var agora = new Date()
var hora = agora.getHours()

function carregar(){
    
    var main = document.getElementById('main')
    var body = document.querySelector('body')

    if(hora>=5 && hora<=12){
        main.innerHTML = `<h2 id="texto">São ${hora} horas da  manhã</h2>
        <img src="images/manha.jpg" alt="imagem">`
        body.style.backgroundColor = '#FFE455'
    }
    else if(hora>12 && hora<=18){
        main.innerHTML = `<h2 id="texto">São ${hora} horas da  tarde</h2>
        <img src="images/tarde.jpg" alt="imagem">`
        body.style.backgroundColor = '#da8d46'
    }
    else if(hora == 1){
        main.innerHTML = `<h2 id="texto">É ${hora} hora da  noite</h2>
        <img src="images/noite.jpg" alt="imagem">`

        body.style.backgroundColor = '#26314b'
    }
    else{
        main.innerHTML = `<h2 id="texto">São ${hora} horas da  noite</h2>
        <img src="images/noite.jpg" alt="imagem">`

        body.style.backgroundColor = '#26314b'
    }
}