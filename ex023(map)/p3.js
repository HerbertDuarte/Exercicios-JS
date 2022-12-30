let el = document.getElementsByTagName('div')

//spread de el para se transformar em um array manipulavel
el = [...el]

//retorna todas as divs da collection
el.map((e, i)=>{
  console.log(e)
})

//retorna um array do tipo htmlcollection
console.log(el)

