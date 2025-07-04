let inputUsername = "faizulggwp!"
let inputPassword = "Rahasiadong123!"

let usernameDariDatabase = "faizulggwp"
let passwordDariDatabase = "Rahasiadong123"

let cekUsername = inputUsername === usernameDariDatabase
let cekPassword = inputPassword === passwordDariDatabase

// if (cekUsername && cekPassword) {
// 	console.log("kamu berhasil login")
// } else if (cekUsername || cekPassword) {
// 	console.log("Salah satu input tidak benar, login gagal")
// } else {
// 	console.log("login gagal")
// }

switch (true) {
  case (cekUsername && cekPassword):
    console.log("kamu berhasil login");
    break;
  case (cekUsername || cekPassword):
    console.log("Salah satu input tidak benar, login gagal");
    break;
  default:
    console.log("login gagal");
    break;
}

const currentDay = new Date().getDay();
console.log("ini current day", currentDay)
let day;

if (currentDay === 1) {
  day = "Monday";
} else if (currentDay === 2) {
  day = "Tuesday";
} else if (currentDay === 3) {
  day = "Wednesday";
} else if (currentDay === 4) {
  day = "Thursday";
} else if (currentDay === 5) {
  day = "Friday";
} else if (currentDay === 6) {
  day = "Saturday";
} else {
	day = "Sunday";
}

console.log(day, currentDay)

if (true) console.log("Faizul")
