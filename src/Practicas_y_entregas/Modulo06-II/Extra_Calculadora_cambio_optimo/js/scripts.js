/* Calculadora de cambio óptimo de billetes y monedas

INTERFAZ
Al presionar el botón calcular, un algoritmo debe procesar los cálculos necesarios para que devuelva un resultado con el número de billetes y monedas necesarias para hacer la devolución. 

ALGORITMO
Dentro de nuestra tienda, podremos dar cambio de billetes de 5 €, 10 €, 20 €, 50 €, 100 € y 200 € (no daremos cambio de 500 €). Asímismo, tendremos monedas de 1, 2, 5, 10, 20 y 50 céntimos; y 1 y 2 euros.
- Primero calculamos la diferencia para saber cuánto debemos devolver.
- Seguidamente, intentaríamos dar cambio con billetes de 200 euros.
- Vemos que NO podemos dar billetes de 200 euros.
- Lo intentamos con el siguiente billete, repitiendo los pasos hasta que damos con el correcto.
- Repetimos los pasos con el resto de billetes y monedas.
*/

/* BIBLIOTECA DE RECURSOS */
var money = [
    {
        type : "billete",
        name : 200,
        quantity : 0,
    }, {
        type : "billete",
        name : 100,
        quantity : 0,
    }, {
        type : "billete",
        name : 100,
        quantity : 0,
    }, {
        type : "billete",
        name : 50,
        quantity : 0,
    }, {
        type : "billete",
        name : 20,
        quantity : 0,
    }, {
        type : "billete",
        name : 10,
        quantity : 0,
    }, {
        type : "billete",
        name : 5,
        quantity : 0,
    }, {
        type : "moneda",
        name : 2,
        quantity : 0,
    }, {
        type : "moneda",
        name : 1,
        quantity : 0,
    }, {
        type : "moneda",
        name : 0.5,
        quantity : 0,
    }, {
        type : "moneda",
        name : 0.2,
        quantity : 0,
    }, {
        type : "moneda",
        name : 0.1,
        quantity : 0,
    }, {
        type : "moneda",
        name : 0.05,
        quantity : 0,
    }, {
        type : "moneda",
        name : 0.02,
        quantity : 0,
    }, {
        type : "moneda",
        name : 0.01,
        quantity : 0,
    }
];

var icons = {
    "billete" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfd8gpcfgGiNkZgK1avSoR0CCPBcejqU_QCQ&usqp=CAU", //"&#128182;",
    "moneda" : "https://image.flaticon.com/icons/svg/1490/1490850.svg",
};


/* Calcular diferencia entre importes */
var refund = () => parseFloat(document.getElementById("quantity-delivered").value) - parseFloat(document.getElementById("total-price").value);


/* Bucle para el primer billete / moneda */
var changeGenerator = () => {
    var difference = refund();

    for (var unit in money) {
        if ((difference / money[unit].name) >= 1) {
            money[unit].quantity = Math.floor(difference / money[unit].name);
            difference -= money[unit].name * money[unit].quantity;
            console.log(difference);

            console.log("Se va a devolver " + money[unit].quantity + " " + money[unit].type + " de " + money[unit].name + "€.");

            printResult(money[unit]);
            //console.log(parseFloat(difference));
        }

        if (difference === 0) {
            break;
        }
    }
};

var printResult = (unit) => {
    div = document.createElement("div");
    div.classList.add(unit.type);
    div.innerHTML += unit.name;
    div.innerHTML += "<img src='" + icons[unit.type] + "'/>";
    div.innerHTML += "x" + unit.quantity;

    document.getElementById("result");
    result.appendChild(div);
};

var refresh = () => {
    document.getElementById("result").innerHTML = "";
};

var refreshInputs = () => {
    document.getElementById("quantity-delivered").value = 0;
    document.getElementById("total-price").value = 0;
};

/* Manejador del evento de click */
var handleCalculateResult = () => {
    refresh();
    changeGenerator();
    refreshInputs();
};


/* Evento click en botón calcular */
document.getElementById("calculator-button").addEventListener("click", handleCalculateResult);