const data = require('../data/zoo_data');

// retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor.
const obj = {};
const encontrarNome = data.species.forEach(function (element) {
    return obj[element.name] = element.residents.length
});
console.log(obj);
// { lions: 4,
//     tigers: 2,
//     bears: 3,
//     penguins: 4,
//     otters: 4,
//     frogs: 2,
//     snakes: 2,
//     elephants: 4,
//     giraffes: 6 }

// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
const nome = data.species.filter(function (element) {
    return element.name === 'lions'
});
console.log(nome);
const residente = nome.map(function (element) {
    return element.residents
})
console.log(residente);



// function countAnimals(animal) {




// };

// //   const animalCount = data.species
// //     .find((specie) => specie.name
// //       .includes(animal.specie));
// //   // if (!animal.sex) {
// //   //   return animalCount.residents.length;
// //   // }
// //   return animalCount.residents.filter((resident) => resident.sex === animal.sex).length;

// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }))

