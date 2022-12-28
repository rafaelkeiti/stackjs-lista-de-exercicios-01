const name = "Carlos";
const sex = "M";
const age = 48;
const contribution = 23;
let aux = age + contribution;

if (sex === "M") {
    if (aux >= 35) {
        console.log(`${name}, você pode se aposentar! M`)
    } else {
        console.log(`${name}, você näo pode se aposentar! M`)
    }
} else if (sex === "F") {
    if (aux >= 30) {
        console.log(`${name}, você pode se aposentar! F`)
    } else {
        console.log(`${name}, você näo pode se aposentar! F`)
    }
} else {
    console.log('Opçäo inválida.')
}