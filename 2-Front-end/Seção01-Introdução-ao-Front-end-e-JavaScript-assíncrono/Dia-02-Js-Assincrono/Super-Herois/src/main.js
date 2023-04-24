import './style.css'
const GET_ALL = ('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
const btnEl = document.querySelector('button');
const imgEl = document.querySelector('img');
const pEl = document.querySelector('p');

const getlength = () => fetch(GET_ALL)
    .then((resp) => resp.json())
    .then((data) => data);
    
const data = await getlength();

const getRandomId = () => {
  const randomNumber = Math.round(Math.random() * data.length);
  return randomNumber;
}

btnEl.addEventListener('click', () => {
  const randId = getRandomId();
  const hero = data.find(({ id }) => id === randId);
  imgEl.src = hero.images.sm;
  pEl.innerText = hero.name;
})


