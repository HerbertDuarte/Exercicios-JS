const items = document.querySelectorAll('li')

//dessa forma a constante ITEMS retorna uma NODELIST que é diferente de um ARRAY
//portanto, a NODELIST não poderá acessar métodos de ARRAYS como o FOREACH e o MAP
console.log(items)

//usando spread
itemsArray = [...items]
console.log(itemsArray)

//pode-se também usar o método Array.from(A Node List)
