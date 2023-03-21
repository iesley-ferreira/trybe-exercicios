// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clicou(event) {
    event.preventDefault();
}

HREF_LINK.addEventListener('click', clicou)

function checkClick(event) {
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', checkClick)


INPUT_TEXT.addEventListener('keypress', (event) => {
    let charcter = event.key;
    if (charcter !== 'a') {
        event.preventDefault();
    }
});
// MÈTODO DIFERENTE DE FAZER A MESMA COISA
/* 
INPUT_TEXT.addEventListener('keypress', (e) => {
    if (!checkChar(e)) {
        e.preventDefault();
    }
});

function checkChar(e) {

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a]';

    if (char.match(pattern)) {

        return true;
    }
}; */
