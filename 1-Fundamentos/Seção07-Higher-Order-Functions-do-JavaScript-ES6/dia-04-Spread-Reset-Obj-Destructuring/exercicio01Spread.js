const specialFruit = ['mamão', 'melancia', 'morango', 'banana'];

const additionalItens = ['leite condensado', 'nutella', 'paçoca'];

const fruitSalad = (fruit, additional) => {
  const fruitSaladaWithAdditional = [...fruit, ...additional]
  return fruitSaladaWithAdditional
};

console.log(fruitSalad(specialFruit, additionalItens));