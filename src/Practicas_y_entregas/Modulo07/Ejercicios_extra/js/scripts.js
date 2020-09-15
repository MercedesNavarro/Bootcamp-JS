/* Enunciados ejercicios extra de regex */
// VALIDACIÓN TELÉFONO 
// Caso 1 (952 35 42 77 o 952354277)
const PHONES = ["952 35 42 77", "952354277"];
const phonePattern = /^\d{3}(\s?\d{2}){3}$/;

/* Validación teléfono
PHONES.forEach(element => {
    console.log(phonePattern.test(element));
});*/

// Teléfono fijo o móvil [9 | 6]
const PHONES2 = ["952 35 42 77", "652 35 42 77", "952354277", "652354277"];
const phonePattern2 = /^[6|9]\d{2}(\s?\d{2}){3}$/;

/* Validación 9 | 6
PHONES2.forEach(element => {
    console.log(phonePattern2.test(element));
});*/


// Teléfono con código de país +34
const PHONES3 = ["+34 952 35 42 77", "+34 652 35 42 77", "+34952354277", "+34652354277"];
const phonePattern3 = /^(\+34)?\s?[6|9]\d{2}(\s?\d{2}){3}$/;;

/* Validación +34
PHONES3.forEach(element => {
    console.log(phonePattern3.test(element));
});*/

// Paréntesis en código de país (+34)
const PHONES4 = ["(+34) 952 35 42 77", "(+34) 652 35 42 77", "(+34)952354277", "(+34)652354277"];
const phonePattern4 = /^(\(\+34\))?\s?[6|9]\d{2}(\s?\d{2}){3}$/;

/* Validación (+34)
PHONES4.forEach(element => {
    console.log(phonePattern4.test(element));
});*/


//VALIDACIÓN NIE
const NIE = ["X 1234567P", "X1234567P", "X 1234567 P"];
const niePattern = /^[X|Y|Z]\s?\d{7}\s?[A-Z]$/;

/* Validación básica NIE
NIE.forEach(element => {
    console.log(niePattern.test(element));
});*/

// Validación NIE con guión
const NIE2 = ["X 1234567-P", "X1234567P", "X 1234567 P"];
const niePattern2 = /^[X|Y|Z]\s?\d{7}[\s-]?[A-Z]$/;

/* Validación guión NIE
NIE2.forEach(element => {
    console.log(niePattern2.test(element));
});*/


// CÓDIGO POSTAL
/* Comprobar CP de Málaga. Empieza por 29 */
const CP = "29898";
const cpPattern = /^29\d{3}$/;

/* Validación CP 29
console.log(cpPattern.test(CP));*/

/* Añadir validación de Madrid. Empieza por 28 */
const CP2 = ["29898", "28912"];
const cpPattern2 = /^(29|28)\d{3}$/;

/* Validación CP 28
CP2.forEach(element => {
    console.log(cpPattern2.test(element));
});*/

/* Añadir validación de Barcelona. Empieza por 08 */
const CP3 = ["29898", "28912", "09654"];
const cpPattern3 = /^(29|28|08)\d{3}$/;

/* Validación CP 08*/
/*CP3.forEach(element => {
    console.log(cpPattern3.test(element));
});*/


// COLOR RGB
const COLOR = ["RGB(128, 128, 0)", "rgb(128, 128, 0)", "RGB(128,128,0)"];
const colorPattern = /^RGB\(\d{1,3},\s?\d{1,3}\,\s?\d{1,3}\)$/i;

/* Validación color RGB
COLOR.forEach(element => {
    console.log(colorPattern.test(element));
});*/