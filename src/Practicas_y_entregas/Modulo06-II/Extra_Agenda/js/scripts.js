/* AGENDA
Vamos a implementar una agenda para un equipo de personas, de modo que nos indique que horas tienen libres y qué horas están ocupados. Además, vamos a generar un algoritmo que haga una búsqueda en un equipo y determine cual es la primera hora en que todos los miembros del equipo están libres, para asi poder establecer una reunión. Es decir, que busque el primer hueco disponible en sus agendas. */


/* BIBLIOTECA DE RECURSOS */
// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];


/* 1. Generación aleatoria de la disponibilidad */

// Generación de aleatoriedad 50%
var availability = () => (Math.random() < 0.5) ? true : false;

// Rellenar el array de una persona con la función anterior
var availabilityGenerator = (team) => {
    for (var person of team) {   
        for (var i = 0; i < person.availability.length; i++) {
            person.availability[i] = availability();
        }
    }
};

availabilityGenerator(myTeam);

// Muestra por consola la agenda
var printSchedule = (team) => {
    document.getElementById("schedule-main").appendChild(createDiv("schedules", undefined));
    var currentDiv;

    for (var person of team) {
        document.getElementById("schedules").appendChild(createDiv("person-" + person.name, "team"));

        var currentDiv = createDiv(person.name, "availability");
        document.getElementById("person-" + person.name).appendChild(currentDiv);
    
        currentDiv.innerHTML = person.name;    

        console.log("Disponibilidad de " + person.name);
        for (var i = 0; i < person.availability.length; i++) {
            console.log(WORK_HOURS[i] + ": " + (person.availability[i] ? "Sí" : "No"));

            currentDiv = document.getElementById("person-" + person.name).appendChild(createDiv(undefined, "availability"));
            
            person.availability[i] ? currentDiv.style.backgroundColor = "green" : currentDiv.style.backgroundColor = "red";
        }
        console.log("****************");
    }  
};

//printSchedule(myTeam);


/* 2. Buscar hueco libre */
var meetingGenerator = (team) => {
    for (var i = 0; i < WORK_HOURS.length; i++) {
        var available = true;

        for (var person of team) {
            if (!person.availability[i]) {
                available = false;
                break;
            }
        }
        if (available) return console.log("Hay hueco en la siguiente hora: " + WORK_HOURS[i]);
    } 

    return console.log("No hay hueco disponible para el día de hoy");
};


/* IMPRESIÓN EN HTML */
var createDiv = (id, classes) => {
    var div = document.createElement("div");
    if (id != undefined) div.setAttribute("id", id);
    if (classes != undefined) div.setAttribute("class", classes);

    return div;
};

var printHours = () => {
    document.getElementById("schedule-main").appendChild(createDiv("hours", null));
    var currentDiv;

    currentDiv = createDiv("hours-header", "work-hours");
    document.getElementById("hours").appendChild(currentDiv);

    currentDiv.innerHTML = "";

    for (var i = 0; i < WORK_HOURS.length; i++) {
        console.log("Hora " + i);
        currentDiv = createDiv("hours" + i, "work-hours");
        document.getElementById("hours").appendChild(currentDiv);

        currentDiv.innerHTML = WORK_HOURS[i];
    }
};

printHours();
printSchedule(myTeam);
meetingGenerator(myTeam);


