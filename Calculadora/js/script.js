let valorEnPantalla = "";
let operando1 = null;
let operando2 = null;
let operador = ""; 

function resetearCalculadora() {
        resetearVariables();
        actualizarDisplay();
}

function resetearVariables() {
        valorEnPantalla = "";
        operando1 = "";
        operando2 = "";
        operador = "";
}

function actualizarDisplay() {
        document.getElementById("display").value = valorEnPantalla;
}

function agregarNumero(symbol) {
        valorEnPantalla = valorEnPantalla + symbol;
        actualizarDisplay();
}

function operadorPulsado(symbol) {
    operando1 = parseInt(valorEnPantalla 10);
    operador = symbol;
    valorEnPantalla = "";
}

function calcular() {
    if (operador != "") {
        operando2 = parseInt(valorEnPantalla, 10);
            switch (operador) {
                case "+": valorEnPantalla = (operando1 + operando2);
                    break;
                case "-": valorEnPantalla = (operando1 - operando2);
                    break;
                case "*": valorEnPantalla = (operando1 * operando2);
                    break;
                case "/": valorEnPantalla = (operando1 / operando2);
                        if (operando2 == 0) {
                            valorEnPantalla = "Es imposible dividir entre 0";
                        }
                    break;                                     
            }
        actualizarDisplay();
        resetearVariables();
    }
}
