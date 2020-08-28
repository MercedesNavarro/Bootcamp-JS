/********** ENIGMA **********/
/* Vamos a implementar un encriptador / desencriptador de mensajes utilizando la técnica de la sustitución según las cadenas de texto dadas.

- Interfaz
Utiliza dos elementos textarea, uno que contendrá el mensaje en claro y otro con el mensaje encriptado. 
Añade también 2 botones, uno para encriptar y otro para desencriptar.

- Opcional
Simplifica el algoritmo anterior gracias al método indexOf().*/


/* BIBLIOTECA DE RECURSOS */
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


/* ENCRIPTACIÓN / DESENCRIPTACIÓN */
var encrypt = (message, original, transformed) => {
    message = message.toLowerCase();
    transformedMessage = "";

    for (var i = 0; i < message.length; i++) {     
        var change = false;

        for (var j = 0; j < original.length; j++) {
            if (message[i] === original[j]) {
                transformedMessage += transformed[j];
            break;
            } else if (j === original.length -1 && !change) {
                transformedMessage += message[i];
            break;
            }
        }
    }
    return transformedMessage;
};


/* SIMPLIFICACIÓN DE LA FUNCIÓN ENCRYPT CON EL USO DE INDEXOF */
var encryptIndexOf = (message, original, transformed) => {
    message = message.toLowerCase();
    transformedMessage = "";

    for (var i = 0; i < message.length; i++) {
        if (original.indexOf(message[i]) > -1) {
            transformedMessage += transformed[original.indexOf(message[i])];
        } else {
            transformedMessage += message[i];
        }
    }
    return transformedMessage;
};



/* Manejadores de eventos */
var handlerEncryptButton = () => {
    var plain = document.getElementById("plain-text").value;
    document.getElementById("encrypted-text").value = encryptIndexOf(plain, plainAlphabet, encryptedAlphabet);
};

var handlerDecryptButton = () => {
    var encrypted = document.getElementById("encrypted-text").value;
    document.getElementById("plain-text").value = encryptIndexOf(encrypted, encryptedAlphabet, plainAlphabet);
};


/* Eventos de los botones */
document.getElementById("encrypt-button").addEventListener("click", handlerEncryptButton);
document.getElementById("decrypt-button").addEventListener("click", handlerDecryptButton);
