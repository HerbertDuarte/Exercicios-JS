function* contador(){
  let i=0
  while(true){
    yield i++
  }
}

const itc = contador()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)