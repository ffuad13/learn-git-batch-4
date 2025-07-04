let matriks = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
]

for (let i = 0; i < matriks.length; i++) {
	// console.log(matriks[i])
	for (let j = 0; j < matriks[i].length; j++) {
		matriks[i][j] *= 2
	}
}
console.log(matriks)
// console.log(matriks[0][2])

let bintang = 10
for (let i = 1; i <= bintang; i++) {
	let hasil = ""

	for (let j = 1; j <= i; j++) {
		// hasil = hasil + "*"
		hasil += "*"
	}
	console.log(hasil)
}