const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined){
    return [];
  } else {
    return employees.find((element) => element.firstName === employeeName || element.lastName === employeeName)
  }
}
console.log(getEmployeeByName('Wishart'));
console.log(getEmployeeByName('Nigel'));
console.log(getEmployeeByName());
