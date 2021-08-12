let cont;
let button = document.getElementById('darkmode');
let body = document.body;
button.addEventListener('click', color);

function color() {
    if (cont === 0) {
        body.className = 'darkModeActive';
        cont = 1;
    }else {
        body.className = 'darkModeDisable';
        cont = 0;
    }
    
}
