// EXERCÍCIO 1
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];
// sem map
const nomes = [];
for (let i = 0; i < persons.length; i += 1) {
  nomes.push(`${persons[i].firstName} ${persons[i].lastName}`);
}
console.log(nomes);

// com map
const nomeCompleto = persons.map((element) => `${element.firstName} ${element.lastName}`);
console.log(nomeCompleto);

// ECERCÍCIO 2
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

const estudanteFiltrar = estudantes.filter((element) => {
  return element.turno === 'Manhã';
});
console.log(estudanteFiltrar);
const estudanteMap = estudanteFiltrar.map((estudante) => estudante.nome);
console.log(estudanteMap);

// EXERCÍCIO 3
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const divCincoFilter = numbers.filter((element) => element % 5 === 0);
console.log(divCincoFilter); // [50,75,100].  busca um array de todos os elementos.

const divCincoFind = numbers.find((element) => element % 5 === 0);
console.log(divCincoFind); // 50. o find busca o primeiro elemento da condição

// EXERCÍCIO 4
const numbers1 = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = () => {
  return numbers1.find((element) => element % 3 === 0 && element % 5 === 0)};
console.log(findDivisibleBy3And5());

// EXERCÍCIO 5
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => {
  return names.find((nome) => nome.length >= 5)
};
console.log(findNameWithFiveLetters());

// EXERCÍCIO 6
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
function findMusic(id) {
  return musicas.find((musica) => musica.id === id)
}
console.log(findMusic('31031685'));

// EXERCÍCIO 7
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((element) => element[0] === letter)
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// EXERCÍCIO 8: pegar só os aprovados
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => {
  return Object.values(studentGrades).every((element) => element === 'Aprovado');
};

console.log(verifyGrades(grades));

// EXERCÍCIO 9
const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna']
const hasName = (arr, name) => {
  return arr.some((element) => element === name);
};
console.log(hasName(names1, 'Ana'));

// EXERCÍCIO 10
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => element.age >= minimumAge)
}
console.log(verifyAges(people, 18));

// EXERCÍCIO 11
const pessoas = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const novoArray = pessoas.map((element) => element.age);
const ordenar = novoArray.sort();

console.log(novoArray);
console.log(ordenar);

// EXERCÍCIO 12: Ordem descrecente das idades
const people1 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people1.sort((personA, personB) => personB.age - personA.age);
console.log(people1);

