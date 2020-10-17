/* EJERCICIOS EXTRA - CLASES Y THIS
En un banco nos encontramos que tenemos:
- Cuentas de empresa y cuentas particulares.
- Tu puedes transferir dinero entre cuentas realizando transferencias.
- En las cuentas particulares el coste de hacer una transferencia es de 1 €, y en el de empresas 0.5 €

EJERCICIOS
1. Crear una clase Cuenta, esta clase va a tener los siguientes campos: (ID, Cuenta Beneficiario, NIF, Nombre beneficiario, Nombre cuenta, Saldo, Tipo de cuenta)
Y los siguientes métodos: 
- MuestraEstado
En el constructor le informaremos del ID de Cuenta, el nif del benficiario, el nombre de la cuenta y pondremos el saldo inicial. */

class Cuenta {
    constructor(id, cuentaBeneficiario, nif, nombreBeneficiario, nombreCuenta, saldo, tipoCuenta) {
        this.id = id;
        this.cuentaBeneficiario = cuentaBeneficiario;
        this.nif = nif;
        this.nombreBeneficiario = nombreBeneficiario;
        this.nombreCuenta = nombreCuenta;
        this.saldo = saldo;
        this.tipoCuenta = tipoCuenta;
    }

    muestraEstado() {
        console.log(`*** Cuenta: ${this.cuentaBeneficiario} ***
ID cuenta: ${this.id}
Nombre Beneficario: ${this.nombreBeneficiario}
Nombre Cuenta: ${this.nombreCuenta}
Tipo: ${this.tipoCuenta}
Saldo: ${this.saldo}
**********************************`);
    }
}


/* 2. Crear una clase Transaccion esta clase va tener los siguientes campos:
Cuenta origen. Cuenta destino. Cantidad a tranferir.
Y los siguientes métodos:
RealizaTransaccion(cantidad) hace efectiva la transacción (calculado la comisión y deduciendo de cada cuenta la cantidad correspondiente). */

class Transaccion {
    constructor(cuentaOrigen, cuentaDestino, cantidadTransferir) {
        this.cuentaOrigen = cuentaOrigen;
        this.cuentaDestino = cuentaDestino;
        this.cantidadTransferir = cantidadTransferir;
    }

    realizaTransaccion(cantidad) {
        const comision = this.cuentaDestino === "particular" ? 1 : 0.5;
        this.cuentaOrigen.saldo -= comision + cantidad;
        this.cuentaDestino.saldo += cantidad;
    }
}

/* 3. Vamos a crear una clase que se llamará LibroContable aquí vamos a tener todas las transacciones. 
Campos:
Array de transacciones. 
Métodos:
Realiza transacción: recibe como parámetros dos cuentas y realiza una transacción (la añade al listado de transacciones). 
Lista transacciones: lista todas las transacciones que se han realizado.
*/

class LibroContable {
    constructor() {
        this.arrayTransacciones = [];
    }

    incluyeTransaccion(cuentaOrigen, cuentaDestino) { //Le he cambiado el nombre para no confundirme con la de la clase Transacción
        super.realizaTransaccion();
    }
}

const cuentaA = new Cuenta(
    1,
    "ES6621000418401234567891",
    "12345678X",
    "Juan Perez",
    "Nomina",
    1400,
    "particular"
);
const cuentaB = new Cuenta(
    2,
    "ES1000492352082414205416",
    "A84939209",
    "Gestiones SL",
    "gastos",
    84400,
    "empresa"
);

console.log("*** Estado Inicial ***");
cuentaA.muestraEstado();
cuentaB.muestraEstado();

//const libroContable = new LibroContable();

//const transaccion = new Transaccion(cuentaB, cuentaA, 1800);

//const libroContable = new LibroContable();
//libroContable.realizaTransaccion(transaccion);

console.log("*** Estado final ***");
cuentaA.muestraEstado();
cuentaB.muestraEstado();

console.log("*** Listado transacciones ***");
//libroContable.listaTransacciones();