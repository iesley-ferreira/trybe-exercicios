 let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


 function addTurn(obj, key, valor) {
    obj[key] = valor;
}

addTurn(lesson2, 'turno', 'noite') ;
console.log(lesson2);

function keyList(obj) {
    console.log(Object.keys(obj));
}

keyList(lesson3);

function showLength(obj) {
    console.log(Object.keys(obj).length);
}

showLength(lesson2);

function listValues(obj) {
    console.log(Object.values(obj));
}

listValues(lesson1); 


 
let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3
});

console.log(allLessons);

function getNumbersOfStudents(obj) {
    let total = 0;
    let keys = Object.keys(obj);
    for (let index in keys) {
        total += obj[keys[index]].numeroEstudantes;
    }
    return total;
};

console.log(getNumbersOfStudents(allLessons));


function getValueByNumber(obj, number) {
    return Object.values(obj)[number];
}

console.log(getValueByNumber(lesson1, 2));


function verifyPair(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
  }
  
console.log(verifyPair(lesson2,'professor','Carlos'));

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false