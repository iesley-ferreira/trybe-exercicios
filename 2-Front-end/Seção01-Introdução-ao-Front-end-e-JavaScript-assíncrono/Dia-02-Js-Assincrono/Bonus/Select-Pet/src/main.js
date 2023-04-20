import { catchDogImg, catchCatImg } from './fetchFunctions'
import './style.css'

const dogBtn = document.querySelector('#dogBtn');
const catBtn = document.querySelector('#catBtn');
const surpriseBtn = document.querySelector('#surpriseBtn');
const getImg = document.querySelector('img');

  dogBtn.addEventListener('click', () => {
  catchDogImg()
  .then((resp) => resp)
  })


catBtn.addEventListener('click', () => {
  catchCatImg()
    .then((resp) => resp)
})

surpriseBtn.addEventListener('click', () => {

})