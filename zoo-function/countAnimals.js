const data = require('../data/zoo_data');


// const obj = {};
// function countAnimals(animal) {
//   // if (animal === undefined) {
//   //   species.forEach((element) => {
//   //     obj[element.name] = element.residents.length;
//   //   });
//   //   return obj;
//   // }
//   const animalCount = data.species
//     .find((specie) => specie.name
//       .includes(animal.specie));
//   // if (!animal.sex) {
//   //   return animalCount.residents.length;
//   // }
//   return animalCount.residents.filter((resident) => resident.sex === animal.sex).length;
// }
// console.log(countAnimals('lions'));

// const nomeAnimal = data.species.filter((element) => element.popularity === 4)
// console.log(nomeAnimal);
function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species
    .find((element) => element.name === animal).residents
    .every((element) => element.age >= age)
}
console.log(getAnimalsOlderThan('penguins', 1));

