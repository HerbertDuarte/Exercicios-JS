var corpo = document.body
var p1 = document.getElementsByTagName('p')[0] //seleciona a primeira tag <p> 
var p2 = document.getElementsByTagName('p')[1]
var message = document.getElementById('msg')
var titulo = document.querySelector('h1.titulo') //seleciona o h1 de classe titulo

titulo.style.color = 'red'
/*
document.write('O texto selecionado é : ' + p1.innerText) //p1.innerText == o texto dentro da tag <p>

corpo.style.background = 'darkgray'
p1.style.color = 'blue'

document.write(' ---- seguundo paragrafo : ' + p2.innerHTML) // .innerHTML == puxa o condeúdo e não só o texto

message.style.background = 'blue'
message.innerText = 'NOVO TEXTO' 
*/