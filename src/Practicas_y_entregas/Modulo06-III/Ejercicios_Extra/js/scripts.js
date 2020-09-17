/* EJERCICIOS ESENCIALES DE REPASO */

/* FUNCIONES BÁSICAS */
//Implementa una función que muestre por consola “Hola Mundo”.
var printHelloWorld = () => console.log("Hola Mundo");

//Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.
var greetingSomeone = (name) => console.log("¡Hola " + name + "!");

//Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

var stringToUppercase = (string) => string.toUpperCase();

//Implementa una función que dado un string como parámetro devuelva el string en minúsculas.

var stringToLowercase = (string) => string.toLowerCase();

//Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.

var sum = (numberA, numberB) => numberA + numberB;

//Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

var concat = (string1, string2, string3) => string1 + string2 + string3;

//Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.

var addAttribute = (object) => object.id = null;

var objectTest1 = {
    name : "prueba1",
};

/* FUNCIONES CON IF/ELSE, SWITCHES Y COMPROBACIONES */
//Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null.

var testContent = (something) => something === null || something === undefined;

//Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.

var positiveOrNegative = (number) => number >= 0;

//Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.

var moreOrLess = (number) => {
    if (number === 100) {
        return "El número introducido es igual a 100";
    } else if (number > 100) {
        return "El número es mayor a 100";
    } else {
        return "El número es menor a 100";
    }
};

//Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.

var withNameAttribute = (obj) => obj.name !== undefined; //Toda propiedad que no existe es undefined, así evitamos falsos positivos 
// obj.hasOwnProperty('name');

var objectTest2 = {
    name : "prueba2",
    id : 2,
};

//Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

var divided = (numberA, numberB) => numberA % numberB === 0;

//Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.

var totalOfCharacters = (string, number) => string.length === number;

//Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).

var days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var weekDay = (number) => number > 0 && number < 8 ? days[number + 1] : "Ese día no existe";

//Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var currentMonth = (number) => number > 0 && number < 13 ? months[number + 1] : "Ese mes no existe";

//Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.

var arrayTest1 = ["Lunes", 24, "Mesa", 68, 32, 7, "Silla", ];
var arrayTest2 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

var longerArray = (array1, array2) => {
    if (array1.length > array2.length) {
        return array1;
    } else if (array2.length > array1.length) {
        return array2;
    } else {
        return "Los dos arrays son iguales";
    }
};

//Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.

var sameFirstElement = (array1, array2) => Array.isArray(array1) && Array.isArray(array2) && array1[0] === array2[0];


/* FUNCIONES CON ARRAYS */
//Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined’ .

var arrayTest3 = ["Saúl"];

var secondElement = (array) => array.length >= 2 ? array[1] : undefined;

//Implementa una función que admita un string como parámetro y devuelva la última letra.

var lastLetter = (string) => string[string.length - 1]; //Se puede utilizar la función SLICE

//Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.

var changePositions = (array) => {
    var firstElement = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = firstElement;
    
    return array;
};


/* FUNCIONES CON BUCLES */
//Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas veces como indique el número.

var repeatText = (number, string) => {
    for (var i = 0; i < number; i++) {
        console.log(i + " " + string);
    }
}; 

//Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que tiene el objeto.

var objectTest3 = {
    name : "Martín",
    lastName : "Bermejo",
    age : 31,
};

var numberOfAttributes = (object) => {
    var i = 0;

    for (var attribute in object) {
        if (object.hasOwnProperty(attribute)) i++; //Para comprobar que la propiedad que estamos iterando pertenezca verdaderamente a object y no sea heredada;
    }

    return i;
};

//Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.

var objectAttributes = (object) => {
    for (var attribute in object) {
        console.log(object[attribute]);
    }
};

//Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento del array multiplicado por dicho número. Devuelve el resultado.

var arrayTest4 = [1, 3, 5, 7, 9];

var multipliedNumber = (array, number) => {
    var total = 0;

    for (var item of array) {
        total += item * number;
    }

    return total;
};

//Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.

var searchCharacter = (string, char) => {
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) counter++;
    }

    return counter;
};

//Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada elemento por consola.

var printElements = (array) => {
    for (var item of array) {
        console.log(item);
    }
};

//Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo muestre por consola.

var printElementsRL = (array) => {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
};

//Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos son menores a dicho número, y cuántos no.

var smallerNumbers = (array, number) => {
    var smaller = 0;
    var bigger = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < number) {
            smaller++;
        } else if (array[i] > number) {
            bigger++;
        }
    }

    return smaller + " son menores que el número introducido y " + bigger + " son mayores.";
};

//Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el segundo.

var searchElement = (array1, array2) => {
    for (var i = 0; i < array2.length; i++) {
        if (array1[0] === array2[i]) return "Se ha encontrado el primer elemento del primer array en el segundo array";
    }

    return "No se ha encontrado el elemento";
};

//Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo y viceversa. Muestra los arrays transformados por consola.

var arrayTest5 = [0, 2, 4, 6, 8];
var arrayTest6 = [1, 3, 5, 7, 9];

var changeArrays = (array1, array2) => {
    var arrayTemp = [];

    console.log("Array1 - Array2");

    for (var i = 0; i < array1.length; i++) {
        arrayTemp[i] = array1[i];
        array1[i] = array2[i];
        array2[i] = arrayTemp[i];

        console.log(array1[i] + " - " + array2[i]);
    }
};

//Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc.

var arrayToObject = (array) => {
    var objectFromArray = {};

    for (var i = 0; i < array.length; i++) {
        objectFromArray["prop" + (i + 1)] = array[i];
    }

    return objectFromArray;
};

//Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado. Muestra por consola cada elemento por el que iteres.

var searchFromNumber = (array, number) => {
    for (var i = number; i < array.length; i++) {
        console.log(i + " " + array[i]);
    }
};

//Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

var searchString = (array, string) => {
    for (var item of array) {
        if (item === string) return true;
    }

    return false;
};

//Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y otra función equivalente que haga la traducción inversa.

var frutas = ["manzana", "plátano", "fresa", "sandía", "piña"];
var fruits = ["apple", "banana", "strawberry", "watermelon", "pineapple"];

var translateToEnglish = (element) => fruits[frutas.indexOf(element)];

var translateToSpanish = (element) => frutas[fruits.indexOf(element)];

//Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.

var textRL = (string) => {
    var stringRL = "";

    for (var i = string.length - 1; i >= 0; i--) {
        stringRL += string[i];
    }

    return stringRL;
};

//Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.

var criminalText = (string) => {
    var newText = "";
    var j = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " " && j % 2 === 0) {
            newText += string[i].toUpperCase();
            j++;
        } else if (string[i] !== " " && j % 2 !== 0) {
            newText += string[i].toLowerCase();
            j++;
        } else {
            newText += string[i];
        }
    }

    return newText;
};

//Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos de cada subarray y mostrarlos por consola.

var arrayOfArrays = [arrayTest2, arrayTest4, arrayTest5];

var printArrayOfArrays = (array) => {
    for (var subArray of array) {
        for (var item of subArray) {
            console.log(item);
        }
    }
};