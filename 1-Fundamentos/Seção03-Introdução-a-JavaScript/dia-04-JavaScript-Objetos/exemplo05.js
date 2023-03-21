let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

/*   console.log(`Bem-vinda, ${info.personagem}`); */

function inserePropriedade(objeto, key, valor) { //mostra 
    objeto[key] = valor;
};

inserePropriedade(info, 'recorrente', 'sim')

/* console.log(info); */

/* for (let key in info) {
    console.log(key);
} */

/* for (let key in info) {
    console.log(info[key]);
} */


let info2 = {};

inserePropriedade(info2, 'personagem', 'Tio Patinhas');
inserePropriedade(info2, 'origem', 'Christmas on Bear Mountain, Dell1s Four Color Comics #178');
inserePropriedade(info2, 'nota', 'O último MacPatinhas');
inserePropriedade(info2, 'recorrente', 'sim');

/* console.log(info2);
 */

 for (let key in info){
    if (
        key === 'recorrente' &&
        info[key] === 'sim' &&
        info2[key] === 'sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
 }
 console.log(Object.values(info));

