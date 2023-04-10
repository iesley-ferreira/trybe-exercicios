// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Meia'];
console.log(newItems);
console.log(items);
//
// ========================================================================================
//
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);
//
// ========================================================================================
//
const product = {
  id: 1,
  name: 'Camiseta',
};
const productPrice = {
  price: 23
};
const whitPrice = {...product, ...productPrice}
console.log(whitPrice);
//
// ========================================================================================
//
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
const highest = Math.max(...randomNumbers)
console.log(highest);
//
// ========================================================================================
//