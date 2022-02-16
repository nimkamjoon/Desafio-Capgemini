// Débora se inscreveu em uma rede social para se manter em contato com seus amigos. 
// A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. 
// O site considera uma senha forte quando ela satisfaz os seguintes critérios:

// Possui no mínimo 6 caracteres.
// Contém no mínimo 1 digito.
// Contém no mínimo 1 letra em minúsculo.
// Contém no mínimo 1 letra em maiúsculo.
// Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+

// Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. 
// Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

let subButton = document.getElementById("button");
subButton.addEventListener('click', validarSenha, false);

function validarSenha() {
    let entrada = document.getElementById("passwordBox").value;
    let entradaArray = entrada.split('');

    // Valida numero de caracteres

    if (entradaArray.length >= 6) {
        document.getElementById('a').style.color = 'rgb(51, 192, 74)';
    }

    else if (entradaArray.length == 5) {
        alert("Senha inválida! Ainda falta 1 caractere :(");
        document.getElementById('a').style.color = 'rgb(51, 192, 74)';
    }

    else {
        alert("Senha inválida! Ainda faltam " + (6 - entradaArray.length) + " caracteres :(");
        document.getElementById('a').style.color = 'rgb(51, 192, 74)';
    }

    // Valida numero de digitos

    let numeros = ["0","1","2","3","4","5","6","7","8","9"]
    let temDigito = numeros.some(r=> entradaArray.indexOf(r) > 0);

    if (temDigito == true) {
        document.getElementById('b').style.color = 'rgb(51, 192, 74)';
    }

    else {
        document.getElementById('b').style.color = 'rgb(219, 102, 102';
    }

    // Valida numero de minusculas

    let minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let temMin = minusculas.some(r=> entradaArray.indexOf(r) > 0);

    if (temMin == true) {
        document.getElementById('c').style.color = 'rgb(51, 192, 74)';
    }

    else {
        document.getElementById('c').style.color = 'rgb(219, 102, 102';
    }

    // Valida numero de maiusculas

    let maiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let temMai = maiusculas.some(r=> entradaArray.indexOf(r) > 0);

    if (temMai == true) {
        document.getElementById('d').style.color = 'rgb(51, 192, 74)';
    }

    else {
        document.getElementById('d').style.color = 'rgb(219, 102, 102';
    }

    // Valida caracteres especiais

    let especiais = ["!", "@", "#", "$", "%","^", "&", "*", "(", ")", "-", "+"]
    let temEsp = especiais.some(r=> entradaArray.indexOf(r) > 0);

    if (temEsp == true) {
        document.getElementById('e').style.color = 'rgb(51, 192, 74)';
    }

    else {
        document.getElementById('e').style.color = 'rgb(219, 102, 102';
    }

};

