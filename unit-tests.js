// função averag
const average = (number) => {
    const media = media(number);
    if (number.length === 0 || typeof number[index] !== 'number') {
        return undefined;
    } else {
        let acc = 0;
        for (let i = 0; i < number.length; i += 1){
            if (typeof number[i] !== 'number') {
                return undefined;
            }
            acc += number[i];
        }
        
    }
    return acc / number.length;
}
const arr = [1,2,3,4];
console.log(average(arr));

// função vqv
const vqv = (name, age) => {
    if (name.length === 0 || age.length === 0){
        return undefined;
    } else {
        return `Oi, meu nome é ${name}!
        Tenho ${age} anos,
        trabalho na Trybe e mando muito em programação!
        #VQV!`;
    }
}
console.log(vqv('juliana', '32'));

const frase = () => {
    return 'Eita pessoa boa!';
};

// função createStudent
 const createStudent = (nome) => {
     const objeto = {
         name: nome,
         feedback: frase()
     }
     return objeto;
 }

// função calculator e arrayGenerator
const calculator = (num1, num2) => {
    const objeto = {
        sum: num1 + num2,
        mult: num1 * num2,
        div: Math.floor(num1 / num2),
        sub: num2 - num1
    };
    return objeto;
}

console.log(calculator(5, 10));