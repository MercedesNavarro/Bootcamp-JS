/* Creación de una calculadora sencilla:
- 4 funciones para cada operación a implementar 
- Añadir dos inputs en el HTML y 4 botones para poner la calculadora en el DOM
Opcional: si alguno de los operadores es vacío, mostrar como resultado "Error" */

var numberA = () => parseInt(document.getElementById("numberA").value);
var numberB = () => parseInt(document.getElementById("numberB").value);

var result = () => document.getElementById("result");

var error = () => {
    result().innerHTML = "ERROR";
    result().classList.add("error");
};

var errorRefresh = () => result().classList.remove("error");

var numberNaN = () => isNaN(numberA()) || isNaN(numberB());

var sum = () => {

    if(numberNaN()) {
        error();
    } else {    
        result().innerHTML = numberA() + numberB();
        errorRefresh();
    }

};

var subtraction = () => {

    if(numberNaN()) {
        error();
    } else {    
        result().innerHTML = numberA() - numberB();
        errorRefresh();
    }

};

var multiplication = () => {

    if(numberNaN()) {
        error();
    } else {    
        result().innerHTML = numberA() * numberB();
        errorRefresh();
    }

};

var division = () => {

    if(numberNaN()) {
        error();
    } else {    
        result().innerHTML = numberA() / numberB();
        errorRefresh();
    }

};

var refresh = () => {
    result().innerHTML = 0;
    document.getElementById("numberA").value = "";
    document.getElementById("numberB").value = "";
    errorRefresh();
};


document.getElementById("sumButton").addEventListener("click", sum);
document.getElementById("subtractionButton").addEventListener("click", subtraction);
document.getElementById("multiplicationButton").addEventListener("click", multiplication);
document.getElementById("divisionButton").addEventListener("click", division);

document.getElementById("refreshButton").addEventListener("click", refresh);