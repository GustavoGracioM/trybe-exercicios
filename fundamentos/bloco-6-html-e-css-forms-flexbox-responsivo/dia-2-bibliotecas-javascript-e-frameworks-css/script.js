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

function defaultButton(event) {
    event.preventDefault();
    mostrarResultado();
    limpar();
}

function form() {
    const buttonForm = document.getElementById('button-form');
    buttonForm.addEventListener('click',defaultButton);
}
form();

const validacao = new window.JustValidate('form');

new window.JustValidate('form', {
    rules: {
        text1: {
            required: true
        },
        text2: {
            required: true
        },
        text3: {
            required: true
        },
        text4: {
            required: true
        },
        text5: {
            required: true
        },
        text6: {
            required: true
        },
        text7: {
            required: true
        }
    }
    }
    );

