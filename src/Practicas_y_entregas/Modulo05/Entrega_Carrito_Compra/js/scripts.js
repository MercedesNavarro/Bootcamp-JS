/* CARRITO DE LA COMPRA 

- Mostrar el carrito de la compra.
- Eliminar el producto con id 54657 del carrito de la compra.
- Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad). 
- Filtrar por los productos que sean prime.
Opcional:
- Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", 
si no "Este pedido tiene gastos de envío".
- Mostrar el carrito en un listado de html básico.
- Aplicar un descuento del 5% si la compra es mayor de 100 €.
*/

const carrito = [
    {
      id: 198752,
      name: "Tinta DJ27 Color",
      price: 52.95,
      count: 3,
      premium: true
  }, {
      id: 75621,
      name: "Impresora ticketera PRO-201",
      price: 32.75,
      count: 2,
      premium: true
  }, {
      id: 54657,
      name: "Caja de rollos de papel para ticketera",
      price: 5.95,
      count: 3,
      premium: false
  }, {
      id: 3143,
      name: "Caja de folios DIN-A4 80gr",
      price: 9.95,
      count: 2,
      premium: false
  } ];


/* Mostrar el carrito de la compra con todos los productos */
var print = (product) => {
    console.log("***********");

    for (attr in carrito[product]) {
        console.log(attr + ": " + carrito[product][attr]);
    }

};

var showCart = () => {
    for (product in carrito) {
        print(product);
    }
};

//showCart();


/* Eliminar el producto con id 54657 del carrito de la compra */
var deleteProduct = (array, index) => {
    array.splice(index, 1);
};

var findProduct = (id) => {
    var i = 0;
    var found = false;
    var index = -1;

    do {
        if (carrito[i].id == id) {
            found = true;
            index = i;
        }
        i++;
    } while (i < carrito.length && !found);

    //console.log("¿Se ha encontrado el elemento introducido? " + encontrado);
    return index;

};

//deleteProduct(carrito, findProduct("54657"));


/* Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad) */
var totalCart = () => {
    var total = 0;
    for (product of carrito) {
        total += product.price * product.count;
    }

    //console.log("El total de la compra es: " + total + "€");
    return total;
};

//totalCart();


/* Filtrar por los productos que sean prime */
var prime = () => {
    for (product in carrito) {
        if(carrito[product].premium) {
            print(product);
        }
    } 
};

//prime();


/* Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío" */
var productsPremium = true;

var premiumFree = () => {
    i = 0;
    var mensaje;
    
    do {
        if(!carrito[i].premium) {
            productsPremium = false;
        }
        i++;
    } while (i < carrito.length && productsPremium);

    productsPremium ? mensaje = "Pedido sin gastos de envío" : mensaje = "Este pedido tiene gastos de envío";

    return mensaje;
};

//premiumFree();


/* Aplicar un descuento del 5% si la compra es mayor de 100 € */
var discount = () => {
    var total = totalCart();
    if (total > 100) {
        return total *= 0.95;
    }
};

//discount();


/* Mostrar el carrito en un listado de html básico */
var cartMain = document.getElementById("shopping-cart");
cartMain.innerHTML = "<ul id='products-wrapper'>";
var allProducts = document.getElementById("products-wrapper");

var printHTML = () => {
    var currentProduct;
    i = 0;
    for (product of carrito) {

        allProducts.innerHTML += "<li class='allProducts' id='product" + i + "'></li>";
        currentProduct = document.getElementById("product" + i); 

        for (attr in product) {
            currentProduct.innerHTML += "<span class='attribute "+ attr +"'>" + attr + ": " + product[attr] + "</span> ";
        }       
        i++;
    }
};

printHTML();


/* Mostrar los mensajes de precio total, descontado, etc. */
document.getElementById("total").innerHTML = "El total de tu compra es " + totalCart() + "€";

if(totalCart() > 100) {
    document.getElementById("discount").innerHTML = "5% dto por pedido superior a 100€: " + (totalCart() - discount()) + "€";

    document.getElementById("total-discount").innerHTML = "Total a pagar: " + discount() + "€";
}

document.getElementById("premium").innerHTML = premiumFree();