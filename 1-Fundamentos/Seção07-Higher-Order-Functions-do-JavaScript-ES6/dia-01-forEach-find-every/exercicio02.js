const numbers = [19, 21, 30, 3, 45, 22, 15];

function verificaNumeros(num) {
  return num.find((number) => number % 3 === 0 || number % 5 === 0);
}

console.log(verificaNumeros(numbers));
//
//-------------------------------------------------------------------------------------

const names = ['João', 'Irene', 'Fernando', 'Maria'];
function encontraNome(nam) {
  return nam.find((name) => name.length > 4);
}
console.log(encontraNome(names));
//
//-------------------------------------------------------------------------------------
const musicasss = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function encontraMusica(musics, identifica) {
  return musics.find((musica) => musica.id === identifica);
}
console.log(encontraMusica(musicasss, '31031685'));
