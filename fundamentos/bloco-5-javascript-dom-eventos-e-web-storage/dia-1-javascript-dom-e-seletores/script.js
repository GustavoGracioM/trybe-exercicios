//      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
// Crie uma função que mude a cor do quadrado vermelho para branco.
// Crie uma função que corrija o texto da tag <h1>.
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
document.getElementsByTagName('p')[0].innerText = 'Trabalhando em algima empresa muito legal e conseguindo ajudar minha familia e amigos';
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';
let conteudoP = document.getElementsByTagName('p');
for (let key = 0; key < conteudoP.length; key += 1) {
    document.getElementsByTagName('p')[0].style.textTransform = 'uppercase';
    console.log(document.getElementsByTagName('p')[key]);
}



