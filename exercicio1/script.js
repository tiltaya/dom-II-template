// const lista = document.getElementById("lista")
// const primeiroItem = document.createElement("li")
// const texto0 = document.createTextNode("Item 0")

// console.log(primeiroItem);
// primeiroItem.appendChild(texto0)

// lista.insertAdjacentElement('afterbegin', primeiroItem)

// OUTRA FORMA

const lista = document.getElementById("lista")
const primeiroItem = document.createElement("li")
primeiroItem.innerHTML = "Item 0"
lista.insertAdjacentElement('afterbegin', primeiroItem)

// ITEM 5

const ultimoItem = document.createElement('li')
const texto5 = document.createTextNode("Item 5")
ultimoItem.appendChild(texto5)
lista.insertAdjacentElement('beforeend', ultimoItem)