
const techList = (arr, name) => {
  if(arr.length === 0) return 'Vazio!';

  const arrOrd = arr.sort();
  const objList = [];

  for (let index = 0; index < arrOrd.length; index += 1) {
    objList.push({
      tech: arrOrd[index],
       name: name,
    });
  }
  return objList;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')
module.exports = techList;