import './style.css'

const dogBtn = document.querySelector('#dogBtn');
const catBtn = document.querySelector('#catBtn');
const surpriseBtn = document.querySelector('#surpriseBtn');
const getImg = document.querySelector('img');
const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY';

dogBtn.addEventListener('click', () => {
  fetch(DOG_API)
  .then((response) => response.json())
  .then(({ message }) => getImg.src = message)  
})

catBtn.addEventListener('click', () => {
  fetch(CAT_API) 
    .then((response) => response.json())
      .then((data) => getImg.src = data[0].url)
})

surpriseBtn.addEventListener('click', () => {
  Promise.any([fetch(CAT_API)
    .then((response) => response.json())
    .then((data) => getImg.src = data[0].url), fetch(DOG_API)
    .then((response) => response.json())
    .then(({ message }) => getImg.src = message)])
})