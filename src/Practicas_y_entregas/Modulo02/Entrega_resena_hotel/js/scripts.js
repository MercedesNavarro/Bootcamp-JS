/* BIBLIOTECA DE RECURSOS */
var hoteles,
    ratingStars;

hoteles = {
    plaza: {
        nombre: "Park Plaza Westminster Bridge London",
        ubicacion: "Londres",
        imagen: "https://q-cf.bstatic.com/xdata/images/hotel/square200/233361720.webp?k=64e5803d7731924550af08c86e98550f1e4e28b510257476672e62c454082b86&o="
    },
    royal: {
        nombre: "The Royal George Tintern",
        ubicacion: "Tintern",
        imagen: "https://r-cf.bstatic.com/xdata/images/hotel/square200/141631502.webp?k=00b869d171f8ee67455b35a7d3513097afcdd4ae686c29176435d76bbe8c2507&o="
    },
    clayton: {
        nombre: "Clayton Hotel Ballsbridge",
        ubicacion: "Dublín",
        imagen: "https://r-cf.bstatic.com/xdata/images/hotel/square200/59076227.webp?k=29d807181b5aa55ddefe32dc09d82635fded4e66e13677167e293f9dd935817e&o="
    }
};

ratingStars = {
    star1: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png",
    star2: "https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png",
    star3: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png",
    star4: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png",
    star5: "https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png",
};

/* VARIABLES DE LA INFORMACIÓN INTRODUCIDA POR EL USUARIO */
var hotelUsuario,
    ratingUsuario,
    anonimo;

hotelUsuario = prompt(`Introduzca el hotel sobre el que quiera realizar la reseña:
plaza | royal | clayton`);

ratingUsuario = "star" + prompt(`Introduzca puntuación para el hotel seleccionado:
1 | 2 | 3 | 4 | 5`);

anonimo = confirm("¿Desea que su reseña sea anónima?");

/* RELLENO DE LA INFORMACIÓN DEL HOTEL*/
document.getElementById("name").innerHTML = hoteles[hotelUsuario].nombre;
document.getElementById("location").innerHTML = hoteles[hotelUsuario].ubicacion;
document.getElementById("principal-image").src = hoteles[hotelUsuario].imagen;

/* RELLENO REVIEW */
document.getElementById("score").src = ratingStars[ratingUsuario];
document.getElementById("anonymous").checked = anonimo;