let valorDeCusto = 1;
let valorDeVenda = 3;


if ( valorDeCusto >= 0 && valorDeVenda >= 0){
        let custoTotaldoPtoduto = valorDeCusto * 1.2;
        let lucroTotal = (valorDeVenda - custoTotaldoPtoduto) * 1000;
        console.log(lucroTotal);
    } else {
        console.log('Erro, os valores não podem ser negativos!')
    }


