//Laço de repetição while


let numeroSecreto = 8;
let numeroAleatorio = 0;
let contador = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    contador++;
}

console.log(`Adivinhou em ${contador} tentativas!`);