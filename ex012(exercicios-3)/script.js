var button = document.getElementById('button')

button.addEventListener('click', ()=>{
  var inicio = document.getElementById('inicio').value
  var fim = document.getElementById('fim').value
  var passo = document.getElementById('passo').value

  if(fim.length== 0 || inicio.length== 0 ){
    alert('ERRO (Preencha todos os campos).')
  }else{
  
    var inicio = Number(inicio)
    var fim = Number(fim)
    var passo = Number(passo)

    if(passo == 0){
      alert('Erro(PASSO INVÁLIDO) - Considerando passo 1.')
      passo = 1
    }

    if(inicio <= fim){

      var resultado = document.getElementById('resultado')

      resultado.innerHTML = '<p>contado: </p> <p id="contador"></p>'

      var contador = document.getElementById('contador')

      for(var i = inicio ; i <= fim ; i += passo){
        contador.innerText += `${i} 👉 `
      }
      contador.innerText += '🏁'
    }else{

      var resultado = document.getElementById('resultado')

      resultado.innerHTML = '<p>contado: </p> <p id="contador"></p>'

      var contador = document.getElementById('contador')

      for(var i = inicio ; i >= fim ; i -= passo){
        contador.innerText += `${i} 👉 `
      }
      contador.innerText += '🏁'

    }

    }

    

})