const mouse = {

  color: 'white',
  brand: 'razer',
  model: 'deatheadder'

}

console.log(mouse)

//adicionando propriedade DPI com valor 400

mouse.dpi = 400


console.log(mouse)

//adicionando propriedade com uma função dentro

mouse.mudarDPI = function (){

    if(this.dpi == 400){
      this.dpi = 800
    }else{
      this.dpi = 400
    }
}

console.log(mouse)

//testando a função

mouse.mudarDPI()

console.log(mouse)

mouse.mudarDPI()

console.log(mouse)

//removendo propriedade BRAND do objeto MOUSE

delete mouse.brand

console.log(mouse)