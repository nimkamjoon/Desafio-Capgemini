// Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. 
// A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

function escada(n) {
    numberArray = [];
    let number = n;

    while (n > 0) {
        numberArray.push(n);
        n --;
    };

    for (let index = 0; index < numberArray.length; index ++) {

        
        let line = [];

        line.push(" ".repeat(numberArray[index]));
        
        line.push("*".repeat(number + 1 - numberArray[index]));

        console.log(line.join(""));
    }

    
}

escada(6);


