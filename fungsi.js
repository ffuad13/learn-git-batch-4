function sayHello(namaDepan, namaBelakang, asal) {
	let a = namaDepan
	let b = namaBelakang
	let c = asal

	let say = 'Halo, nama saya adalah ' + a + " " + b + ". Saya berasal dari " + c + "."

	return say
}

let anisa = sayHello("Anisa", "Fitriyani", "Bandung")
let faizul = sayHello("Faizul", "Fuadi", "Sumbawa")
let yobbi = sayHello("Yobbi", "Rutdiyanto", "Depok")

// console.log(anisa)
// console.log(faizul)
// console.log(yobbi)

function tambah(a, b) {
	let hasil = a + b
	return hasil
}

let test1 = tambah(10, 20)
console.log(test1)