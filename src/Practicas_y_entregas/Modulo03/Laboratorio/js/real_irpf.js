/* Desafío avanzado: 
buscar la legislación e intentar hacer una calculadora completa. */

/* He tomado como referencia: https://www.segurosbilbao.com/blog/tramos-irpf/ */

/* Variables utilizadas */
/* const empleado = {  Declarada en el archivo scripts.js
    bruto: 24000,
    hijos: 2,
    pagas: 14
};*/

var retencionMax,
    cuota = 0,
    retencion,
    netoAnual = empleado.bruto,
    netoMensual;


/* Rango de retenciones y cuotas según bruto anual */
switch (true) {
    case empleado.bruto < 12450:
        rentecionMax = 0.19;
    break;
    case empleado.bruto >= 12450 && empleado.bruto < 20200:
        retencionMax = 0.24;
        cuota = 2365.50;
    break;
    case empleado.bruto >= 20200 && empleado.bruto < 35200:
        retencionMax = 0.30;
        cuota = 4225.50;
    break;
    case empleado.bruto >= 35200 && empleado.bruto < 60000:
        retencionMax = 0.37;
        cuota = 8725.50;
    break;
    case empleado.bruto >= 60000:
        retencioMax = 0.45;
        cuota = 17901.50;
}


/* Cálculo de la retención practicada y sueldo neto anual */
retencion = (empleado.bruto - cuota) * retencionMax;
netoAnual = empleado.bruto - retencion;


/* Muestra por consola */
console.log(`El neto anual es de ${netoAnual}€.
La retención practicada ha sido de un ${retencionMax}`);


/* Muestra en el documento */
document.getElementById("irpf-console").innerHTML += `
El neto anual es de ${netoAnual}€.<br>
La retención practicada ha sido de un ${retencionMax}`;