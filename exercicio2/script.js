const input = document.getElementById('password')

function escondeSenha (event) {
    event.preventDefault()
    input.setAttribute('type', 'text')
}

const form = document.getElementsByTagName('form')
form[0].setAttribute('class', 'dark')

