const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentNode;
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
const primeiroFilho = pai.firstElementChild;
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
const texto = elementoOndeVoceEsta.nextSibling;
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
const filho3 = pai.lastChild.previousElementSibling;

pai.style.color = 'red'

primeiroFilhoDoFilho.innerText = 'PrimeiroFilhoDoFilho';

