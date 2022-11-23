function clique(){
    var velocidade = document.getElementById('vel')
    var vel = Number(velocidade.value)
    var textvel = document.getElementById('textvel')
    textvel.innerHTML = `<p>Sua velocidade é de <strong>${vel}km/h</strong></p>`
    if (vel > 60) {
        textvel.innerHTML += `<p>Você excedeu limite de velocidade. <strong>MULTADO</strong></p>`
    }
    textvel.innerHTML += `<p>Ande sempre com cinto de segurança</p>`
}