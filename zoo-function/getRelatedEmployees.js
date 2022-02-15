const data = require('../data/zoo_data');
const { employees } = data;

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(isManager('9e7d4524'));


function getRelatedEmployees(managerId) {
  
  if (isManager(managerId)) {
    return employees.map((element) => element.responsibleFor)
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));



