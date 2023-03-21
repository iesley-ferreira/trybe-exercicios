/* let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  console.log(customer1);
  customer1.lastname = 'faria';
  console.log(customer1);
  
  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  console.log(customer2);
  customer2.lastname = 'silva';
  console.log(customer2); */

/*   -------------------------------------------------------------- */
/* 
  let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  let newKey = 'lastname';

  let lastname = 'Ferreira';

  customer[newKey] = lastname;
  console.log(customer); */

/*   --------------------------------------------------------------- */
/*     let customer = {
        firstName: 'Roberto',
        age: 22,
        job: 'Teacher',
    };
    function adicionaPropriedade (objeto, key, valor){
        objeto[key] = valor;
        return objeto
    };

   console.log(adicionaPropriedade (customer, 'sexo', 'M')); 

    */

/*   --------------------------------------------------------------- */


student = {};

function addEstudante(objeto, key, valor){
    objeto[key] = valor;
};


addEstudante(student, 'Nome', 'Iesley de Matos Ferreira');
addEstudante(student, 'e-mail', 'iesley_ferreira@hotmail.com');
addEstudante(student, 'Idade', '27');
addEstudante(student, 'contato', '53 984097585');

console.log(student);

