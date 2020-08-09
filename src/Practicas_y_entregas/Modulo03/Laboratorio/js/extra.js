/* Objeto de ejemplo de empleado dado */
const empleado = {
    bruto: 24500,
    hijos: 2,
    pagas: 14
};


/* Variables utilizadas */
var retencion = 0, /* Inicializada en 0 para no añadir otro caso al switch */
    netoAnual = empleado.bruto,
    netoMensual;


/* Rango de retenciones según bruto anual */
switch (true) {
    case empleado.bruto > 12000 && empleado.bruto < 24000:
        retencion = 0.08;
    break;
    case empleado.bruto > 24000 && empleado.bruto < 34000:
        retencion = 0.16;
    break;
    case empleado.bruto > 34000:
        retencion = 0.3;
}


/* Descuento en la retención por tener algún hijo */
if (empleado.hijos > 0 && retencion > 0) retencion -=0.02;


/* Cálculo de salario anual */
netoAnual = empleado.bruto - (empleado.bruto * retencion);

console.log(`El neto anual con la reducción aplicada es de ${netoAnual}€`);
document.getElementById("salary-console").innerHTML = `
El neto anual con la reducción aplicada es de ${netoAnual}€`;


/* Cálculo de salario mensual */
netoMensual = netoAnual / empleado.pagas;


/* Muestra por consola */
console.log(`El neto mensual es de ${netoMensual}€.
El empleado cobra su sueldo en ${empleado.pagas} pagas`);


/* Muestra en el documento */
document.getElementById("salary-console").innerHTML += `
<br><br>
El neto mensual es de ${netoMensual}€.<br>
El empleado cobra su sueldo en ${empleado.pagas} pagas`;