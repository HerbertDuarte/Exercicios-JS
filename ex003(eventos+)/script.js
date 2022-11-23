var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', enter)
a.addEventListener('mouseout', out)

function clicar(){
  a.innerText = 'Clicou'
  a.style.backgroundColor = 'red'
}
function enter(){  
  a.innerText = 'Entrou'
  a.style.backgroundColor ='blue'
}
function out(){
  a.innerText = 'Saiu'
  a.style.backgroundColor ='#f1f1f1'
}