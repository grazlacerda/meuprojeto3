let user = prompt("Digite seu nome:");
let passwors = prompt("Digite sua senha:");

alert(`Usuário ${user} \nSenha: ${password}`);

if (user === "rodolfo" && password === "rodolfo123") {
    alert("Login bem-sucedido! Bem vindo ao Sistema");
} else {
    alert("Login falhou!");
}