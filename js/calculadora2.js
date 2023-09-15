//Variáveis
let v1, v2;
let operacao,
	rep ;

//Objeto
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

function resp() {
	v1 = +document.getElementById("num1").value;
	v2 = +document.getElementById("num2").value;

	operacao = +document.getElementById("ope").value;
	// console.log(v1);
	// console.log(v2);
	// console.log(operacao);

	switch (operacao) {
		case 1:
			rep = calculadora.soma(v1, v2);
			break;
		case 2:
			rep = calculadora.sub(v1, v2);
			break;
		case 3:
			rep = calculadora.mult(v1, v2);
			break;
		case 4:
			rep = calculadora.div(v1, v2);
			break;
	}
	document.getElementById("resultado").innerHTML = rep;
	console.log(rep);
}


