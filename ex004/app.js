function somar(){
  var num1 = document.getElementById('num1')
  var num2 = document.getElementById('num2')
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)
  var res = document.getElementById('res')
  var soma = n1 + n2
  res.innerHTML = `<strong>A soma é igual a ${soma}</strong>`
}