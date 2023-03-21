let clientsTrybeBank =['Ada', 'John', 'Gus'];


function addTrybeBank(newTryber) {
    if (typeof newTryber === 'string'){
        clientsTrybeBank.push(newTryber);
        return `Cliente ${newTryber} adicionado com sucesso.`;
    }else{
        return 'O parâmetro passado deve ser do tipo "string" ';
    }
}

console.log(addTrybeBank('Iesley'));