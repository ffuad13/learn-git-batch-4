// function fun1() {
//     console.log("Hello, World!");
// }

// function fun2(action) { //ini higher order function
//     action();
//     action();
// }

// fun2(fun1); //pemanggilan hof

const numbers = [1,2,3,4,5]
//map hof
// const doubled = numbers.map(x => x * 2)
// console.log(doubled)

//filter hof
const evenNumbers = numbers.filter(x => x % 2 === 0)
// console.log(evenNumbers)

const sum = numbers.reduce((acc, curr) => acc + curr, 0)
// console.log(sum)

// ========================
//fungsi dasar
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, value1, value2) => operator(value1, value2)

console.log(operate(add, 5,5))
console.log(operate(substract, 5,5))
console.log(operate(multiply, 5,5))
console.log(operate(divide, 5,5))

// let abc = "hahaha"
// function printThis(str) {
// 	let xx = abc

// }

//Factorial dengan rekursif

function factorial(n) {
	if (n <= 1) return 1

	return n * factorial(n-1)
}
console.log(factorial(10))