


const form = document.querySelector('.formulario-fale-conosco')
const mascara = document.querySelector('.mascara-formulario')

function cliqueinobotao () {
    form.style.left = '50%'
    form.style.transform = 'translatex(-50%)'
    mascara.style.visibility = "visible"
}

const sair = document.querySelector('.formulario-fale-conosco')
const mascarasair = document.querySelector('.mascara-formulario')

function cliqueinamascara () {
    sair.style.left = '-320px'
    mascarasair.style.visibility = 'hidden'

}


function faleconosco () {
    form.style.left = '50%'
    form.style.transform = 'translatex(-50%)'
    mascara.style.visibility = "visible"
}