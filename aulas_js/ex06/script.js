const nota = prompt("Digite a nota do seu atendimento de zero a cinco")

switch (nota) {
    case "0":
        console.log("Atendimento péssimo");
        break;
    case "1":
        console.log(" ⭐ Atendimento ruim");
        break;
    case "2":
        console.log(" ⭐⭐ Atendimento regular");
        break;
    case "3":
        console.log(" ⭐⭐⭐ Atendimento bom");
        break;
    case "4":
        console.log(" ⭐⭐⭐⭐ Atendimento muito bom");
        break;
    case "5":
        console.log(" ⭐⭐⭐⭐⭐Atendimento excelente");
        break;
    default: 
        console.log ("Nota inválida");
}