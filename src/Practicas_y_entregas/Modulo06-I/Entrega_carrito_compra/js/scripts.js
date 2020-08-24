/* Vamos a implementar un carrito de la compra donde el usuario pueda elegir las unidades que desea de cada producto, a partir de una lista de productos dada. Habrá un botón para calcular la factura, y una zona con la factura desglosada mostrando el subtotal, impuestos y el importe total.*/

// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

/* HTML dinámico */
// Creación del input number
// - Necesitaré stock para max-value
// - Necesitaré id padre para adjuntar nuevo elemento
createInputNumber = (product, idParent, index) => {
    var inputNumber = document.createElement("input");
    inputNumber.setAttribute("type", "number");
    inputNumber.setAttribute("value", "0");
    inputNumber.setAttribute("min", 0);
    inputNumber.setAttribute("max", product.stock);
    inputNumber.setAttribute("class", "units");
    inputNumber.setAttribute("id", "units" + "-" + index);

    var parent = document.getElementById(idParent);
    parent.appendChild(inputNumber);
};

// Creación del div nombre + precio unitario
var createDescription = (product, idParent) => {
    var description = document.createElement("div");
    description.setAttribute("class", "description");
    description.innerHTML = product.description + " - " + product.price + "€/ud.";

    var parent = document.getElementById(idParent);
    parent.appendChild(description);
};

// Creación índice
var createIndex = (index, idParent) => {
    var productIndex = document.createElement("div");
    productIndex.setAttribute("class", "index");
    productIndex.innerHTML = parseInt(index)+1;

    var parent = document.getElementById(idParent);
    parent.appendChild(productIndex);
};

// Creación del nuevo nodo de producto
var createProduct = (product, index) => {
    var id = index + 1;
    var productItem = document.createElement("div");
    productItem.setAttribute("id", "product" + "-" + index);
    productItem.setAttribute("class", "products");

    var parent = document.getElementById("product-list");
    parent.appendChild(productItem);

    createIndex(index, productItem.id);
    createDescription(product[index], productItem.id);
    createInputNumber(product[index], productItem.id, index);
};

// Bucle para iterar un objeto y llamar a la función que pinta los productos en el HTML
for (var object in products) {
    createProduct(products, object);
}


/* Conseguir los valores de los input units */
// Comprobación units máximo por si falla la comprobación de HTML5
// - Units && input.value <= Stock
var getInputNumber = (id) => document.getElementById("units-" + id);

var units = () => {
    for (var i = 0; i < products.length; i++) { //Uso for en vez de for... of porque necesito el índice para crear el id del input
        if(getInputNumber(i).value > products[i].stock) {
            getInputNumber(i).value = products[i].stock;
        } 
        products[i].units = getInputNumber(i).value;
    }
};


/* Cálculos para factura desglosada */
// Cálculo Subtotal
var subtotal = () => {
    var subtotal = 0;
    for (product of products) {
        subtotal += product.price * product.units;
    }
    return subtotal;
};

// Cáculo IVA
var iva = () => {
    var iva = 0;
    for (product of products) {
        iva += (product.price * product.units) * (product.tax / 100);
    }
    return iva;
};

// Cálculo Total
var total = () => subtotal() + iva();


/* Manejador del evento */
var eventHandlerButton = () => {

    document.getElementById("subtotal").innerHTML = subtotal().toFixed(2) + "€";
    document.getElementById("iva").innerHTML = iva().toFixed(2) + "€"; 
    document.getElementById("total").innerHTML = total().toFixed(2) + "€";
};

/* Evento botón calcular */
document.getElementById("calculate-button").addEventListener("click", eventHandlerButton);


/* Extra - Intenta hacer que el botón Calcular se habilite o deshabilite en función de si el usuario ha elegido al menos 1 unidad de algún producto o no. */

// Botón habilitado / inhabilitado según totalUnits >= 0
var disabled = (totalUnits) => {
    var button = document.getElementById("calculate-button");
    totalUnits > 0 ? button.disabled = false : button.disabled = true;
};

// Manejador de evento de change en el documento
var eventHandlerDisabled = () => {
    units(); // Actualizar const products con input value

    var totalUnits = 0; // Almacenar nº de units para habilitar o deshabilitar el botón
    for (var i = 0; i < products.length; i++) {
        if(products[i].units > 0) totalUnits += products[i].units;
    }
    disabled(totalUnits);
};

// Evento change en documento
document.addEventListener("change", eventHandlerDisabled);