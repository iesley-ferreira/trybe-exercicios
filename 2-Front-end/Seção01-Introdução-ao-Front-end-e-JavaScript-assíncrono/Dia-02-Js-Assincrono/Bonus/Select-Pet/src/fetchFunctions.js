const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY';

const catchDogUrl = () => {
  fetch(DOG_API)
    .then((response) => response.json())
    .then(({ message }) => message)   
}

const catchCatUrl = () => {
  fetch(CAT_API)
    .then((response) => response.json())
    .then((data) => data[0].url)
}

export default { catchDogImg, catchCatImg }