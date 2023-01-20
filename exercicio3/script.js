const paragrafo = document.getElementById('mensagem')

// const checaCaps = (event) => {
//     if (event.key === "Shift") {
//         paragrafo.innerHTML = 'Tecla Shift pressionada'
//     } else {
//         paragrafo.innerHTML = ""
//     }
// }

const checaCaps = (event) => {
event.key === "Shift" ? paragrafo.innerHTML = 'Tecla Shift pressionada' : paragrafo.innerHTML = ""
}