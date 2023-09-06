//Algoritimo: Calculadora

//Var
let num1
let num2
let operação = 0


num1=10
num2=2

operação=4


//Inicio

console.log(`Calculadora`)
console.log(`Insira o número: ${num1}`) //num1
console.log(`Escolha uma operação:\n\n1-Somar\n2-Subtração\n3-Multiplicação\n4-Divisão\n`)//operação
console.log(`Insira o número: ${num2}`) //num2

if(operação===1){

    function soma(num1,num2){
        return (num1+num2)
    }
    soma(num1,num2)
    console.log(`Números digitados ${num1},${num2}`)
    console.log(`Operação digitada: Somar`)
    console.log(`O resultado: ${soma(num1,num2)}`)

}else if(operação===2){

    function Subtração(num1,num2){
        return(num1-num2)
    }
    Subtração(num1,num2)
    console.log(`Números digitados ${num1},${num2}`)
    console.log(`Operação digitada: Subtração`)
    console.log(`O resultado: ${Subtração(num1,num2)}`)
    
}else if(operação===3){
    
    function Multiplicação(num1,num2){
        return(num1*num2)
    }
    Multiplicação(num1,num2)
    console.log(`Números digitados ${num1},${num2}`)
    console.log(`Operação digitada: Multiplicação`)
    console.log(`O resultado: ${Multiplicação(num1,num2)}`)
}else if(operação===4){
    
    function Divisão(num1,num2){
        if(num2=0){
            console.log(`Não é possivel dividir por 0`)
        }else{
            return(num1/num2)
        }

    }
    Divisão(num1,num2)
    console.log(`Números digitados ${num1},${num2}`)
    console.log(`Operação digitada: Divisão`)
    console.log(`O resultado: ${Divisão(num1,num2)}`)
    
}else{
    console(`Escolha umas das opeção acima`)
}