/* RESERVAS DE UN HOTEL
Cuando un cliente realiza sus reservas indica los siguientes datos:
- Qué habitaciones quiere (hay de varios tipos).
- Para cada habitación, cuántas personas la van a ocupar.
- Además, debemos saber que el tipo de IVA que aplica a las habitaciones de hotel es del 21%.

Nuestro objeto es calcular el subtotal (precio sin IVA) y el total de las reservas que ha hecho un cliente.
- Habitación / día (IVA No Incluido): Standard: 100 €. // Suite: 150 €.
- Cargos adicionales: Pax adicional sumarle 40 € al precio de cada noche. 
- IVA sumarle un 21% al total.
*** No se especifica si el precio es por persona o por pareja, lo tomo que es por persona para hacer más interesante el ejercicio ***
*/

const reservas = [
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3
    }, {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4
    }, {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1
    }
];

const precios = 
    {
        standard: 100,
        suite: 150,
        business: 100
    }
;

class HotelBookings {
    constructor() {
        this._data = [];
        this._prices = {};
        this._subtotal = 0;
        this._total = 0;
    }

    get data() {
        return this._data;
    }

    set data(bookingsInput) {
        this._data = bookingsInput;
        this.calculateSubtotal();
        this.calculateTotal();
    }

    set prices(pricesInput) {
        this._prices = pricesInput;
    }

    get prices() {
        return this._prices;
    }

    get subtotal() {
        this.calculateSubtotal();
        this.calculateTotal();
        return this._subtotal;
    }

    get total() {
        return this._total;
    }
    
    /* EJERCICIO ADICIONAL
    Añadimos un campo a cada reserva en el que indicamos si el desayuno está incluido o no: en caso de estar incluido supone un cargo adicional de 15 € por persona y noche. */

    calculateBreakfast(room) {
        return (room.desayuno ? 15 : 0) * room.pax;
    }

    calculateEveryRoom(room) {
        return this._subtotal; //Función inicializada para extenderla en las clases heredadas
    }

    priceOfRoom(typeOfRoom) {
        return this._prices[typeOfRoom];
    }

    calculateSubtotal() {
        this._subtotal = Number((this._data.reduce((acc, room) => acc += this.calculateEveryRoom(room), 0)).toFixed(2));
    }

    calculateTotal() {
        this._total = this._subtotal * 1.21;
    }
}

/* DESAFÍO
Crear una clase base con la funcionalidad común, y dos clases hijas una con el caso para cliente particular y otra para tour operador. */

class PersonalBooking extends HotelBookings {
    constructor() {
        super();
    }

    calculateTypeOfRoom(room) {
        return room.tipoHabitacion === "standard" ? 100 : 150;
    }

    calculateAdditionalPerson(room){
        const additionalPerson = 40;
        return room.pax > 1 ? (room.pax - 1) * additionalPerson : 0;
    }

    calculateEveryRoom(room) {
        return room.noches * (super.priceOfRoom(room.tipoHabitacion) + this.calculateAdditionalPerson(room) + super.calculateBreakfast(room));
    }

    calculateTotal() {
        this._total = Number((this._subtotal * 1.21).toFixed(2));
    }
}

class BusinessBooking extends HotelBookings {
    constructor () {
        super();
    }

    calculateEveryRoom(room) {
        return room.noches * (super.priceOfRoom("business") + super.calculateBreakfast(room));
    }

    calculateTotal() {
        this._total = Number(((this._subtotal * 0.85) * 1.21).toFixed(2));
    }
}

const allBookings = new BusinessBooking();
allBookings.data = reservas;
allBookings.prices = precios;

console.log(`Subtotal de la reserva -> ${allBookings.subtotal}€`);
console.log(`Total de la reserva -> ${allBookings.total}€`);

