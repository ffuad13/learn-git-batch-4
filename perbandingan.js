let umur = 30
let jumlah = "30"

// console.log(umur == jumlah)
// console.log(umur === jumlah)

// console.log(umur !== jumlah)

let satu = 1
let lima = 5
// console.log(satu > lima)
// console.log(satu < lima)

// console.log(5 > 5)

let sisiKiri = 5 > 1 //true
let sisiKanan = 1 < 2 //true
console.log("and", sisiKiri && sisiKanan)
console.log("OR",true || true)

console.log("AND salah satunya false", false && false)
console.log("OR, nila salah satunya false", false || false)

let inputUsername = "faizulggwp1"
let inputPassword = "Rahasiadong123"

let usernameDariDatabase = "faizulggwp"
let passwordDariDatabase = "Rahasiadong123"

let cekUsername = inputUsername === usernameDariDatabase
let cekPassword = inputPassword === passwordDariDatabase
console.log("cekUsername", !cekUsername)
console.log("cekPassword", cekPassword)
console.log("Berhasil login", !cekUsername && cekPassword)