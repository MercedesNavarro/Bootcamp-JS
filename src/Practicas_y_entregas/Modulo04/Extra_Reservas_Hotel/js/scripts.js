/*Vamos a simular un formulario de reserva de un hotel. 
Para ello añade los siguientes inputs a tu HTML:
- Selector de tipo de habitación, a elegir entre Standard, Junior Suite y Suite (< select >)
- Checkbox para hacer uso del SPA o no (< input > tipo checkbox)
- Selector para indicar la ocupación de la habitación, a elegir entre Individual, Doble o Triple (< select >)
- Número de noches (< input > tipo número)
- Cuantas noches de parking se desea (< input > tipo número)
- Finalmente un botón de 'Calcular' para mostrar por pantalla el coste total de la estancia.

Para calcular el coste de la estancia ten en cuenta lo siguiente:
- La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite. 
- El uso del SPA incrementa la tarifa anterior en 20€.
- Una vez tengas la tarifa en función de la categoría y el SPA, la ocupación (individual o triple) actúa como un factor de decremento o incremento, siendo la opción de doble el estándar. Es decir, el uso individual reduce un 25% la tarifa por noche, mientras que el uso triple la incrementa en un 25%. El uso doble la deja tal cual.
- Cada noche de parking suma 10€.

Un ejemplo de estancia sería:
5 noches x Hab. Estándar con SPA de uso individual + 2 noches de parking. En este caso la tarifa por noche sería: (100€ noche + 20€ spa) al 75% por uso individual = 90€/noche x 5 noches = 450€ + (10€ parking x 2 noches) = 470€ TOTAL. */

/* OPCIONAL                
Prescinde del botón calcular y muestra el resultado total a medida que el usuario va haciendo cambios en el formulario.*/


/* BIBLIOTECA DE TARIFAS */
var rates = {
    standard: 100,
    juniorSuite: 120,
    suite: 150,
    spa: 20,
    parkingNight: 10
};

var occupationRates = {
    individual: 0.75,
    doble: 1,
    triple: 1.25
};

/* VARIABLE GENERAL Y RESETEO */
var total = 0;
var refreshTotal = () => total = 0;

/* ACCEDIENDO A LOS DATOS DEL FORMULARIO */
var room = () => document.getElementById("room").value;
var nights = () => {
    var numberOfNights = parseInt(document.getElementById("nights").value);
    if(isNaN(numberOfNights)) numberOfNights = 0;

    return numberOfNights;
};
var parking = () => parseInt(document.getElementById("parking").value);
var occupation = () => document.getElementById("occupation").value;

/* FUNCIONES DE CÁLCULO SEGÚN OPCIONES */
var spa = () => {
    if(document.getElementById("spa").checked) {
        total += (rates.spa * occupationRates[occupation()]) * nights();
    }
    return total;
    };
var parkingNights = () => {
    if(parking() > 0) total += (parking() * rates.parkingNight);
};
var calculate = () => total += (rates[room()] * occupationRates[occupation()]) * nights();

/* IMPRESIÓN DE RESULTADO */
var printHTML = () => {
    document.getElementById("total").innerHTML = "Total de la estancia: " + total + "€" ;
};

/* FUNCIÓN EVENTO CLICK CALCULAR */
var calculateButton = () => {

    spa();
    parkingNights();
    calculate();

    printHTML();
    refreshTotal();
};

//document.getElementById("calculate-button").addEventListener("click", calculateButton);
document.getElementById("parking").addEventListener("click", function() {
    document.getElementById("parking").value = "";
});


/* OPCIONAL                
Prescinde del botón calcular y muestra el resultado total a medida que el usuario va haciendo cambios en el formulario.*/

calculateButton(); // Para que de entrada venga el precio con lo básico
document.getElementById("room").addEventListener("change", calculateButton);
document.getElementById("spa").addEventListener("change", calculateButton);
document.getElementById("occupation").addEventListener("change", calculateButton);
document.getElementById("nights").addEventListener("input", calculateButton);
document.getElementById("parking").addEventListener("keyup", calculateButton);
