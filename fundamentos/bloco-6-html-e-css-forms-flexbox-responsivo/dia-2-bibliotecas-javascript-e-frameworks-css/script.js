const date = document.getElementById('input-data').DatePickerX.init();

function mostrarResultado() {
    const resultado = document.querySelector('.resultado');
    const inputs = document.querySelectorAll('input');
    for(let key = 0; key < inputs.length; key += 1) {
        const p = document.createElement('p');
        p.innerText = inputs[key].value;
        resultado.appendChild(p);
    }
}

function limpar() {
    const buttonClean = document.querySelector('.button-clean');
    const resultado = document.querySelector('.resultado');
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');
    buttonClean.addEventListener('click', () => {
        for(let key = 0; key < inputs.length; key += 1) {
            inputs[key].value = '';
        }
        textarea.value = '';
        resultado.remove();
    })
}
limpar();
function required(){
    const inputs = document.querySelectorAll('input');
    for(let key = 0; key < inputs.length; key += 1) {
        if(inputs[key].value.length <= 0){
            return alert('Preencha todos os campos');
        }
    }
    mostrarResultado();
    limpar();
}

function defaultButton(event) {
    event.preventDefault();
    required();
}

function form() {
    const buttonForm = document.getElementById('button-form');
    buttonForm.addEventListener('click',defaultButton);
}
form();
