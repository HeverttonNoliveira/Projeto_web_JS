//Obejeto
const calculadora = {
	num1: 10.5,
	num2: 20.5,

	soma: (v1, v2) => {
		this.num1 = v1;
		this.num2 = v2;
		return this.num1 + this.num2;
	},
	sub: (v1, v2) => {
		this.num1 = v1;
		this.num2 = v2;
		return this.num1 - this.num2;
	},
	div: (v1, v2) => {
		this.num1 = v1;
		this.num2 = v2;

		if (num2 === 0) {
			return false;
		} else {
			return this.num1 / this.num2;
		}
	},
	mult: (v1, v2) => {
		this.num1 = v1;
		this.num2 = v2;
		return this.num1 * this.num2;
	},
};

//Calculadora
let v1, v2;
let op,operacao,rep = 0;

v1 = 10;
v2 = 10;
operacao = 1;

console.log("Calculadora");
console.log("Insira dos números e escolha a operação desejada.");
console.log("Operação: \n\n1-Soma \n2-Subtração \n3-Multiplicação \n4-Divisão\n");

switch (operacao) {
	case 1:
		rep = calculadora.soma(v1, v2);
		op = "soma"
		break;
	case 2:
		rep = calculadora.sub(v1, v2);
		op = "subtração"
		break;
	case 3:
		rep = calculadora.mult(v1, v2);
		op = "multiplicação"
		break;
	case 4:
		rep = calculadora.div(v1, v2);
		op = 'divisão'
}

console.log(`Números digitados ${v1},${v2}\n Operação:${op} \nO resultado: ${rep}`);

function somavalor(){
	let numm1 = document.getElementById("n1").value;
	let numm2 = document.getElementById("n2").value;
	let soma1 = numm1 + numm2
	alert(soma1);
}

