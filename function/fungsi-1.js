// function sayHello(name = "Person", age = 0) {
// 	// console.log("Hello " + name + ".")
// 	console.log(`Hello ${name}. Your age is ${age}. Bye bye ${name}.`) //template literal
// }
// const baseUrl = "https://faizul.com"
// let apiUrl = `${baseUrl}/api/`
// console.log(apiUrl)

// sayHello("Faizul", 31)

//fungsi hitung luas
// function hitungLuas(panjang, lebar) {
// 	return panjang * lebar
// }

// let hasil = hitungLuas(10, 3)
// console.log('hasil', hasil)

//anonim function
// let hitungLuas = function (panjang, lebar) {
// 	return panjang * lebar
// }

//arrow function
let hitungluas2 = (panjang, lebar) => panjang * lebar;
console.log(hitungluas2(20, 50))

//arrow function 1 argument
let sayHai = name => `Hai ${name}, selamat datang.`
console.log(sayHai('Amar'))


let panggilTimeout = function () {
	console.log("Timeout bro!!")
}
setTimeout(panggilTimeout, 2000)