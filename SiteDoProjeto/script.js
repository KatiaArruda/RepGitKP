function somar(){
    let I = window.document.getElementById('I')
    let F = window.document.querySelector('input#Fim')
    let resposta = window.document.getElementById('resposta')
    let I = Number(I.value)
    let F = Number(F.value)
    let Soma = I + F
    resposta.innerHTML = 'A soma entre Início'

}