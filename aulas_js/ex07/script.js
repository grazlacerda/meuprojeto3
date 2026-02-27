let age = parseInt(prompt("Digite sua idade: "))

if (age >= 18) {
    console.log(`Você pode dirigir... Sua idade é ${age}`);
 }else if (age >= 15 ) {
    console.log(`Pode se matricular na auto escola`);
} else {
    console.log( `Não pode dirigir, você tem ${age}`);
}