const cursos = ['html', 'css', 'javascript', 'php', 'react']

//'elemento' e 'indice' podem ser qualquer nome. ex: (e,i)

const c = cursos.map((elemento, indice) => {

  return `<div>${elemento}</div>`

})

console.log(c)