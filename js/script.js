// console.log("Teste")
// console.log('Teste')
// console.log(`Teste ${variavel}`) recomendado


/*
    Tipos de Variáveis
*/
    //Let
/*
    As variáveis de let podem ser atualizadas, 
    mas não podem ser declaradas novamente.

    Exmplo:
*/

let nome = "Hevertton";
console.log("nome");

nome = 10;
console.log(nome);

//const

/*
As variáveis de const não podem ser atualizadas nem declaradas novamente
*/

const primeiroNome = "Hevertton";
const segundoNome = "Nunes";

console.log(
    `Meu primeiro nome é ${primeiroNome} e o sobre nome ${segundoNome}`
)

let a = 3
let x = (100+50)*a

console.log(`O valor da expressão é ${x}`)


// Declarando variável com lat e const
let email, telefone, cpf;

//Inicio

email = "googlemail@gmail.com";
telefone = 98769899;
cpf = "555.555.555-77";

console.log(`Seu e-mail é: ${email}`);
console.log(`Seu telefone é: ${telefone}`);
console.log(`Seu cpf é: ${cpf}`);



const pi = 1.1416152325;
console.log(`Valor de ${pi}`);

const name = "Senac";
console.log(`Meu nome é: ${name}`);



function corpo() {

const primeiroNome = "Hevertton";
const segundoNome = "Nunes";

console.log(
    `Meu primeiro nome é ${primeiroNome} e o sobre nome ${segundoNome}`
);
}
corpo();


//Operadores

    let num1, num2, resp=0;
    num1=10
    num2=20

    resp = num1 + num2
    console.log(`A soma: ${resp}`)

    resp = num1 - num2
    console.log(`A soma: ${resp}`)

    resp = num1 * num2
    console.log(`A soma: ${resp}`)

    resp = num1 / num2
    console.log(`A soma: ${resp}`)


/*
    Operadores
*/


//Operadores de incrementos e decremento

//incremento o z
let z = 5
z++ // 5+1
let y=z
console.log(`Valor de y ${y}`)
//resposta da expresssão 6

//decremento o w
let w=5
w-- // 5-1
let n= w
console.log(`Valor de w ${n}`)
//resposta da expresssão 4


//exponenciação

let exp = 5
let op = exp**2 //5^2
console.log(`valro de exp ${op}`)
// resposta da expressão 25 


//usando a função math(classe matématica)
let mat = Math.pow(5,2)
console.log(`Uso da expressão ${mat}`)
// resposta da expressão 25 

//Operadores de Atribuição js

let r = 10

let s = 10+r // 10+10
console.log(`valor de s ${s}`)
//resposta 20

let m = 10-r // 10-10
console.log(`Valor de m ${m}`)
//resposta 0

//opereadores relacionais retorna true(Verdadeiro)/false(Falso)
let b = true
let q = false

//operador "and" só vai ser verdadeiro se os dois lados forem verdadeiros
let v=b && q
console.log(`Valor de v é: ${v}`)

// operador "ou" vai ser verdadeiro quando um dos lados ou os dois forem verdadeiro
let o=b || q
console.log(`Valor de v é: ${o}`)

//variáveis do tipo objeto

const pessoa ={
    name1:"Senac",
    lastName1:"Largo Treze"
}

console.log(`O nome da pessoa é ${pessoa.name1} e seu sobrenome é ${pessoa.lastName1}`)

//Variáveis do tipo array (vetores)
const car = [
    "Bmw",  // indice 0
    "Ford", // indice 1
    "Bugatti" // indice 2
]
console.log(`O carro escolhido ${car[2]}`) // resposta Bugatti