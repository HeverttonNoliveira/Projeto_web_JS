// Métodos e objrtos

const pessoa = {
	primeiroNome: Kassandra,
	sobreNome: Oliveira,
	codigo: 9157,

	fullname: function () {
		return this.primeiroNome + " " + this.sobreNome;
	},
};

let pnome = (pessoa.primeiroNome = "Hevertton");
let snome = (pessoa.sobreNome = "Nunes");
console.log(`O seu nome completo é ${pessoa.fullname(pnome, snome)}`);

// const calculadora = {
// 	num1: 10.5,
// 	num2: 20.5,

// 	soma: (num1,num2) => {

//     },
// };
