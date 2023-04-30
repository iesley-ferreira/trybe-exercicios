const verificaNumeros = (notas) => {
  for (let index = 0; index < notas.length; index += 1) {
    const nota = notas[index];
    if (isNaN(notas[index])) {
      throw new Error('Os valores inseridos devem ser números');
    } 
  }
}

const verificaRange = (notas) => {
  for (let index = 0; index < notas.length; index += 1) {
    const nota = notas[index];
    if (nota < 1 || nota > 10) {
      throw new Error('As notas deve ser valores numéricos entre 1 e 10')
    }
    
  }
}

const verificaMedia = (notas) => {

  try {
    verificaNumeros(notas);
    verificaRange(notas);
    
    let soma = 0;
    let media = 0;
    for(let index = 0; index < notas.length; index += 1) {
      soma += notas[index];
      media = soma / notas.length;
    }
    console.log(media);
    return media;
  } catch (erro) {
    console.log(erro.message);
  }

}

verificaMedia([8, 7, 8, 8]);


