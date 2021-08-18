function verificarData() {
    const data = document.getElementById('input-data');
    const teste = /^\d\d\/\d\d\/\d\d\d\d$/;
    if(!teste.test(data.value)){
        alert('Formato incorreto');
    }else{
        const dia = parseInt(data.value[0] + data.value[1]);
        const mes = parseInt(data.value[3] + data.value[4])
        const ano = parseInt(data.value[6] + data.value[7] + data.value[8] + data.value[9]);
        if(dia < 0 || dia > 31) {
            alert('Dia invalido');
        }
        if(mes < 0 || mes > 12) {
            alert('Mes Invalido');
        }
        if(ano < 0){
            alert ('Ano invalido');
        }
    }
}

function mostrarResultado() {
    const resultado = document.querySelector('.resultado');
    const inputs = document.querySelectorAll('input');
    for(let key = 0; key < inputs.length; key += 1) {
        const p = document.createElement('p');
        p.innerText = inputs[key].value;
        resultado.appendChild(p);
    }
}

function required(){
    const inputs = document.querySelectorAll('input');
    for(let key = 0; key < inputs.length; key += 1) {
        if(inputs[key].value.length <= 0){
            return alert('Preencha todos os campos');
        }
    }
    verificarData();
    mostrarResultado();
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
