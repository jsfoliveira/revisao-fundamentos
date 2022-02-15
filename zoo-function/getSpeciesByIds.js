const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
    const { species } = data;
    if (ids === undefined){
        return [];
    } else {
        return species.filter((elemento) => elemento.id === ids);
    }
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds());



