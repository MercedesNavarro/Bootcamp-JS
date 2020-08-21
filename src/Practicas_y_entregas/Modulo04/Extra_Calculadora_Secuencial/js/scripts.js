/* Creación de una calculadora secuencial:
Repite el ejercicio de la calculadora pero esta vez hagamos una calculadora secuencial. 
Esto es:
Solo es necesario un único campo numérico. Mantén los 4 botones de las 4 operaciones. 
Añade un botón de igual o resultado ( "=" ).
Una calculadora secuencial funciona del siguiente modo:
- El usuario introduce un primer número.
- Clicka una operación.
- A continuación introduce un segundo número.
- Clicka de nuevo otra operación.
- Y así sucesivamente... hasta que pulsa el botón de resultado.
Si te fijas, la clave de este algoritmo es ir acumulando el resultado parcial. 
Para ello, con cada click que el usuario hace en una operación, deberás:
Extraer el operando que hay en el input.
Actualizar el resultado parcial, que será aplicar la operación anterior guardada, usando como operandos el resultado parcial y el nuevo operando.
Almacenar la operación actual para la siguiente vez.
NOTA: Gran parte de las funciones que vimos en la calculadora básica podrían servirte aqui también. */

var result = 0;

var numberA = () => parseInt(document.getElementById("numberA").value);

var refreshInput = () => document.getElementById("numberA").value = "";
var autofocus = () => document.getElementById("numberA").focus();
var printResult = () => document.getElementById("result").innerHTML = result;

var operationTasks = () => {
    refreshInput();
    autofocus();
    printResult();
};

var operation = "";
var sum = () =>  {
    operation = "sum";
    operationTasks();
};
var subtraction = () => {
    operation = "subtraction";
    operationTasks();
};
var multiplication = () => {
    operation = "multiplication";
    operationTasks();
};
var division = () => {
    operation = "division";
    operationTasks();
};

var typeOperation = () => {
    switch (operation) {
        case "sum": 
            result += numberA();
        break;
        case "subtraction":
            result -= numberA();
        break;
        case "multiplication":
            result *= numberA();
        break;
        case "division":
            result /= numberA();
        break;
        default:
            result = numberA();
        break;
    }
};

var printTotal = () => {
    printResult();
    refreshInput();
    result = 0;
    operation = "";
};

document.getElementById("numberA").addEventListener("change", typeOperation);

document.getElementById("sumButton").addEventListener("click", sum);
document.getElementById("subtractionButton").addEventListener("click", subtraction);
document.getElementById("multiplicationButton").addEventListener("click", multiplication);
document.getElementById("divisionButton").addEventListener("click", division);

document.getElementById("totalButton").addEventListener("click", printTotal);