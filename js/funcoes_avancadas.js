//funcoes_avancadas
function escrevernome(nome){
    return console.log(`Olá ${nome}`)
}

escrevernome("HENO")

//function com expressão (função anonima)

const area  = function(base,altura){
    return base * altura;
}

let x = area(20,40)
console.log(`Base vezes Altura ${x}`)

const pi = 3.14161828141926;
console.log(`O pi vezes a area é: \n${x*pi}`)


//arrow function
const myFunction = () => {
    console.log(`Olá word !!!`)
}
myFunction()

const myword = (a) => {
    return a*a
}
console.log(`${myword(7 )}`)

//Funções predefinidas
let seno = Math.sin(80);
let quad = Math.sqrt(4)
let aleatorio = Math.random()*10;

console.log(`${aleatorio}`)