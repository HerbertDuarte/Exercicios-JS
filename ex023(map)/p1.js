const cursos = ['html', 'css', 'javascript', 'php', 'react']

//'elemento' e 'indice' podem ser qualquer nome. ex: (e,i)
//map consegue acessar os valores, indices e o proprio array nessa ordem

cursos.map((elemento, indice) => {

  console.log(`curso : ${elemento} - posição : ${indice}`)

})