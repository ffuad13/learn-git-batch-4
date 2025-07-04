import {namaKarakter2} from "./variabel.js"

let globalVariabel = "Halo saya adalah variabel global"

function testScope() {
	let functionVariabel = "Halo saya adalah variabel dari fungsi testScope"
	let blablabka = "783682743"

	if (true) {
		var blockVariabel = "Halo saya adalah variabel dari blok kode if"
	}

	console.log(functionVariabel)
	// console.log(globalVariabel)
	console.log(blockVariabel)
	return functionVariabel
}

function testScope2() {
	let iniVariabelDariFungsiLain = testScope()
	console.log("tetetetetetesssss",iniVariabelDariFungsiLain)
	return iniVariabelDariFungsiLain
}
console.log(testScope2())

// testScope()

console.log(globalVariabel)
// var globalVariabel = "Halo saya adalah variabel global"
// console.log(funtionVariabel)
// console.log(blockVariabel)
console.log(namaKarakter2)

export {testScope}