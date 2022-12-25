var box = document.getElementsByClassName('box')

document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  console.log(posicaoy);
  if(posicaoy  > 700){
   box[2].style.background = 'green'
  }else{
    box[2].style.background = 'yellow'
  }
})

