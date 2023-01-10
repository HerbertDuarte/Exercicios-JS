const numbers = [1,2,3,5,7,34,623,45]

// para utilizar metodos que não são compatíveis com array usamos o spread para espalhar os valores no método ou função.
// exemplo do método Math.max() que retorna o maior valor e requer valores como no exemplo abaixo:
// Math.max(1,4,6,8,56,3)
// quando usamos esse método um array, como Math.max(numeros) ele não funciona.

// dessa forma o resultado é NaN
console.log(Math.max(numbers))


// dessa forma funciona
console.log(Math.max(...numbers))
