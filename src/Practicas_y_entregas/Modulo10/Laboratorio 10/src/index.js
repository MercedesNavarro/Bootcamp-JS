/** EJERCICIOS ENTREGABLES ES6 **/

/* hasId
Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano false ).
TIP: No accedas a 'id' con punto (.) o con corchetes ([]). */

const object1 = { id : 1, name : "kallax", maker : "ikea"};
const object2 = { name : "alex", maker : "ikea" };

const hasId = ({ id }) => id ? true : false;

//console.log(hasId(object1));

/* head
Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento. 
TIP: No utilices el corchete ([]) para acceder a la posición 0. */

const array1 = ["mesa", "silla", "alacena", "teléfono", "ambientador", "puerta", "sofá"];

const head = ([primero, ]) => primero;

//console.log(head(array1));

/* tail
Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.
TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest. */

const tail = ([, ...rest]) => rest;

//console.log(tail(array1));

/*swapFirstToLast
Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.
TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest. */

const swapFirstToLast = ([primero, ...rest]) => {
    rest.push(primero); // Si lo pongo en el return me devuelve el número de items
    return rest;
};

//console.log(swapFirstToLast(array1));

/* excludeId
Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera.
TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest. */

const excludeId = ({ id, ...rest }) => rest;

//console.log(excludeId(object1));

/* wordsStartingWithA
Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.
TIP: No utilices bucles. */

const wordsStartingWithA = array => array.filter(element => element[0] === "a");

//console.log(wordsStartingWithA(array1));

/* concat
Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |.
TIP: No utilices bucles. */

const concat = (...elements) => elements.join(" | ");

//console.log(concat(...array1));

/* multArray
Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro que sea un número ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
TIP: No utilices bucles.*/

const array2 = [1, 2, 3, 4, 5];

const multArray = (array, number) => array.map(element => element * number);

//console.log(multArray(array2, 2));

/* calcMult
Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.
TIP: No utilices bucles. */

const calcMult = array => array.reduce((acc, element) => acc * element, 1);

//console.log(calcMult(array2));


/** EJERCICIOS EXTRA ES6 **/

/* swapFirstSecond
Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.
TIP: No modifiques el array de entrada original. */

const swapFirstSecond = ([primero, segundo, ...rest]) => {
    const [...newArray] = rest;
    newArray.unshift(segundo, primero);
    return newArray; 
};

//console.log(swapFirstSecond(array1));

/* longest
Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).  */

const array3 = ["sofá", "silla"];

const longest = (...allArguments) => {
    const [character, ...array] = allArguments.reverse();
    const newArray = array.every(([primero, ...rest]) => primero === character);

    return newArray;
};

//console.log(longest(...array3, "s"));

/* searchInStringV1
Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.
TIP: No utilices bucles.
TIP: Convierte el string a un array mediante Array.from() . */

const searchInStringV1 = (string, character) => Array.from(string).reduce((acc, element) => {
    if (element === character) acc++;
    return acc;
}, 0);

//console.log(searchInStringV1("eternamente", "e"));

/* searchInStringV2
Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar reduce .
TIP: No utilices bucles.
TIP: Convierte el string a un array mediante Array.from() . */

const searchInStringV2 = (string, character) => Array.from(string).filter(element => element === character).length;

//console.log(searchInStringV2("eternamente", "e"));

/* sortCharacters
Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.
TIP: No utilices bucles. No modifiques el string original de entrada. 
TIP: Convierte el string a un array mediante Array.from() . */

const maker = "ikea";

const sorCharacters = string => Array.from(string).sort();

//console.log(sorCharacters(maker));

/* shout
Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
TIP: No utilices bucles. */

const shout = (...array) => array.map(element => "¡" + element + "!").join(" ").toUpperCase();

//console.log(shout(...array1));

/* Lista de la compra
Dada la siguiente lista de la compra:
                   
A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
B. Ordena la lista de más a menos unidades.
C. Obtén el subtotal gastado en droguería.
D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría. 
TIP: No utilices bucles. */

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

/* Nueva lista con 21% de IVA */
const IVA21 = array => {
    array.map(element => element.iva = element.price * element.units * 0.21);
    return array;
};

//console.log(IVA21(shoppingCart));

/* Ordenación de la lista de más a menos unidades */
const sortShoppingCart = array => array.sort((a, b) => a.units - b.units);

//console.log(sortShoppingCart(shoppingCart));

/* Obtén el subtotal gastado en droguería */
const drogueria = array => array.reduce((acc, element) => {
        if(element.category === "Droguería") acc += element.price * element.units;
        return acc;
    }, 0);

//console.log(drogueria(shoppingCart));

/* Lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría */
const showShoppingCart = array => {
    
    array.sort((a, b) => {
        if (a.category < b.category) {
            return -1;
        } else if (a.category > b.category) {
            return 1;
        } else {
            return 0;
        }
    });

    array.map(element => console.log(element.product + " -> " + element.price * element.units + "€"));
};

//console.log(showShoppingCart(shoppingCart));