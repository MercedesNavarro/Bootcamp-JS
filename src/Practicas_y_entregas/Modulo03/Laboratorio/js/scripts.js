/* Objeto de producto dado */
var product = { 
    count: 3, 
    price: 12.55, 
    type: "libro" 
};


/* Variables creadas */
var vatApplied = 0.21, /* Inicializado en 21%, que es lo normal, para ahorrarnos un case */
    productVat,
    total;


/* No se admitirán cantidades negativas (en cuyo caso se tomará como 0) */
if (product.count < 0) product.count = 0;


/* Aplicamos el iva que corresponde distinto de general */
switch (product.type) {
    case "alimentacion":
        vatApplied = 0.1;
    break;
    case "libro":
        vatApplied = 0.04;
}

productVat = product.price * vatApplied;
total = (product.price + productVat) * product.count;


/* Muestra por consola */
console.log(`El producto elegido es ${product.type}, que tiene un precio de ${product.price}€
Ha elegido llevar ${product.count} unidad/es.
El total de su compra aplicando el IVA es de ${total}€`);


/* Muestra en el documento */
document.getElementById("purchase-console").innerHTML = `
El producto elegido es ${product.type}, que tiene un precio de ${product.price}€.<br>
Ha elegido llevar ${product.count} unidad/es. <br>
El total de su compra aplicando el IVA es de ${total}€`;

/* Avanzado: función para calcular el IVA */
function vat(type, price, count) {
    
    var priceVat,
        total;

    switch (type) {
        case "alimentacion":
            priceVat = price * 0.1;
        break;
        case "libro":
            priceVat = price * 0.04;
        break;
        default:
            priceVat = price * 0.21;
    }
    total = (price + priceVat) * count;
    return total;
}

vat(product.type, product.price, product.count); /* Faltaría un console.log para imprimir el resultado por consola */