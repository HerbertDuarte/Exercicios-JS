//O método rest é usado para se referir a RESTOS na formação de um ARRAY. EX:

function carro(marca,...specs){
  //desse modo o resto coleta todos os próximos valores depois de marca e põe no array specs, ou seja, pega todo o resto dos elementos fornecidos na chamada da função.
  console.log(marca)
  console.log(specs)
}

carro('honda',2020,2.0,'preto')