/* Enunciados de ejercicios, de control de flujo (if, else if, switch)
- Dado el siguiente objeto. Escribir en una variable un día de la semana y decir cuál asignatura toca ese día */
var timetable = [
    {
        day: "Lunes",
        subject: "Matemáticas",
    },
    {
        day: "Martes",
        subject: "Lengua",
    },
    {
        day: "Miércoles",
        subject: "Física",
    },
    {
        day: "Jueves",
        subject: "Química",
    },
    {
        day: "Viernes",
        subject: "Gimnasia",
    },
];

var dia = "Viernes";

if (timetable.day == dia) console.log(timetable.subject);

console.log("hola");

/*- Según una variable llamada hora , mostrar un buenos días, buenas tardes o buenas noches según la hora. Se utilizarán los tramos de 6 a 12, de 13 a 20 y de 21 a 5. Solo se tienen en cuenta la hora no los minutos. */
var hora = 25;

switch(true) {
    case hora >= 6 && hora <= 12:
        console.log("Buenos días");
    break;
    case hora >= 13 && hora <= 20:
        console.log("Buenas tardes");
    break;
    case hora >= 21 && hora <= 24 || hora >= 0 && hora <= 5:
        console.log("Buenas noches");
    break;
    default:
        console.log("Esa hora no existe pero igualmente ten un bonito día");
    break;
}


/*- Dada una variable que se llame diaSemana , que contenga un número del 1 al 7 mostrar el día de la semana correspondiente.*/
var diaSemana = 5;

if (diaSemana > 1 && diaSemana < 8) {
    switch (diaSemana) {
        case 1:
            console.log("Lunes");
        break;
        case 2:
            console.log("Martes");
        break;
        case 3:
            console.log("Miércoles");
        break;
        case 4:
            console.log("Jueves");
        break;
        case 5:
            console.log("Viernes");
        break;
        case 6:
            console.log("Sábado");
        break;
        case 7:
            console.log("Domingo");
        break;
    }
} else {
    console.log("Ese día no existe");
}


/*- Calcula la media de tres notas y muestra si está apta, no apta, notable o sobre saliente.
    - Una persona está apta con un 5. 
    - Una persona no apta de menos de un 5. 
    - Notable de 5 a 7. 
    - Sobre saliente de 7 al 10.*/
var nota1 = 10,
    nota2 = 10,
    nota3 = 8,
    media = (nota1 + nota2 + nota3) / 3;

switch (true) {
    case media < 5:
        console.log("No apto");
    break;
    case 5:
        console.log("Apto");
    break;
    case media > 5 && media < 7:
        console.log("Notable");
    break;
    case media >= 7 && media <= 10:
        console.log("Sobresaliente");
    break;
    default:
        console.log("Esa media está mal calculada");
    break;
}


/*- Según una variable dia y otra mesNacimiento , calcular el horóscopo de la persona.*/
var dia = 22,
    mesNacimiento = "diciembre";

switch (mesNacimiento) {
    case "enero":
        dia <= 20 ? console.log("Tu horóscopo es CAPRICORNIO") : console.log("Tu horóscopo es ACUARIO");
    break;
    case "febrero":
        dia <= 19 ? console.log("Tu horóscopo es ACUARIO") : console.log("Tu horóscopo es PISCIS");
    break;
    case "marzo":
        dia <= 20 ? console.log("Tu horóscopo es PISCIS") : console.log("Tu horóscopo es ARIES");
    break;
    case "abril":
        dia <= 20 ? console.log("Tu horóscopo es ARIES") : console.log("Tu horóscopo es TAURO");
    break;
    case "mayo":
        dia <= 21 ? console.log("Tu horóscopo es TAURO") : console.log("Tu horóscopo es GÉMINIS");
    break;
    case "junio":
        dia <= 22 ? console.log("Tu horóscopo es GÉMINIS") : console.log("Tu horóscopo es CÁNCER");
    break;
    case "julio":
        dia <= 23 ? console.log("Tu horóscopo es CÁNCER") : console.log("Tu horóscopo es LEO");
    break;
    case "agosto":
        dia <= 23 ? console.log("Tu horóscopo es LEO") : console.log("Tu horóscopo es VIRGO");
    break;
    case "septiembre":
        dia <= 23 ? console.log("Tu horóscopo es VIRGO") : console.log("Tu horóscopo es LIBRA");
    break;
    case "octubre":
        dia <= 23 ? console.log("Tu horóscopo es LIBRA") : console.log("Tu horóscopo es ESCORPIO");
    break;
    case "noviembre":
        dia <= 22 ? console.log("Tu horóscopo es ESCORPIO") : console.log("Tu horóscopo es SAGITARIO");
    break;
    case "diciembre":
        dia <= 21 ? console.log("Tu horóscopo es SAGITARIO") : console.log("Tu horóscopo es CAPRICORNIO");
    break;
    default: 
        console.log("Ha introducido mal algún dato");
    break;
}


/*- Según una variable llamada numero , calcule si es par o inpar.*/
var numero = 8;

numero % 2 == 0 ? console.log("El número introducido es PAR") : console.log("El número introducido es IMPAR");


/*- Usa una variable y di si es positivo o negativo.*/
var numero2 = -34;

numero2 < 0 ? console.log("El número introducido es NEGATIVO") : console.log("El número introducido es POSITIVO");


/*- Di si un número es mayor de 100.*/
var numero3 = 114;

numero3 > 100 ? console.log("El número introducido es mayor de 100") : console.log("El número introducido es menor que 100");


/*- Usa 3 variables que contengan un número y di si el tercero es igual a la suma del primero y el segundo.*/
var number1 = 1,
    number2 = 2,
    number3 = 4;

number1 + number2 == number3 ? console.log("La suma de los dos primeros números es igual al tercer número") : console.log("La suma de los dos primeros números es diferente");


/*- Según los siguientes objetos.
- Calcular su área según el tipo de figura geométrica.
- Área del cuadrado: lado * lado.
- Área del círculo: pi * radio al cuadrado Pi toma el valor 3.14 */
var square = {
    sideOne: 1,
    sideTwo: 3,
    typeOfGemotricFigure: 'Cuadrado'
};
var circle = {
    radius: 5,
    typeOfGemotricFigure: 'Círculo'
};
var area = 0,
    pi = 3.14; 

function calcArea(figure) {
    var area1;

    switch (figure.typeOfGemotricFigure) {
        case "Cuadrado":
            area1 = figure.sideOne * figure.sideTwo;
        break;
        case "Círculo":
            area1 = pi * (figure.radius * figure.radius);
        break;
    }

    return area1;
}

area = calcArea(circle);
console.log(area);