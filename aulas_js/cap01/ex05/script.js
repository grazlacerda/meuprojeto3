// Homens - >= 65 e 15 anos de contribuição

// Mulheres - >= 62 e 15 anos de contribuição

let genero = prompt("Digite seu gênero ([M} para Maculino / [F] para Feminino):");

if (genero === "M") {
    //Logica para homens
    let idade = parseInt(prompt("Digite sua idade:"));
    let contribuicao = parseInt(prompt("Digite seus anos de contribuição"));
 if (idade >= 65 && contribuicao >= 15) {
    alert("Você pode se aposentar.");
} else {
    alert("Você não atente aos requisitos para aposentadoria.");
}
} else if (genero === "F") {
    //Logica para mulheres
    let idade = parseInt(prompt("Digite sua idade:"));
    let contribuicao = parseInt(prompt("Digite seis anos de contribuição"));
 if (idade >= 62 && contribuicao >= 15) {
    alert("Você pode se aposentar.");
} else {
    alert("Você não atente aos requisitos para aposentadoria.");
}
} else {
    alert("Gênero invávido.");
}