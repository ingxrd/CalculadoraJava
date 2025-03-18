document.getElementById("calculate").addEventListener("click", function() {
        //Essa parte cria constantes para salvar os inputs do usuário.

        const numero1 = document.getElementById("number1").value;
        const numero2 = document.getElementById("number2").value;
        const operator = document.getElementById("operator").value;

        // Agora que tenho os elementos do DOM na minha funcao, consigo criar, usando switch ou if-else, enfim, 
        // a forma de calcular. Como estou falando de varios casos, vou optar pelo uso do SWITCH

        let result;

        switch(operator){
            case '+':  
                result = numero1 + numero2;
                    break;
            case '-':
                result = numero1 - numero2;
                    break;
            case '*':
                result = numero1 * numero2;
                    break;
            case '/': 
                result = numero2 !==0 ? numero1/numero2 : "Erro: divisao por zero";
                result = numero1 / numero2;
                    break; 
            
            default:
                result = "Operaçao inválida"
        }
    
        document.getElementById('result').textContent = result;
    }

)




/*
    Existem 5 elementos importantes a serem manipulados no DOM:
        1. Number1 => primeiro numero a ser inserido.
        2. Number2 => segundo numero a ser inserido.
        3. Operator => operador matemático
        4. Result => resultado.
        5. Calculate => calcula 

        O principal elemento é o calculate. Essa funcao receberá os numeros e operadores, bem como o botao de calcular.
*/

