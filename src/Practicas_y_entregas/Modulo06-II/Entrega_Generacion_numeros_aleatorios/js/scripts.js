/* GENERACIÓN DE NÚMEROS ALEATORIOS
 - Tiene que permitir escoger, de forma aleatoria, una cantidad determinada de números de entre un mínimo y un máximo:
    var randomPick = (n, min, max) => {
        ...
    };

IMPORTANTE: No deben repetirse los numeros escogidos aleatoriamente. */


var randomPick = (n, min, max) => {
    var rank = (max - min) + 1;
    var single;
    var numbers = [];

    for (var i = 1; i <= n; i++) {
        do {
            single = Math.floor(Math.random() * rank) + min;
        } while (numbers.indexOf(single) !== -1);

        numbers.push(single);
    }
    return numbers;
};

console.log(randomPick(10, 1, 100));