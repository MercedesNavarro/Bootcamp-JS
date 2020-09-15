/* VALIDAR UN IBAN */
// Caso 1
// Dado este IBAN: ES6600190020961234567890 , validar que se informa con dos letras, y los números correspondientes.

const IBAN = "ES6600190020961234567890";
const pattern = /^[A-Z]{2}\d{22}$/;

//console.log(IBAN + " -> " + pattern.test(IBAN));

// Caso 2
// Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas: 

const IBAN2 = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
const pattern2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/gm;

/* Validar los elementos del array
IBAN2.forEach(element => {
    console.log(element + " -> " + pattern2.test(element));
});*/

 // Caso 3
 // Vamos a extraer el código de páis y el dígito de control.

const pattern3 = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/m;

/* Extracción del código de país y del dígito de control. También me va a dar la cadena entera y el último módulo por los paréntesis.
IBAN2.forEach(element => {
    console.log(element.match(pattern3));
});*/


/* VALIDAR MATRÍCULA DE COCHE */
// Caso 1
// Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras:

const CARS = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
const carsPattern = /^\d{4}[\s-]?[A-Z]{3}$/;

/* Validación de matrícula
CARS.forEach(element => {
    console.log(element + " -> " + carsPattern.test(element));
});*/

// Caso 2
// Vamos a extraer por un lado la parte numérica y por otro las letras.

const carsPattern2 = /^(\d{4})[\s-]?([A-Z]{3})$/;

/* Extracción de los grupos de números y de letras por separado
CARS.forEach(element => {
    console.log(element.match(carsPattern2));
});*/


// OPCIONALES
/* EXTRAER IMÁGENES DE UN FICHERO HTML */
// Caso 1
// De una sola linea extraer el contenido de src

const IMG = `<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />`;
const imgPattern = /<img\ssrc=\"([\/\:A-Z0-9\n\.\/_-]+)\"/i;

/* Extracción del contenido del src
console.log(IMG.match(imgPattern));*/

// Caso 2
// De un HTML extraer todos los src de todos los objetos img:

const HTML = `<html>
<body>
  <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
  />
  <h1>ejemplo</h1>
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/> </body>
</html>`;
const htmlPattern = /<img\ssrc=\"([\/\:A-Z0-9\.\/_-]+)\"/gmi;

/* Extracción de varias imágenes de un documento
console.log(HTML.match(htmlPattern));*/


/* VALIDAR SINTAXIS TARJETA DE CRÉDITO */
// Hay que tener en cuenta que una máster card tiene una longitud de 16 caracteres (numeros), que tiene que empezar con 50,51,52,53,54,55 y que lo normal es que se agrupen en conjuntos de 4 digitos. Vamos a validar los siguientes casos:
// Caso 1
// Vamos a validar los siguiente formatos: 5299 64000 000 000 5299-64000-000-000 529964000000000

const MASTERCARD = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];
const mastercardPattern = /5[0-5]\d{2}([\s-]?\d{4}){3}/;

/* Validación de números, separadores e inicios
MASTERCARD.forEach(element => {
    console.log(element + " -> " + mastercardPattern.test(element));
});*/

// Caso 2
// Vamos a extraer cada grupo de cuatro digitos

const mastercardPattern2 = /(5[0-5]\d{2})[\s-]?(\d{4})[\s-]?(\d{4})[\s-]?(\d{4})/;

/* Extracción de los cuatro grupos que forman el número de la tarjeta 
MASTERCARD.forEach(element => {
    console.log(element.match(mastercardPattern2));
});*/


/* BUSCAR EXPRESIONES REGULARES */
// Comprobar si una clave es fuerte o no
// Complejo: una minuscula, una mayuscula, un numero y un caracter especial.

const KEY = "1hH2nM3+";
const keyPattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/;

/* Validación clave compleja
console.log(keyPattern.test(KEY));*/

//Moderado: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.

const KEY2 = "mN812345";
const keyPattern2 = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

/* Validación clave moderada 
console.log(keyPattern2.test(KEY2));*/


// Validar que una URL esta bien formada.

const WEB = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net"];
const urlPattern = /^(?:https:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

/* Validación de url
WEB.forEach(element => {
    console.log(urlPattern.test(element));
});*/


// Validar un color hexadecimal

const COLOR = "#17A589";
const colorPattern = /^#([a-fA-F]|[0-9]){3,6}$/;

/* Validación color hexadecimal
console.log(colorPattern.test(COLOR));*/