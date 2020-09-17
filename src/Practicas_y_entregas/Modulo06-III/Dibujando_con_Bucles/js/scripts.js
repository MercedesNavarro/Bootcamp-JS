/* DIBUJANDO CON BUCLES

- En cada ejercicio dibujaremos una figura por consola, usando uno o varios carácteres normales.
- Además, la figura podrá ser pintada con distintos tamaños.
- Crea una función para cada ejercicio que admita el tamaño de la figura como argumento. Llama a este argumento n.
- También es recomendable que la función admita como argumento(s) el carácter(es) usados para dibujar la figura. */

/* CUADRADO */
var square = (n, char) => {
    var counter = "";

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            counter += char;
        }
        console.log(i + " " + counter);
        counter = "";
    }
};

//square(8, "*");

/* CUADRADO CON BORDE */
var squareWithBorder = (n, charBorder, charInner) => {
    var counter = "";

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                counter += charBorder;
            } else {
                counter += charInner;
            }
        }
        console.log(counter);
        counter = "";
    }
};

//squareWithBorder(5, "B", "*");

/* CUADRADO DIAGONAL LEFT-RIGHT */
var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
    var counter = "";

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (j === i) {
                counter += charDiagonal;
            } else if (j < i) {
                counter += charDown;
            } else {
                counter += charUp;
            }
        }

        console.log(counter);
        counter = "";
    }
};

//squareDiagonalLR(5, "\\", "A", "B");

/* CUADRADO DIGONAL RIGHT-LEFT */
var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    var counter = "";

    for (var i = n; i >= 0; i--) {
        for (var j = 0; j < n; j++) {
            if (j === i) {
                counter += charDiagonal;
            } else if (j < i) {
                counter += charUp;
            } else {
                counter += charDown;
            }
        }

        console.log(counter);
        counter = "";
    }
};

//squareDiagonalRL(5, "/", "A", "B");

/* MEDIO DIAMANTE */
var halfDiamond = (n, char) => {
    var counter = "";

    for (var i = 0; i < n; i++) {
        for (j = 0; j < i + 1; j++) {
            counter += char;
        }

        console.log(counter);
        counter = "";
    }

    for (i = n; i > 1; i--) {
        for (j = (i - 1); j > 0; j--) {
            counter += char;
        }
        
        console.log(counter);
        counter = "";
    }
};

//halfDiamond(5, "*");

/* PIRÁMIDE */
var pyramid = (n, char) => {
    var counter = "";
    var space = " ";

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n + i; j++) {
            if (j >= (n - 1) - i) { // Resto 1 a n porque i/j siempre empieza en 0
                counter += char;
            } else {
                counter += space;
            }
        }
        console.log(counter);
        counter = "";    
    }
};

//pyramid(5, "*");

/* DIAMANTE */
var diamond = (n, char) => {
    var counter = "";
    var space = " ";

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n + i; j++) {
            if (j < n - (i + 1)) {
                counter += space;
            } else {
                counter += char;
            }
        }
        console.log(counter);
        counter = "";  
    }

    for (i = n; i > 1; i--) {
        for (var j = 0; j < (n + i) - 2; j++) { // n + i - 2 Resto 2 porque la primera línea no tendrá 10 -1 caracteres, sino 9 -1 ==> n = 5; i = n; n + i = 10 ==> 10 - 2 = 8
            if (j < (n - i + 1)) {
                counter += space;
            } else {
                counter += char;
            }
        }
        console.log(counter);
        counter = "";  
    }
};

diamond(5, "*");