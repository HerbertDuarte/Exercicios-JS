/*function somar(){
  var num1 = document.getElementById('num1')
  var num2 = document.getElementById('num2')
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)
  var res = document.getElementById('res')
  var soma = n1 + n2
  res.innerHTML = `<strong>A soma é igual a ${soma}</strong>`
}*/
var caixa = document.getElementById('caixa')
var ponto = document.getElementById('ponto')
var pontofalso = document.getElementById('pontofalso')
var text = document.getElementById('text')
var text2 = document.getElementById('text2')
var text3 = document.getElementById('text3')
var somar1 = document.getElementById('somar1')
var somar2 = document.getElementById('somar2')
var box1
var box2

function um(){
  caixa.value = caixa.value + 1
}
function dois(){
  caixa.value = caixa.value + 2
}
function tres(){
  caixa.value = caixa.value + 3
}
function quatro(){
  caixa.value = caixa.value + 4
}
function cinco(){
  caixa.value = caixa.value + 5
}
function seis(){
  caixa.value = caixa.value + 6
}
function sete(){
  caixa.value = caixa.value + 7
}
function oito(){
  caixa.value = caixa.value + 8
}
function nove(){
  caixa.value = caixa.value + 9
}
function zero(){
  caixa.value = caixa.value + 0
}
function somar01(){
  var box1 = Number(caixa.value)
  caixa.value = ''
  text.value= box1
  ponto.style.display = 'inline-block'
  pontofalso.style.display = 'none'
}

function igual(){
  var box2 = Number(caixa.value)
  caixa.value = ''
  text2.value = box2
  
}
function cap(){
  var b1 = document.getElementById(text)
  var b2 = document.getElementById(text2)
  var box1 = Number(b1.value)
  var box2 = Number(b2.value)
  text3.value = box1
}