const name = "Carlos";
const sex = "Masculino";
const weight = 84;
const height = 1.88;

const imc = weight / (height * height);

if (imc >= 30) {
    console.log(`Carlos está acima do peso. Seu imc atual é: ${imc.toFixed(2)}`)
} else if (imc < 29.9) {
    console.log(`Carlos näo esta acima do peso. Seu imc atual é: ${imc.toFixed(2)}`)
}