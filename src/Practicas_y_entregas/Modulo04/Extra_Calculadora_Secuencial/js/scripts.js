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

var refreshInput = () => document.getElementById("numberA").value = 0;

var operation = "";
var sum = () =>  {
    operation = "sum";
};

var total = () => {
    
    if (!result) {
        result = 0;
        console.log("Distinto de result");

    } else {
        numberA();

        switch (operation) {
            case "sum":
                result = result + numberA();
            break;
            case "subtraction":
                result = result - numberA();
            break;
            case "multiplication":
                result = result * numberA();
            break;
            case "division":
                result = result / numberA();
            break;        
        }
console.log("Estamos dentro del else");
    }

    console.log(result+ " estamos dentro del total");
    return result;
};

var printTotal = () => document.getElementById("result").innerHTML = result;

document.getElementById("numberA").addEventListener("keyup", numberA);
document.getElementById("sumButton").addEventListener("click", sum);

document.getElementById("totalButton").addEventListener("click", printTotal);