function* perguntas(){
  const name = yield 'what your name ?'
  const sport = yield 'what your favorite sport?'

  return `Your name is ${name} and your favorite sport is ${sport}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('herbert').value)
console.log(itp.next('soccer').value)
