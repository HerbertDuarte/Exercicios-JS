function* cores(){
  yield 'red'
  yield 'green'
  yield 'blue'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)